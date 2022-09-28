import { Transferencia } from './../models/transferencia.models';
import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {
  //propiedades
  private listaTransferencia: any[];
  private url = 'http://localhost:3000/transferencias';
    //injetar uma class httpClient
  constructor(private httpClient: HttpClient) {
    //inicializar o array de transferencia
    this.listaTransferencia = [];
  }

  get transferencias() {
    return this.listaTransferencia;
  }

  // Observable implementa padrão de observador e esse metodo pode retonar essa resposta em algum futuro e quando eu quiser escutar oq veio dessa resposta eu vou me inscrever e escutar, quando chegar uma resposta(assincrona) quero escutar e saber o resultado dessa requisição

  todas(): Observable<Transferencia[]> {
    //retorno do get um observable com uma lista de transferencia
    return this.httpClient.get<Transferencia[]>(this.url)
  }

  adicionar(transferencia: any) {
    this.hidratarDados(transferencia);

    this.listaTransferencia.push(transferencia);
  }
  //adicionar recurso / dar uma lapidada nele
  private hidratarDados(transferencia: any) {
    transferencia.data = new Date();
    console.log(transferencia.data);
  }
}
