import { Bairro } from './bairro';
import { Estado } from './estado';

export interface Municipio {
    id: number;
    nome: string;
    estado: Estado;
    bairro: Bairro[];
  }