
import Router from 'express'

import {
productosDao as productosApi,
} from '../../daos/index.js'

import { soloAdmins } from '../middleware/admin.js'

// configuro router de productos

const productosRouter = new Router()

productosRouter.get('/', async (req, res) => {
    console.log('GET /productos')
    const productos = await productosApi.getAllProducts()
    res.json(productos)
})

productosRouter.get('/:id', async (req, res) => {
    res.json(await productosApi.listar(req.params.id))
})

productosRouter.post('/', soloAdmins, async (req, res) => {
    res.json(await productosApi.guardar(req.body))
})

productosRouter.put('/:id', soloAdmins, async (req, res) => {
    res.json(await productosApi.actualizar(req.body))
})

productosRouter.delete('/:id', soloAdmins, async (req, res) => {
    res.json(await productosApi.borrar(req.params.id))
})

export default productosRouter