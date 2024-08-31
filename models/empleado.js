const mongoose = require("mongoose")

//esquema del colaborador
const empleadoModel = new mongoose.Schema(
    {  
        nombre:{
            type: String 
        },
        rol:{
            type: String
        },
        especialidad:{
            type: String
        },
        nivel_habilidad:{
            type: String
        },
        experiencia:{
            type: Number
        }
    
},
{
        timestamps:true,
        versionKey:false,

}
)
   //Modelo de datos del usuario
const ModelEmpleado = mongoose.model("empleados", empleadoModel);
module.exports = ModelEmpleado; 