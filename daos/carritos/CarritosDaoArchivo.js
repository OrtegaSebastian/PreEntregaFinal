import ContenedorArchivo from "../../contenedores/archivoContain.js"

class CarritosDaoArchivo extends ContenedorArchivo {

    constructor() {
        super('carritos.json')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoArchivo