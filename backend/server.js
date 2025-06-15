const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");

const authRoutes = require("./routes/authRoutes");
// const courseRoutes = require("./routes/courseRoutes"); ← comment this
const contactRoutes = require("./routes/contactRoutes");
const enquiryRoutes = require("./routes/enquiryRoutes");
const adminRoutes = require("./routes/adminRoutes");
const adminServices = require("./routes/adminServices");
// const paymentRoutes = require("./routes/paymentRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes);
// app.use("/api/courses", courseRoutes); ← comment this
app.use("/api/contact", contactRoutes);
app.use("/api/enquiry", enquiryRoutes);
app.use("/api/admin", adminRoutes);

app.use("/api/admin/services", adminServices);

// app.use("/api/admin/payment", paymentRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
