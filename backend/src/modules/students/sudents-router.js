const express = require("express");
const {
  handleGetAllStudents,
  handleAddStudent,
  handleGetStudentDetail,
  handleStudentStatus,
  handleUpdateStudent,
} = require("./students-controller");

const router = express.Router();

// Ruta para obtener todos los estudiantes
router.get("/", handleGetAllStudents);

// Ruta para agregar un nuevo estudiante
router.post("/", handleAddStudent);

// Ruta para obtener el detalle de un estudiante por ID
router.get("/:id", handleGetStudentDetail);

// Ruta para actualizar un estudiante por ID
router.put("/:id", handleUpdateStudent);

// Ruta para cambiar el estado (activo/inactivo) de un estudiante
router.patch("/:id/status", handleStudentStatus);

module.exports = router;
