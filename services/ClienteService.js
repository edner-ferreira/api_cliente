import Cliente from "../models/Cliente.js";

export async function createCliente(data) {
    const cliente = await Cliente.create(data)
    return cliente
}

export async function findCliente(data) {
    const cliente = await Cliente.findOne(data)
    return cliente
}

export async function findAllClientes() {
    const cliente = await Cliente.find()
    return cliente
}

export async function updateCliente(id, data) {
    const cliente = await Cliente.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
  })
  return cliente
}

export async function deleteCliente(id) {
    const cliente = await Cliente.findByIdAndDelete(id)
    return cliente
}