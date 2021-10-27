import express, { Request, Response } from 'express';
import ClientesController from '../controller/clienteController'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    ClientesController.getClientes(req, res);
});

router.post('/', async (req: Request, res: Response) => {
    ClientesController.postClientes(req, res);
});

router.patch('/:id', async (req: Request, res: Response) => {
    ClientesController.patchClientes(req, res);
});

router.delete('/:id', async (req: Request, res: Response) => {
    ClientesController.deleteClientes(req, res);
});

export default router;
