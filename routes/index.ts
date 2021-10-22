import express from 'express';
import clientessRouter from './clientesRoutes';

const router = express.Router();

router.use('/clientes', clientessRouter);

export default router;
