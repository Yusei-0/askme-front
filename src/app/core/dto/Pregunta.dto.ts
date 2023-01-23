import { UsuarioDto } from "./Usuario.dto";


export interface PreguntaDTO{
    titulo : string;
    idp: number;
    votos: number;
    fecha: Date;
    descripcion: string;
    asignatura: string;
    usuario: UsuarioDto;
}