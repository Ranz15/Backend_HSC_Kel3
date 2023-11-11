require("dotenv").config();

// Pemanggilan Library Express
const express = require("express");

// Inisialisasi PORT
const PORT = process.env.SERVER_PORT || 3030;

// Inisialisasi Middleware
const ruleLogRequest = require("./middlewares/logs");

// Inisialisasi Routes
const adminRoutes = require("./routes/admin");
const categoryRoutes = require("./routes/category");
const customerRoutes = require("./routes/customer");
const productRoutes = require("./routes/product");

// Pemanggilan Express
const app = express();

// Middleware Section
app.use(ruleLogRequest);

// Perizinan untuk menggunakan data dalam bentun JSON Parse
app.use(express.json());

// Routes Section
app.use("/admin", adminRoutes);
app.use("/category", categoryRoutes);
app.use("/users", customerRoutes);
app.use("/product", productRoutes);

// Listen App Port Section
app.listen(PORT, () => {
  console.log(`server berhasil dijalankan pada Port ${PORT}`);
});
