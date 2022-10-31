import  contenedorProductosMongo from "../../contenedores/mongoContain.js"

class DAOProdMongo extends contenedorProductosMongo{
    constructor(){
        // *super = padre/mongoProducto
        super("collectionProducto",{
            id:{type:string, require:true},
            nombre:{type:string, require:true},
            descripcion:{type:number, require:true},
            codigo:{type:string, require:true},
            foto:{type:string, require:true},
            precio:{type:number, require:true},
            stock:{type:number, require:true},
            timestamp:true,
        }) 
    }
}

export default DAOProdMongo












