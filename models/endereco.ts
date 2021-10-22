import mongoose from 'mongoose';

const enderecosSchema = new mongoose.Schema({
    rua: {
        type: String,
        required: true,
    },
    bairro: {
        type: String,
        required: true,
    },
    cidade: {
        type: String,
        required: true,
    },
    uf: {
        type: String,
    }
});

const Enderecos = mongoose.model('Enderecos', enderecosSchema);

export default Enderecos;
