const asyncHandler = require("express-async-handler");
const {
  getAllStudents,
  addNewStudent,
  getStudentDetail,
  setStudentStatus,
  updateStudent,
} = require("./students-service");

const handleGetAllStudents = asyncHandler(async (req, res) => {
  const students = await getAllStudents();
  res.status(200).json({ students });
});

const handleAddStudent = asyncHandler(async (req, res) => {
  const newStudent = await addNewStudent(req.body);
  res.status(201).json({ message: "Student added successfully", student: newStudent });
});

const handleUpdateStudent = asyncHandler(async (req, res) => {
  const updatedStudent = await updateStudent(req.params.id, req.body);
  res.status(200).json({ message: "Student updated", student: updatedStudent });
});

const handleGetStudentDetail = asyncHandler(async (req, res) => {
  const student = await getStudentDetail(req.params.id);
  res.status(200).json({ student });
});

const handleStudentStatus = asyncHandler(async (req, res) => {
  const updated = await setStudentStatus(req.params.id, req.body.status);
  res.status(200).json({ message: "Student status updated", student: updated });
});

module.exports = {
  handleGetAllStudents,
  handleGetStudentDetail,
  handleAddStudent,
  handleStudentStatus,
  handleUpdateStudent,
};
