// // ... Решта імпортів
// import { getAllStudents, getStudentById } from './services/students.js';

// const PORT = Number(env('PORT', '3000'));

// export const startServer = () => {
// // ... Решта коду функції

// 	app.get('/students', async (req, res) => {
//     const students = await getAllStudents();

//     res.status(200).json({
//       data: students,
//     });
//   });

//   app.get('/students/:studentId', async (req, res) => {
//     const { studentId } = req.params;
//     const student = await getStudentById(studentId);

//     res.status(200).json({
//       data: student,
//     });
//   });

// 	// ... Решта коду функції
// }
