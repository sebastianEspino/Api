const express = require('express')
require('dotenv').config()
const modelUser = require('./backend/models/user.models')



var app = express()


app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/connect/:ref', async (req,res) => {
    const query = await modelUser.find({correo:req.params.ref});
    res.status(200).json(query)  
})

app.get('/connect', async (req,res) => {
    const query = await modelUser.find({});
    res.status(200).json(query)   
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

app.listen(process.env.PORT)