// import express from 'express';
// import authMiddleware from './middleware/authMiddleware.js'
// import { addDepartment } from '../controllers/departmentController.js';
// const router= express.Router()
// router.post('/add',authMiddleware,addDepartment)
// export default router

import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';  // Corrected import path
import { addDepartment } from '../controllers/departmentController.js';
import verifyUser from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/add', verifyUser, addDepartment);

export default router;