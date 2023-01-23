import { PreguntaDTO } from "./Pregunta.dto";
import { RespuestaDto } from "./Respuesta.dto";

export interface UsuarioDto {
    idu: number;
    nombre_de_usuario: string;
    password:string;
    reputacion: number;
    grado_que_cursa: number;
    preguntas: PreguntaDTO[];
    respuestas : RespuestaDto[];
}
