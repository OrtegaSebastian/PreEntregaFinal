let productosDao
let carritosDao

switch (process.env.PERS) {
    case 'firebase':
        const { default: ProductosDaoFirebase } = await import('../daos/productos/productosDaoFirebase.js')
        const { default: CarritosDaoFirebase } = await import('../daos/carritos/CarritosDaoFirebase.js')

        productosDao = new ProductosDaoFirebase()
        carritosDao = new CarritosDaoFirebase()
        break
    case 'mongodb':
        const { default: DAOProdMongo } = await import('../daos/productos/ProductosDaoMongoDb.js')
        const { default: DAOcarroMongo } = await import('../daos/carritos/CarritosDaoMongoDb.js')

        productosDao = new DAOProdMongo()
        carritosDao = new DAOcarroMongo()
        break 
    default:
        const { default: ProductosDaoArchivo } = await import('../daos/productos/ProductosDaoArchivo.js')
        const { default: CarritosDaoArchivo } = await import('../daos/carritos/CarritosDaoArchivo.js')
        productosDao = new ProductosDaoArchivo()
        carritosDao = new CarritosDaoArchivo()
        break    
}

export { productosDao, carritosDao }