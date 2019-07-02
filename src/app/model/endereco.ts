import { Bairro } from './bairro';
import { Hemocentro } from './hemocentro';

export interface Endereco {
    id: number;
    cep: string;
    numero: number;
    bairro: Bairro;
    hemocentro: Hemocentro[];
  }