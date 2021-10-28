import express from 'express';
import clientessRouter from './clientesRoutes';
import usuarioRouter from './usuarioRoute';

const router = express.Router();

router.use('/clientes', clientessRouter);
router.use('/usuarios', usuarioRouter);

export default router;
