import express from 'express'
import routerCarritos from '../src/routes/carritos.js'
import routerProductos from '../src/routes/productos.js'
//------------------------------------------------------------------------
// instancio servidor

const app = express()

//--------------------------------------------
// configuro el servidor

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))

app.use('/api/productos', routerProductos)
app.use('/api/carritos', routerCarritos)



export default app