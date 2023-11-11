// Pemanggilan Library Express
const express = require("express");
const { route } = require("express/lib/application");

// Menggunakan function express untuk route
const router = express.Router();

// Pemanggilan Controller User (untuk logic CRUD)
const customersControllers = require("../controllers/customers");

// Route Section

// Create - POST
router.post("/", customersControllers.createUser);

// Read - GET
router.get("/", customersControllers.getAllUsers);

// Update - PATCH
router.patch("/:idUser", customersControllers.updateUser);

// Delete - DELETE
router.delete("/:idUser", customersControllers.deleteUser);

module.exports = router;
