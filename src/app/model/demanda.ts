import { TipoSanguineo } from './tiposanguineo';
import { Hemocentro } from './hemocentro';

export interface Demanda {
    id: number;
    data: string;
    status: StatusEnum;
    tiposanguineo: TipoSanguineo;
    hemocentro: Hemocentro;
}

export enum StatusEnum {
    Aberta = 1,
    Fechada = 0,
  }