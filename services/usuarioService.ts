import Usuarios, { UsuarioInterface } from "../models/usuario";
import mongoose from 'mongoose'
import logger from "../logger";

class usuarioService {

    static async createUsuario(requisicao: UsuarioInterface) {

        const session = await mongoose.startSession()
        session.startTransaction()
        try {
            const { nome_usuario, senha } = requisicao;

            const usuario = await Usuarios.create({
                nome_usuario,
                senha,
            });

            await session.commitTransaction();
            logger.log('info', 'Usuário criado: ', usuario._id);
            session.endSession();
            return usuario;
        } catch (err) {
            logger.log('error', 'Erro ao criar usuário');
            await session.abortTransaction();
            session.endSession();
            return new Error("Erro ao criar um usuário, favor contactar o administrador!");
        }

    }

    static async getUsuarioUnico(idUsuario: any) {
        try {
            const usuario = await Usuarios.find({ _id: { idUsuario } });
            logger.log('info', 'Usuário solicitado: ', idUsuario);
            return usuario
        } catch (err) {
            logger.log('error', 'Erro ao soliciar usuário: ', idUsuario);
            return new Error("Não foi possível retornar um usuário, favor verificar!");
        }
    }
}

export default usuarioService;