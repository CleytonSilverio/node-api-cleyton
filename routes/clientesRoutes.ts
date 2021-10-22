import express, { Request, Response } from 'express';
import ClientesController from '../controller/clienteController'

const router = express.Router();

router.get('/', async (req: Request, res: Response) => {
    ClientesController.getClientes(req, res);
});

router.post('/', async (req: Request, res: Response) => {
    console.log(req.body.enderecos)
    ClientesController.postClientes(req, res);
});

export default router;
