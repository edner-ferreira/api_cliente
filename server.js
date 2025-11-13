import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import 'dotenv/config'
import clientesRoutes from './routes/ClientesRoutes.js'
import swaggerUi from 'swagger-ui-express'
import swaggerSpec from './swagger.js'

const app = express()
app.use(cors())
app.use(express.json())

const uri = process.env.MONGODB_URI
const port = process.env.PORT || 3000

mongoose
  .connect(uri)
  .then(() => console.log('MongoDB conectado'))
  .catch((err) => {
    console.error('Erro ao conectar no MongoDB:', err.message)
    process.exit(1)
  })

app.get('/', (req, res) => {
  res.json({
    ok: true,
    msg: 'Servidor Funcionando!'
  })
})

app.use(clientesRoutes)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use((err, req, res, next) => {
  console.error(err)
  res.status(err.status || 500).json({
    error: err.message || 'Erro Interno'
  })
})

app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`))