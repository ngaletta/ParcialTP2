import express from 'express'
import RouterNumeros from './router/numeros.js'
import config from './config.js'

const app = express()

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))

const routerNumeros = new RouterNumeros()

app.use('/numeros', routerNumeros.start())

const PORT = config.PUERTO
const server = app.listen(PORT, () => console.log(`Servidor express escuchando en el puerto ${PORT}`))
server.on('error', error => console.log('Servidor express en error:', error) )
