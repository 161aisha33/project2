import { Router } from 'express';
import {
  getAttendance,
  postAttendance,
  putAttendance,
  delAttendance
} from '../controller/attendanceCon.js';
import { getLeave } from '../controller/leaveCon.js';

const router = Router();

router.get('/attendance/:id', getAttendance);
router.post('/attendance', postAttendance);
router.put('/attendance/:id', putAttendance);
router.delete('/attendance/:id', delAttendance);

router.get('/leave/:id', getLeave);

export default router;