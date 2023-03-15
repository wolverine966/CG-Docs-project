import express from 'express';

import { addScan,getScan, getScan1 } from '../controller/user-controller.js';

const router = express.Router();

router.post('/add', addScan);
router.get('/list', getScan);
router.get('/:id', getScan1);

export default router;