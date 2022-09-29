import { TransferenciaService } from './../services/transferencia.service';
import { Component, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../models/transferencia.models';
import { Router } from '@angular/router'

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  //jogar os dados pra fora
  @Output() aoTransferir = new EventEmitter<any>();

  //valor: number | string | undefined;
  //destino: number | string | undefined;
  valor: number;
  destino: number;

  constructor(private service: TransferenciaService, private router: Router) { }

  transferir() {
    console.log('Solicitada Nova transferência');
    //emitimos o valor
    const valorEmitir: Transferencia = {
      valor: this.valor,
      destino: this.destino,
    };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato')
    },
    //(error) => console.error(error)
  );
 }

  limparCampos() {
    //this.valor = ''
    //this.destino = ''
    this.valor = 0
    this.destino = 0
  }
}
