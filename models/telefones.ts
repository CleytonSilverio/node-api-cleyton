import mongoose from 'mongoose';

const telefonesSchema = new mongoose.Schema({
    numero: {
        type: Number,
        required: true,
    },
    ddd: {
        type: Number,
        required: true,
    },
    tipo_telefone: {
        type: String,
        required: true,
    },
});

const Telefones = mongoose.model('Telefones', telefonesSchema);

export default Telefones;
