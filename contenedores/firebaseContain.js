import Config from '../src/config.js'
import admin from "firebase-admin"

admin.initializeApp({
    credential: admin.credential.cert(Config.firebase)
})

const db = admin.firestore();

class contenedorCarritofb {
    // * get, post, put, delete
    // * CRUD
    constructor(collecionCarrito){
        this.collection= db.collection(collecionCarrito)
    }
    async saveCarrito(newDoc){
        try{
        const doc = await  this.collection.create(newDoc)
        return doc;   
        }
        catch(e){
        }
    }
    async getAllCarritos() {
        try{
    const data = await this.collection.find({})
    return data;
    }
    catch(e){

    }   
    }

    async getbyCarritoId(id) {
        try{
            const data = await this.collection.findOne({_id: id})
            return data;
        }
        catch(e){
            throw new Error (e)
        }
    }

    // * PUT
    async updateCarrito(elem) {
    try{ this.collection.replaceOne({_id: elem._id},elem)
        return elem;
    } catch(e){
        throw new Error(e)
    }
    }
    async borrarCarrito(id){
        try{
        await this.collection.deleteOne({_id:id})
        }
        catch(e){
            throw new Error(e)
        }
    }
    async borrarTodosCarrito(){
        await this.db.deleteMany({})
    }   
}
class contenedorProductosfb {
    // * get, post, put, delete
    // * CRUD
    constructor(collecionProducto){
        this.collection= db.collection(collecionProducto)
    }
    async saveProd(newDoc){
        try{
        const doc = await  this.collection.create(newDoc)
        return doc;   
        }
        catch(e){

        }
    }
    async getAllProducts() {
        try{
    const data = await this.collection.find({})
    return data;
    }
    catch(e){

    }   
    }

    async getbyProdId(id) {
        try{
            const data = await this.collection.findOne({_id: id})
            return data;
        }
        catch(e){
            throw new Error (e)
        }
    }

    // * PUT
    async updateProducto(elem) {
    try{ this.collection.replaceOne({_id: elem._id},elem)
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



export default { contenedorCarritofb, contenedorProductosfb}