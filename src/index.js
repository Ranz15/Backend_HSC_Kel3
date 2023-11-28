require("dotenv").config();

// Pemanggilan Library Express
const express = require("express");

// Inisialisasi Sequelize
const { sequelize } = require("./models");

// Inisialisasi Body Parser
const bodyParser = require("body-parser");

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
app.use(bodyParser.urlencoded({ extended: true }));
// Perizinan untuk menggunakan data dalam bentun JSON Parse
app.use(express.json());

// Check Connection With Database (Sequelize)
sequelize
  .authenticate()
  .then((error) => {
    console.log(`Database connection has been established successfully`);
  })
  .catch((error) => {
    console.log(`Connection Error ${error}`);
  });

// Routes Section
app.use("/admin", adminRoutes);
app.use("/category", categoryRoutes);
app.use("/users", customerRoutes);
app.use("/product", productRoutes);

// Listen App Port Section
app.listen(PORT, () => {
  console.log(`server berhasil dijalankan pada Port http://localhost:${PORT}`);
});
