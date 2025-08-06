import { Component, signal } from '@angular/core';
// import { Brasil } from './brasil/brasil';
// import { Perfil } from './perfil/perfil';
// import { Pai } from './components/pai/pai';
import { ProdutoDetalhe } from "./produto-detalhe/produto-detalhe";

@Component({
  selector: 'app-root',
  imports: [
    // Brasil, Perfil, Pai, 
    ProdutoDetalhe],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title: string = "Teste";
  nomeProdutoPai = signal ("Baralho de duelo");
  precoProdutoPai = signal (250);
  url_ProdutoPai = signal ("https://img.yugioh-card.com/eu/wp-content/uploads/2023/05/SD_46_SDCK_Tuck_EN_Mock_715x1080_05-10-2023.webp");

  }

