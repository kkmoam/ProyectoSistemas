import mongoose from "mongoose";//Conectar una base de datos
import cors from "cors";//Dar seguridad a un server
import dotenv from "dotenv";//Poder llamar lo que hay en .env
import express from "express";//Crear un servidor local
//importaciones de librerias

dotenv.config();
mongoose.connect(process.env.urlBD)//conectar con mogo db compass
.then(()=>{
    console.log("Funciona la base de datos")
})
.catch((error)=>{
    console.log("No jalo la base", error)
})//Promesa de verificacion de funcionamiento

const app = express();//Servidor realizado
app.use(cors());
app.listen(4000, ()=>{
    console.log("Se escucha el servidor, no escucha borroso")
})//Verificar si fuciona el servidor