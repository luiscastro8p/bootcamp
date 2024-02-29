import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-primer-dia',
  standalone: true,
  imports: [],
  templateUrl: './primer-dia.component.html',
  styleUrl: './primer-dia.component.scss'
})
export class PrimerDiaComponent {
  @Input() ejemplo:string = '';
  @Input() usuario:number = 0;

  card = {
    title: 'Titulo principal',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid recusandae, et nulla dolores necessitatibus labore praesentium ipsam dicta iusto consectetur culpa dignissimos ea! Eum, sequi illo fugit incidunt eveniet tenetur!"
  }
}
