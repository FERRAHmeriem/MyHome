import express from 'express'
import { Signup , SignIn , google , signOut} from '../controllers/auth.controller.js'
const router = express.Router()

router.post('/signup' , Signup);
router.post('/signin' , SignIn);
router.post('/google' , google);
router.get('/signout' , signOut);
export default router ;