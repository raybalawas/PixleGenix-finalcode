const express = require("express");
const {
  adminLogin,
  registerAdmin,
  getProtectedData
} = require("../controllers/adminController");
const { protectAdmin } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", adminLogin);
router.post("/register", registerAdmin); // Optional: One-time admin registration
router.get("/protected", protectAdmin, getProtectedData);

module.exports = router;
