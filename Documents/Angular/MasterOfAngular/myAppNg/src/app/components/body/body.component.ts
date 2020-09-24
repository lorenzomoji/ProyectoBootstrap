import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  mostrar = true;

  frase: any = {
    mensaje: 'Un gran poder conlleva una gran responsabilidad',
    autor: 'Ben Parker'
  };

  personajes: string [] = ['Venom', 'Spiderman', 'Dr.Octopus'];

  constructor() { }

  ngOnInit(): void {
  }

}
