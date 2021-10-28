import { Request, Response } from 'express';
import logger from '../logger';
import usuarioService from '../services/usuarioService';

class usuarioController {
    static async solicitarCliente(req: Request, res: Response) {

        if (!req.query.id) {
            logger.log('warning', 'Tentativa de solicitar usuário sem id');
            return res.status(400).json({
                message: "Por favor, informe um id de usuário!",
            })
        }

        const usuario = await usuarioService.getUsuarioUnico(req.query.id);

        logger.log('info', 'usuário solicitado');
        return res.status(200).json(usuario);
    }

    static async criarCliente(req: Request, res: Response) {
        try {
            const usuario = await usuarioService.createUsuario(req.body);
            return res.status(200).json(usuario);
        } catch (err) {
            logger.log('error', 'Erro ao inserir usuário');
            return res.status(400).json({
                message: "Não foi possível criar um usuário, favor contacte o administrador!",
            });
        }
    }
}

export default usuarioController;