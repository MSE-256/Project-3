let students = [
    { id: 1, name: "Juan", age: 21, status: true },
    { id: 2, name: "Ana", age: 22, status: true },
  ];
  
  let currentId = 3;
  
  const getAllStudents = async () => {
    return students;
  };
  
  const addNewStudent = async (data) => {
    const newStudent = { id: currentId++, ...data, status: true };
    students.push(newStudent);
    return newStudent;
  };
  
  const getStudentDetail = async (id) => {
    return students.find((student) => student.id === parseInt(id));
  };
  
  const updateStudent = async (id, data) => {
    const index = students.findIndex((student) => student.id === parseInt(id));
    if (index !== -1) {
      students[index] = { ...students[index], ...data };
      return students[index];
    }
    return null;
  };
  
  const setStudentStatus = async (id, status) => {
    const student = students.find((s) => s.id === parseInt(id));
    if (student) {
      student.status = status;
      return student;
    }
    return null;
  };
  
  module.exports = {
    getAllStudents,
    addNewStudent,
    getStudentDetail,
    updateStudent,
    setStudentStatus,
  };
  