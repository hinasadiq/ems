

// import express from 'express';
// import { login, verify as verifyUser } from '../controllers/authController.js';  // Renamed to avoid conflict
// import authMiddleware from '../middleware/authMiddleware.js';
// import jwt from 'jsonwebtoken';
// const { verify: jwtVerify } = jwt;





// const router = express.Router();

// router.post('/login', login);
// router.post('/verify', authMiddleware, verifyUser);  // Use the renamed verify function

// export default router;
import express from 'express';
import authController from '../controllers/authController.js'; // Import the default export
import authMiddleware from '../middleware/authMiddleware.js';
import jwt from 'jsonwebtoken';

const { login, verify: verifyUser } = authController; // Destructure the functions
const { verify: jwtVerify } = jwt;

const router = express.Router();

router.post('/login', login);
router.post('/verify', authMiddleware, verifyUser);  // Use the renamed verify function

export default router;
// import express from 'express';
// import { login} from '../controllers/authController.js'; // Correctly importing named exports
// import { verify } from 'jsonwebtoken';
// import authMiddleware from '../middleware/authMiddleware.js'

// const router = express.Router();

// router.post('/login', login);
// router.post('/verify',authMiddleware,verify);

// export default router;
 

