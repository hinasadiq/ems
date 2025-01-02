// import express from 'express';
// import authMiddleware from './middleware/authMiddleware.js'
// import { addDepartment } from '../controllers/departmentController.js';
// const router= express.Router()
// router.post('/add',authMiddleware,addDepartment)
// export default router

import express from 'express';
import authMiddleware from '../middleware/authMiddleware.js';  // Corrected import path
import { addDepartment ,getDepartments,getDepartment,updateDepartment,deleteDepartment} from '../controllers/departmentController.js';
import verifyUser from '../middleware/authMiddleware.js';
//import EditDepartment from '../../frontend/src/components/department/EditDepartment.jsx';

const router = express.Router();

router.get('/',authMiddleware, getDepartments);      
router.post('/add', verifyUser, addDepartment);      
router.get('/:id', authMiddleware,getDepartment);      
router.put('/:id', authMiddleware,updateDepartment);      
router.delete('/:id', authMiddleware,deleteDepartment);      

export default router;