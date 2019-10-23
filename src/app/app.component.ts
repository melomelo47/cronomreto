import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
    mensaje:string = '';

    public actualizar(t){
        this.mensaje = t + ' (Se actualiza cada 10 segundos)';
    } 

}
