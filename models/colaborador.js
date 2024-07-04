const mongoose = require("mongoose")

//esquema del colaborador
const colaboradorModel = new mongoose.Schema(
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
const ModelColaborador = mongoose.model("colaboradores", colaboradorModel);
module.exports = ModelColaborador; 