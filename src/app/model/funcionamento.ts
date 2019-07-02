
import { Hemocentro } from './hemocentro';

export interface Funcionamento {
  id: number;
  horaAbertura: string;
  horaFechamento: string;
  hemocentro: Hemocentro;
  diaFuncionamento: DiaSemanaEnum;
}

export enum DiaSemanaEnum {
  Domingo = "Domingo",
  Segunda = "Segunda",
  Terca = "Terca",
  Quarta = "Quarta",
  Quinta = "Quinta",
  Sexta = "Sexta",
  Sabado = "Sabado"
}