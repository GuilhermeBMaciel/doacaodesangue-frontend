import { Funcionamento } from './funcionamento';
import { Demanda } from './demanda';
import { Endereco } from './endereco';
import { Administrador } from './administrador';

export interface Hemocentro {
    id: number;
    nome: string;
    cnes: string;
    email: string;
    senha: string;
    telefone: string;
    status: boolean;
    funcionamento: Funcionamento[];
    demanda: Demanda[];
    endereco: Endereco;
    administrador: Administrador[];
  }