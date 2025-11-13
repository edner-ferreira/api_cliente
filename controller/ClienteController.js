import * as ClienteService from "../services/ClienteService.js"

export async function create(req, res) {
    try {
        const cliente = await ClienteService.createCliente(req.body)
        res.status(201).json(cliente)
    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Falha ao criar o cliente' })
    }
}

export async function findCliente(req, res) {
    try {
        const cliente = await ClienteService.findCliente(req.params.id)
        res.status(201).json(cliente)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Falha ao buscar os clientes'})
    }    
}

export async function findAllClientes(req, res) {
    try {
        const cliente = await ClienteService.findAllClientes()
        res.status(201).json(cliente)
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Falha ao buscar os clientes'})
    }    
}

export async function update(req, res) {
    try {
        const cliente = await ClienteService.updateCliente(req.params.id,req.body)
        if (cliente){
            res.status(201).json(cliente)
        } else {
            res.status(401).json({
                error: 'Cliente não encontrado'
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Falha ao atualizar o cliente'})
    }
}

export async function deleteCliente(req, res) {
    try {
        const cliente = await ClienteService.deleteCliente(req.params.id)
        if (cliente) {
            res.status(201).json(cliente)
        } else {
            res.status(401).json({
                error: 'Falha ao remover o cliente'
            })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({error: 'Falha ao deletar o cliente'})
    }
    
}