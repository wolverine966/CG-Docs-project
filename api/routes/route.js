import express from 'express';

import { addScan,getScan } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addScan);
router.get('/list', getScan);

export default router;