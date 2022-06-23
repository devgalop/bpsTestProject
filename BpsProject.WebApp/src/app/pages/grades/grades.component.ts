import { Component, OnInit } from '@angular/core';
import { Grade } from './interfaces/grade.interface';
import { tap } from 'rxjs/operators';
import { GradesService } from './services/grades.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades!:Grade[];
  displayColumns= ['Id', 'Descripcion', 'Calificacion', 'Id Estudiante', 'Id Profesor', 'Acciones']

  constructor(private gradesSvc : GradesService, private _route: Router) { }

  ngOnInit(): void {
    this.gradesSvc.getGrades()
    .pipe(
      tap( (grades : Grade[]) => this.grades = grades)
    )
    .subscribe();
  }

  addNewGrade(){
    this._route.navigate(['grades/add-grade']);
  }

  onGradeUpdated(grade: Grade):void {
    console.log("Nota seleccionada: "+ grade.Id + " - "+ grade.Name);
  }

  onGradeDeleted(id: number):void {

  }

}
