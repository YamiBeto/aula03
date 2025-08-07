import { Component, EventEmitter, Input, Output, signal } from '@angular/core';

@Component({
  selector: 'app-produto-detalhe',
  imports: [],
  templateUrl: './produto-detalhe.html',
  styleUrl: './produto-detalhe.css'
})
export class ProdutoDetalhe {
@Input() nomeProduto = signal<string>(''); 
@Input() precoProduto = signal<number>(0);
@Input() url_Produto = signal<string> ('');
@Output() clicado = new EventEmitter<void>();
}

