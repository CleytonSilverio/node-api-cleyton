import ClienteService from '../services/clienteService'
import { Request, Response } from 'express';
import Clientes, { ClienteInterface } from '../models/clientes';
import clienteService from '../services/clienteService';

class ClientesController {

    static async getClientes(req: Request, res: Response) {
        let todosClientes = null;
        if(req.query.dataini && req.query.datafim){
            todosClientes = await ClienteService.getClientesPorData(req.query.dataini, req.query.datafim);
        }else{
            todosClientes = await ClienteService.getClientes();
        }
        if (todosClientes === "erro400") {
            return res.status(400).json({
                message: "Não foi possivel encontrar os registros, contate o administrador!"
            });
        }
        else {
            return res.status(200).json(todosClientes);
        }
    }

    static async postClientes(req: Request, res: Response) {
        try {
            const requisicao = req.body;
            let cliente = await ClienteService.createCliente(requisicao);
            return res.status(201).json(cliente);
        } catch (err) {
            return res.status(400).json({
                message: 'Não foi possível inserir cliente, erro: ', err
            })
        }
    }

    static async patchClientes(req: Request, res: Response){
        const patchDoCliente = await clienteService.patchClientes(req.body, req.params.id);
        if(patchDoCliente === "erro400"){
            res.status(400).json({
                message: "Não foi possível atualizar o cliente!"
            })
        }else{
            res.status(200).json({
                message: `Cliente ${req.params.id} atualizado com sucesso!`
            })
        }
    }

    static async deleteClientes(req: Request, res: Response){
        const deleteCliente = await clienteService.deleteCliente(req.params.id);
        if(deleteCliente === "erro400"){
            res.status(400).json({
                message: "Não foi possível deletar o cliente, favor verificar!"
            })
        }else{
            res.status(200).json({
                message: `Cliente ${req.params.id} foi apagado com sucesso!`
            })
        }
    }
}

export default ClientesController;