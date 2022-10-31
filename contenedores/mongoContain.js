import Config from '../src/config.js'
import mongoose from "mongoose";

await mongoose.connect(Config.mongoDB.cnxStr, Config.mongoDB.options)

class contenedorCarritoMongo {
    // * get, post, put, delete
    // * CRUD
    constructor(collecionCarrito,esquema){
        this.db= mongoose.model(collecionCarrito,esquema)
    }
    async saveCarrito(newDoc){
        try{
        const doc = await  this.db.create(newDoc)
        return doc;   
        }
        catch(e){

        }
    }
    async getAllCarritos() {
        try{
    const data = await this.db.find({})
    return data;
    }
    catch(e){

    }   
    }

    async getbyCarritoId(id) {
        try{
            const data = await this.db.findOne({_id: id})
            return data;
        }
        catch(e){
            throw new Error (e)
        }
    }

    // * PUT
    async updateCarrito(elem) {
    try{ this.db.replaceOne({_id: elem._id},elem)
        return elem;
    } catch(e){
        throw new Error(e)
    }
    }
    async borrarCarrito(id){
        try{
        await this.db.deleteOne({_id:id})
        }
        catch(e){
            throw new Error(e)
        }
    }
    async borrarTodosCarrito(){
        await this.db.deleteMany({})
    }   
}
class contenedorProductosMongo {
    // * get, post, put, delete
    // * CRUD
    constructor(collecionCarrito,esquema){
        this.db= mongoose.model(collecionCarrito,esquema)
    }
    async saveProd(newDoc){
        try{
        const doc = await  this.db.create(newDoc)
        return doc;   
        }
        catch(e){

        }
    }
    async getAllProducts() {
        try{
    const data = await this.db.find({})
    return data;
    }
    catch(e){

    }   
    }

    async getbyProdId(id) {
        try{
            const data = await this.db.findOne({_id: id})
            return data;
        }
        catch(e){
            throw new Error (e)
        }
    }

    // * PUT
    async updateProducto(elem) {
    try{ this.db.replaceOne({_id: elem._id},elem)
        return elem;
    } catch(e){
        throw new Error(e)
    }
    }
    async borrarProducto(id){
        try{
        await this.db.deleteOne({_id:id})
        }
        catch(e){
            throw new Error(e)
        }
    }
    async borrarTodosProductos(){
        await this.db.deleteMany({})
    }   
}



export default { contenedorCarritoMongo, contenedorProductosMongo}