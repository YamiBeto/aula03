import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil',
  imports: [],
  templateUrl: './perfil.html',
  styleUrl: './perfil.css'
})
export class Perfil {

  urlImagem = "https://media.tenor.com/KNALQSk1p7gAAAAM/yugioh-yugi.gif";


  private mensagem: string = "minha mensagem";

  getMensagem() {

    return this.mensagem;
  }
}


