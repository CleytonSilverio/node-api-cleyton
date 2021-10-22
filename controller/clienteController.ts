import Clientes from '../models/clientes';
import Enderecos from '../models/endereco';
import Telefones from '../models/telefones';
import express, { Request, Response } from 'express';

class ClientesController {

    static async getClientes(req: Request, res: Response) {
        try {
            const todosClientes = await Clientes.find().populate([{
                path: 'enderecos',
                model: 'Enderecos'
            }, {
                path: 'telefones',
                model: 'Telefones'
            }]);
            return res.status(200).json(todosClientes);
        } catch (err) {
            return res.status(400).json(err);
        }
    }

    static async postClientes(req: Request, res: Response) {
        try {
            const { nome_cliente, data_nasc, enderecos: [{ rua, cidade, bairro, uf }], telefones: [{ numero, ddd, tipo_telefone }] } = req.body;
            const cliente = await Clientes.create({
                nome_cliente,
                data_nasc,
            });
            const enderecos = await Enderecos.create({
                rua,
                cidade,
                bairro,
                uf
            })
            const telefones = await Telefones.create({
                numero,
                ddd,
                tipo_telefone
            })
            await enderecos.save();
            await telefones.save();
            await cliente.enderecos.push(enderecos._id);
            await cliente.telefones.push(telefones._id);

            await cliente.save();
            return res.status(201).json(cliente);
        } catch (err) {
            return res.status(400).json({
                message: 'Não foi possível inserir cliente, erro: ', err
            })
        }
    }
}

export default ClientesController;