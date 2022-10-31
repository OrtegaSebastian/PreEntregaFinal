import contenedorProductosfb from "../../contenedores/firebaseContain.js";

class ProductosDaoFirebase extends contenedorProductosfb {
  constructor() {
    super("productos");
  } 
}

export default ProductosDaoFirebase;
