import { Component, Input, signal } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
@Input() nomeProduto = signal(''); 
@Input() precoProduto = signal(0);
@Input() url_Produto = signal ('');
}
