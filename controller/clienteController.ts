import Clientes from '../models/clientes';
import Enderecos from '../models/endereco';
import Telefones from '../models/telefones';
import express, { Request, Response } from 'express';

class ClientesController {

    static async getClientes(req: Request, res: Response) {
        try {
            const todosClientes = await Clientes.find();
            return res.status(200).json(todosClientes);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    static async postClientes(req: Request, res: Response) {
        try {
            const { nome_cliente, data_nasc, enderecos: { rua, cidade, bairro, uf }, telefones: { numero, ddd, tipo_telefone}} = req.body;
            const cliente = await Clientes.create({
                nome_cliente,
                data_nasc,
                enderecos: { rua, cidade, bairro, uf },
                telefones: { numero, ddd, tipo_telefone}
            });
            await cliente.enderecos.push({enderecos: { rua, cidade, bairro, uf } });
            await cliente.telefones.push({telefones: { numero, ddd, tipo_telefone}});

            await cliente.save();
            return res.status(201).json(cliente);
        } catch(err){
            return res.status(400).json({
                message: 'Não foi possível inserir cliente, erro: ', err
            })
        }
    }
}

export default  ClientesController;