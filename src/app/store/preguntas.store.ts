import { Pregunta } from "../core/models/Pregunta.model";

export function getPreguntas(): Pregunta[]{
    return [
        {
            titulo : "Como crear una clase ",
            idp : 4,
            votos : 56,
            fecha : "15-02-2024",
            descripcion :"tengo una duda de como crear una clase",
            asignatura : "IPI",
            comentarios: 18,
        },
        {
            titulo: "Que tipo de dato se utiliza para expresiones decimales ",
            idp : 8,
            votos : 14,
            fecha : "15-02-2024",
            descripcion :"No estoy seguro del tipo de dato para expresiones decimales ",
            asignatura : "EDI",
            comentarios: 8,
        },
        {
            titulo : "Cuál cree que es la habilidad más importante que debería tener un programador ",
            idp : 2,
            votos : 29,
            fecha : "15-02-2024",
            descripcion :"Habilidad mas importante para ser mejor programador",
            asignatura : "EDI",
            comentarios: 14,


        },
        {
            titulo : "Cuantos tipos de lenguaje existen para programar",
            idp : 12,
            votos : 13,
            fecha : "15-02-2024",
            descripcion :"Lenguajes para poder programar ",
            asignatura : "IPI",
            comentarios: 4,
        },
        {
            titulo :"Que libros pueden servir para un programador ",
            idp : 9,
            votos : 40,
            fecha :"15-02-2024",
            descripcion :"Algunos libros que me ayuden a programar",
            asignatura : "EDI",
            comentarios: 8,
        }
    ]
}