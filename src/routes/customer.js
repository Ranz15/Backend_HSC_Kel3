// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const customersControllers = require("../controllers/customers");

// Inisialisasi Middleware
const {
  validatorCreateUser,
  validateLogin,
} = require("../middlewares/validator");

const { verifyJWT } = require("../middlewares/verifyToken");

// Route Section

// Create - POST
router.post(
  "/",
  verifyJWT,
  validatorCreateUser,
  customersControllers.createUser
);

// Read - GET
router.get("/", verifyJWT, customersControllers.getAllUsers);

// Update - PATCH
router.patch("/:idUser", customersControllers.updateUser);

// Delete - DELETE
router.delete("/:idUser", customersControllers.deleteUser);

// Login - POST
router.post("/login", validateLogin, customersControllers.login);

// Profile - POST (beta version - Full bug in maintance)
router.post("/profile", verifyJWT, customersControllers.getProfile);

module.exports = router;
