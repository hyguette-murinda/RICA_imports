import express from 'express';
import { registerPermit } from '../controllers/permit.controller.js';

const router = express.Router();

router.post('/register', registerPermit);

export default router;