import express from 'express';
import ClientesController from '../controller/clienteController';

const router = express.Router();

router.get('/', ClientesController.getClientes);

router.post('/', ClientesController.postClientes);

router.patch('/:id', ClientesController.patchClientes);

router.delete('/:id', ClientesController.deleteClientes);

export default router;
