const ModelColaborador = require ('../models/colaborador')

const colaboradorCtrl = {};
//Crear
colaboradorCtrl.createColaborador=   async (req, res) => {
    const body = req.body;
    const respuesta = await ModelColaborador.create(body)
    res.send(respuesta)
} 

//Consultar
colaboradorCtrl.getColaborador = async (req ,res)=>{
    const respuesta = await ModelColaborador.find({})
    res.send(respuesta)
}

//Consultar por Id
colaboradorCtrl.getUniqueColaborador = async (req ,res)=>{
    const id = req.params.id;
    const respuesta = await ModelColaborador.findById({_id:id})
    res.send(respuesta)

}

//Actualizar
colaboradorCtrl.editColaborador = async (req ,res)=>{
    const body = req.body;
    const id = req.params.id;
    const respuesta = await ModelColaborador.findByIdAndUpdate({_id:id},body);
    res.send(respuesta);
}

//Eliminar
colaboradorCtrl.deleteColaborador = async (req ,res)=>{
    const id = req.params.id;
    const respuesta = await ModelColaborador.deleteOne({_id:id})
    res.send(respuesta)
}

module.exports =colaboradorCtrl;
