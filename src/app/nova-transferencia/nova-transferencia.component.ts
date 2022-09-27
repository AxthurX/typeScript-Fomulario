import { Component, Output, EventEmitter } from '@angular/core';

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

  transferir() {
    console.log('Solicitada Uma nova transferencia');
    //emitimos o valor
    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos()
  }

  limparCampos() {
    //this.valor = ''
    //this.destino = ''
    this.valor = 0
    this.destino = 0
  }
}
