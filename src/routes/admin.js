// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const adminControllers = require("../controllers/admin");

// Inisialisasi Middleware
const { verifyJWT } = require("../middlewares/verifyToken");

// Route Section

// Create - POST
router.post("/", verifyJWT, adminControllers.createAdmin);

// Read - GET
router.get("/", verifyJWT, adminControllers.getAllAdmin);

// Update - PATCH
router.patch("/:idUser", verifyJWT, adminControllers.updateAdmin);

// Delete - DELETE
router.delete("/:idUser", verifyJWT, adminControllers.deleteAdmin);

module.exports = router;
