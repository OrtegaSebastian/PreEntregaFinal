import contenedorCarritofb from '../../contenedores/firebaseContain.js' 

class CarritosDaoFirebase  extends contenedorCarritofb {

    constructor() {
        super('carritos')
    }

    async guardar(carrito = { productos: [] }) {
        return super.guardar(carrito)
    }
}

export default CarritosDaoFirebase