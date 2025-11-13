import mongoose, { Schema } from 'mongoose';

const enderecoSchema = new mongoose.Schema({
    rua: { 
        type: String, 
        required: true 
    },
    bairro: {
        type: String,
        required: true
    },
    cep: {
        type: String,
        required: true
    },
    cidade: {
        type: String,
        required: true
    },
    estado: {
        type: String,
        required: true
    }
});

export default mongoose.model('endereco', Schema)