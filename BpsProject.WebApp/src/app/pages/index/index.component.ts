import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModuleEntity } from './interfaces/moduleEntity.interface'

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  modulesAvailables!: ModuleEntity[]

  constructor(private _router: Router){}
  
  ngOnInit(): void {
    this.modulesAvailables = [
      { name: 'Estudiantes', description:'Modulo de consulta de estudiantes', route: 'students'},
      { name: 'Profesores', description:'Modulo de consulta de profesores', route: 'teachers'},
      { name: 'Calificaciones', description:'Modulo de consulta de notas', route: 'grades'}
    ]
  }

  goTo(route: string): void {
    console.log("redirigir a modulo: " + route);
    this._router.navigate([route])
  }

}
