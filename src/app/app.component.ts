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

constructor(private service: TransferenciaService) {

  }

  transferir($event) {
	console.log("Chamando o evento do metodo transferir",$event)
	this.service.adicionar($event)
  }
}
