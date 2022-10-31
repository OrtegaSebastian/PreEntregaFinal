import  contenedorCarritoMongo from "../../contenedores/mongoContain.js"

class DAOcarroMongo extends contenedorCarritoMongo{
    constructor(){
        // *super = padre/mongocarrito
        super("collecionCarrito",{
            nombre:{ type: String,required:true},
            descripcion:{type: String,required:true},
            codigo:{type: String,required:true},
            foto:{type: String,required:true},
            precio:{type: number,required:true},
            timestamp:true,
        })
    }

}



export default DAOcarroMongo
