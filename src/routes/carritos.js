
import {Router,express} from "express"
import fs from "fs"
import ContenedorArchivo from "../../contenedores/archivoContain.js"
const constructor = new ContenedorArchivo("./carritos.txt")

const routerCarritos = Router();

const Charts = [];
//  devuelve todos los productos.
routerCarritos.get('/products', async (req, res) => {
try {
res.send(await constructor.getAll());
} catch (err) {
res.status(404).send(err);
}
});


//  -> devuelve un producto según su id. 
routerCarritos.get('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    res.send(await constructor.getById(parseInt(id)));
  } catch (err) {
    res.status(404).send(err);
  }
});

// agrega productos 
routerCarritos.post('/products', async (req, res)=>{
  try {
    const {title, price, tumbnail} = req.body;
    const id = Products.length+1
    const itemToSave = {
      id,
      title,
      price,
      tumbnail
    }
    res.send(await constructor.save(itemToSave));
  } catch (err) {
    res.status(404).send(err);
  }
})


// PUT '/api/productos/:id' -> recibe y actualiza un producto según su id. 
routerCarritos.put('/products/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const {title, price, tumbnail} = req.body;
    const idInt = parseInt(id);
    const itemToUpdate = {
      id: idInt,
      title,
      price,
      tumbnail
    }
    res.send(await constructor.updateById(idInt, itemToUpdate));
  } catch (err) {
    res.status(404).send(err.msg);
  }
});


// DELETE '/api/productos/:id' -> elimina un producto según su id.
routerCarritos.delete('/products/:id', async (req,res)=>{
try {
const { id } = req.params;
res.send(await constructor.deleteById(parseInt(id)));
} catch (err) {
res.status(404).send(err.msg);
}
});

module.exports = routerCarritos;