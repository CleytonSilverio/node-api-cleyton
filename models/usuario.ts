import mongoose from 'mongoose';

export interface UsuarioInterface extends Document{
    nome_usuario: string;
    senha: string;
    ativo: boolean;
}
const usuariosSchema = new mongoose.Schema({
    nome_usuario: {
        type: String,
        required: true,
    },
    senha: {
        type: String,
        required: true,
    },
    ativo: {
        type: Boolean,
        default: true,
    }
});

const Usuarios = mongoose.model('Usuarios', usuariosSchema);

export default Usuarios;
