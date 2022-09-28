/* export interface Root {
  transferencias: Transferencia[]
} */
//? = propiedade opcional
export interface Transferencia {
  id?: number | string;
  valor: number | string;
  destino: string;
  data?: string;
}
