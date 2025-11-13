import { Router } from 'express'
import * as Controller from '../controller/ClienteController.js'

const router = Router()

/**
 * @swagger
 * tags:
 *   name: API-Clientes
 *   description: Rotas de gerenciamento de clientes
 */

/**
 * @swagger
 * /cliente:
 *   post:
 *     summary: Cria um novo cliente
 *     tags: [Clientes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: number
 *               sexo:
 *                 type: string
 *               cpf:
 *                 type: string
 *             required:
 *               - nome
 *               - idade
 *               - sexo
 *               - cpf
 *     responses:
 *       201:
 *         description: Cliente criado com sucesso
 *       400:
 *         description: Erro ao criar cliente
 */
router.post('/cliente', Controller.create)

/**
 * @swagger
 * /cliente/{cpf}:
 *   get:
 *     summary: Busca um cliente pelo CPF
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: cpf
 *         schema:
 *           type: string
 *         required: true
 *         description: CPF do cliente
 *     responses:
 *       200:
 *         description: Cliente encontrado
 *       404:
 *         description: Cliente não encontrado
 */
router.get('/cliente/:cpf', Controller.findCliente)

/**
 * @swagger
 * /clientes:
 *   get:
 *     summary: Lista todos os clientes
 *     tags: [Clientes]
 *     responses:
 *       200:
 *         description: Lista de clientes retornada com sucesso
 */
router.get('/clientes', Controller.findAllClientes)

/**
 * @swagger
 * /cliente/{id}:
 *   put:
 *     summary: Atualiza um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do cliente
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               idade:
 *                 type: number
 *               sexo:
 *                 type: string
 *               cpf:
 *                 type: string
 *     responses:
 *       200:
 *         description: Cliente atualizado com sucesso
 *       404:
 *         description: Cliente não encontrado
 */
router.put('/cliente/:id', Controller.update)

/**
 * @swagger
 * /cliente/{id}:
 *   delete:
 *     summary: Deleta um cliente pelo ID
 *     tags: [Clientes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do cliente
 *     responses:
 *       200:
 *         description: Cliente removido com sucesso
 *       404:
 *         description: Cliente não encontrado
 */
router.delete('/cliente/:id', Controller.deleteCliente)

export default router;

