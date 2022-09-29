/* export interface Root {
  transferencias: Transferencia[]
} */
//? = propiedade opcional
export interface Transferencia {
  id?: number | string;
  valor: number ;
  destino: number | string ;
  data?: string;
}
