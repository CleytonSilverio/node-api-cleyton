import mongoose from 'mongoose';
import Schema = mongoose.Schema;

const clientesSchema = new mongoose.Schema({
    nome_cliente: {
        type: String,
        required: true,
    },
    data_nasc: {
        type: String,
        required: true,
    },
    enderecos: [{
        type: Schema.Types.ObjectId,
        ref: 'Enderecos'
    }],
    telefones: [{
        type: Schema.Types.ObjectId,
        ref: 'telefones'
    }],
});

const Clientes = mongoose.model('Clientes', clientesSchema);

export default Clientes;
