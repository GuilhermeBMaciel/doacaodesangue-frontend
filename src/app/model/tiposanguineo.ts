import { Demanda } from './demanda';
import { Doador } from './doador';
import { TipoSanguineoEnum } from './Enum';

export interface TipoSanguineo {
    id: number;
    tipofator: TipoSanguineoEnum;
    demanda: Demanda[];
    doador: Doador[];
}