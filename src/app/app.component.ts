import { TransferenciaService } from './services/transferencia.service';
import { Component } from '@angular/core';

//App component ts recebe o evento e propaga pro service, ja não esta mais tratando de algo tão impotante.
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';
//  transferencias: any[] = [];

constructor(private service: TransferenciaService) {}
//Antes ultizavamos ele para manter a comunicação entre os componentes. mas agora com services não precisamos ficar gerenciando isso atravez de um componente pai, os proprios componentes agora são dependentes, eles conseguem comunicar e fazer as coisas acontecer.

//  transferir($event) {
//   	this.service.adicionar($event)  }
}
