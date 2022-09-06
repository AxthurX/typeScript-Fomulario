import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<any>();

  valor: number | string | undefined;
  destino: number | string | undefined;

  transferir() {
    console.log('Solicitada Uma nova transferencia');

    const valorEmitir = { valor: this.valor, destino: this.destino };
    this.aoTransferir.emit(valorEmitir);

    this.limparCampos()
  }

  limparCampos() {
    this.valor = ''
    this.destino = ''
  }
}
