import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Brasil } from './brasil/brasil';
import { Perfil } from './perfil/perfil';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Brasil ,Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('aula03');

  call(){
  alert('Brasil')

  }
}
