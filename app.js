const express = require("express");
const cors = require ('cors');
const dbconnect = require("./config");
const app = express();
const router = express.Router();

app.use(express.json());
app.use(cors({origin: 'http://localhost:4200'}));
app.use('/api/usuarios',require ('./routes/usuario.routes'));
app.use('/api/colaboradores',require ('./routes/colaborador.routes'));
app.listen(3005, ()=> {
     console.log("El servidor esta corriendo🏃🏻‍♂️🏃🏻‍♀️ en el puerto 3005")
});

dbconnect();



