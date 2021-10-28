import express from 'express';
import UsuarioController from '../controller/usuarioController';

const router = express.Router();

router.get('/', UsuarioController.solicitarCliente);

router.post('/', UsuarioController.criarCliente);

export default router;