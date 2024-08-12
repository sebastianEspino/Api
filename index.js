const express = require('express')
require('dotenv').config()
const modelUser = require('./backend/models/user.models')
const productsModels = require('./backend/models/products.models')
const customersModels = require('./backend/models/customer.models')
const ordersModels = require('./backend/models/orders.models')
var app = express()


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/connect/:ref', async (req,res) => {
    const query = await modelUser.find({correo:req.params.ref});
    res.status(200).json(query)  
    console.log(query)  
})

app.get('/connect', async (req,res) => {
    const query = await modelUser.find({});
    res.status(200).json(query) 
    console.log(query)  
})

app.post('/insert', async(req,res)=>{
    const newUser = {
        correo:req.body.correo,
        password:req.body.password,
        rol:req.body.rol,
        habilitado: true
    };

    let insert = await modelUser.create(newUser)
    if(insert){
        res.status(200).json({'mensaje':'inserted successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
})


app.put('/update/:ref', async (req,res)=>{
    const updateUser = {
        correo:req.body.correo,
        password:req.body.password,
        rol:req.body.rol,
        habilitado: true
    };

    let update = await modelUser.findOneAndUpdate({_id:req.params.ref},updateUser)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

})

app.delete('/delete/:id', async (req,res) => {
    const remove = await modelUser.findOneAndDelete({correo:req.params.id});
    res.status(200).json({"mensaje":"removed successfully"})   
})



/* The new information is the model of products*/


app.get('/products', async (req,res) => {
    const query = await productsModels.find({});
    res.status(200).json(query) 
    console.log(query)
       
})

app.post('/insertProduct', async(req,res)=>{
    const newProduct = {
        referencia:req.body.referencia,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        stock:req.body.stock,
        imagen:req.body.imagen,
        habilitado: true
    };

    let insert = await productsModels.create(newProduct)
    if(insert){
        res.status(200).json({'mensaje':'inserted successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
})


app.put('/updateProduct/:ref', async (req,res)=>{
    const updateProduct = {
        referencia:req.body.referencia,
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        stock:req.body.stock,
        imagen:req.body.imagen,
        habilitado: true
    };

    let update = await productsModels.findOneAndUpdate({_id:req.params.ref},updateProduct)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

})


app.delete('/delete/:id', async (req,res) => {
    const remove = await productsModels.findOneAndDelete({referencia:req.params.id});
    res.status(200).json({"mensaje":"removed successfully"})   
})

/* The new information is model of customers*/

app.get('/customers', async (req,res) => {
    const query = await customersModels.find({});
    res.status(200).json(query)
    console.log(query)
       
})

app.post('/insertCustomer', async(req,res)=>{
    const newCustomer = {
        nombre:req.body.nombre,
        telefono:req.body.telefono,
        direccion:req.body.direccion,
        habilitado:req.body.true,
        usuario:req.body._id
    };

    let insert = await customersModels.create(newCustomer)
    if(insert){
        res.status(200).json({'mensaje':'inserted successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
})


app.put('/updateCustomer/:ref', async (req,res)=>{
    const updateCustomer = {
        nombre:req.body.nombre,
        telefono:req.body.telefono,
        direccion:req.body.direccion,
        habilitado:req.body.true    
    };

    let update = await customersModels.findOneAndUpdate({_id:req.params.ref},updateCustomer)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

})


app.delete('/delete/:id', async (req,res) => {
    const remove = await customersModels.findOneAndDelete({referencia:req.params.id});
    res.status(200).json({"mensaje":"removed successfully"})   
})


/*The information is about model of orders */

app.get('/orders', async (req,res) => {
    const query = await ordersModels.find({});
    res.status(200).json(query)
    console.log(query)
       
})

app.post('/insertOrder', async(req,res)=>{
    const newOrder = {
        cliente:req.body.cliente,
        carrito:req.body.carrito,
        subtotal:req.body.carrito,
        impuesto:req.body.impuesto,
        total:req.body.total,
        estado:req.body.estado    
    };

    let insert = await ordersModels.create(newOrder)
    if(insert){
        res.status(200).json({'mensaje':'inserted successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }
})


app.put('/updateOrder/:ref', async (req,res)=>{
    const updateOrder = {
        cliente:req.body.cliente,
        carrito:req.body.carrito,
        subtotal:req.body.carrito,
        impuesto:req.body.impuesto,
        total:req.body.total,
        estado:req.body.estado    
    };

    let update = await ordersModels.findOneAndUpdate({_id:req.params.ref},updateOrder)
    if(update){
        res.status(200).json({'mensaje':'updated successfully'}) 
    }else{
        res.status(404).json({'error':'wrong!!'}) 
    }

})


app.delete('/delete/:id', async (req,res) => {
    const remove = await ordersModels.findOneAndDelete({referencia:req.params.id});
    res.status(200).json({"mensaje":"removed successfully"})   
})


app.listen(process.env.PORT)