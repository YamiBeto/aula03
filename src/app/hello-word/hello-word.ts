import { Component } from '@angular/core';
import { Mundo2 } from '../mundo2/mundo2';

@Component({
  selector: 'app-hello-word',
  imports: [Mundo2],
  templateUrl: './hello-word.html',
  styleUrl: './hello-word.css'
})
export class HelloWord {

}
