import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ExampleService } from '../example.service';

@Component({
  selector: 'app-segundo-dia',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule],
  templateUrl: './segundo-dia.component.html',
  styleUrl: './segundo-dia.component.scss'
})
export class SegundoDiaComponent {
  variable = ''
  btn_class = 'btn btn-success'
  formulariouser: FormGroup = new FormGroup({
    name: new FormControl(''),
    description: new FormControl('')
  })

  name = ''
  description = ''


  user = [
    {
      name: 'luis 1',
      descripcion: 'Description 1 '
    },
    {
      name: 'luis 2',
      descripcion: 'Description 2 '
    },
    {
      name: 'luis 3',
      descripcion: 'Description 3 '
    },
    {
      name: 'luis 4',
      descripcion: 'Description 4 '
    }
  ]


  constructor() {

  }

  ngOnInit() {
  
  }

  ngDoCheck(): void {
  }

  clickButton(text: string) {
    this.variable = text
  }

  ngOnDestroy() {
  }

  submitForm() {

    console.log(this.formulariouser.value);

    /* console.log("el nombre es -->", this.name, "la descripcion es -->", this.description) */
  }
}
