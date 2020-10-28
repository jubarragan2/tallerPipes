import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tallerPipes';
  texto1: String;
  texto2: String;
  numero: number;
  fecha: Date = new Date();
}
