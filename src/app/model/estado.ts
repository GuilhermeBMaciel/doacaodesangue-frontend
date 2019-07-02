import { Municipio } from './municipio';

export interface Estado {
    id: number;
    nome: string;
    municipio: Municipio[];
  }