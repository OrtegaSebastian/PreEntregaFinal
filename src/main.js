import app from './server.js'
import dotenv from 'dotenv'

dotenv.config('./.env')



const PORT = 8080
const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
})
server.on('error', error => console.log(`Error en servidor ${error}`))
