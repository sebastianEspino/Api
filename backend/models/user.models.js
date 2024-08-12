const conexion = require('../config/connection')

const userSchema = new conexion.Schema({
    correo:{
        type: String,
        unique: [true, 'El correo ya existe'],
        required: true
    },
    password:{
        type: String,
        required: [true, 'Debe registrarse una contraseña'],
        minLength: [5, 'La contraseña debe tener más de 5 caracteres'],
        maxLength: [20, 'La contraseña debe ser de menos de 20 caracteres']

    },
    rol:{
        type: String,
        default: "guest"
    },
    habilitado:{
        type: Boolean,
        default: true
    }
},{versionKey:false});

const userModel = conexion.model('Usuarios', userSchema);

module.exports = userModel;