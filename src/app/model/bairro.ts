import { Endereco } from './endereco';
import { Municipio } from './municipio';

export interface Bairro {
    id: number;
    nome: string;
    municipio: Municipio;
    endereco: Endereco[];
  }