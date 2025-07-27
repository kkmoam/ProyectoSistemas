import { TablaAlumnos } from "../models/alumnos.model.js";

TablaAlumnos.create({
    name: "Shaiel",
    edad:19,
    calificacion: 4.4
},
{
    name: "Panchito",
    edad:23,
    calificacion: 5.3
}
)

export const test = ()=>{
    console.log("llamando al controlador desde app")
}//Poder llamar al controlador en app