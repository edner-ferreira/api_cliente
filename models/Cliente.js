import mongoose from 'mongoose';

const clienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    idade: {
        type: Number,
        required: true
    },
    sexo: {
        type: String,
        required: true
    },
    cpf: {
        type: String,
        required: true,
        unique: true
    }
});

export default mongoose.model('Cliente', clienteSchema);
