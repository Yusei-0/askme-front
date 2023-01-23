import { PreguntaDTO } from "./Pregunta.dto";
import { UsuarioDto } from "./Usuario.dto";

export interface RespuestaDto {
    idr: number;
    descripcion: string;
    calificacion: number;
    fecha: Date;
    pregunta : PreguntaDTO;
    usuario : UsuarioDto;
}