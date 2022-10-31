import ContenedorArchivo from "../../contenedores/archivoContain.js"

class ProductosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('productos.json')
    }
}

export default ProductosDaoArchivo
