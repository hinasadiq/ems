
import express from 'express';
import authController from '../controllers/authController.js';  // Ensure .js extension is included

const router = express.Router();

router.post('/login', authController.login);

export default router;
