const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.protectAdmin = async (req, res, next) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return res.status(401).json({ message: "Unauthorized: No token" });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const admin = await Admin.findById(decoded.id).select("-password");
    if (!admin) return res.status(404).json({ message: "Admin not found" });

    req.admin = admin;
    next();
  } catch (err) {
    return res.status(401).json({ message: "Token failed", error: err.message });
  }
};
