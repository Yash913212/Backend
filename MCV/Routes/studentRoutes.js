import express from 'express';
import { getStudents, addStudents, deleteStudents } from '../Controller/studentController.js';
const router = express.Router();
router.get('/get-Students', getStudents);
router.post('/add-Students', addStudents);
router.put('/deleted-data', deleteStudents);
export default router;