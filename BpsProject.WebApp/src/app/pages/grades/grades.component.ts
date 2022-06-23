import { Component, OnInit } from '@angular/core';
import { Grade } from './interfaces/grade.interface';
import { tap } from 'rxjs/operators';
import { GradesService } from './services/grades.service';

@Component({
  selector: 'app-grades',
  templateUrl: './grades.component.html',
  styleUrls: ['./grades.component.css']
})
export class GradesComponent implements OnInit {

  grades!:Grade[];
  displayColumns= ['Id', 'Descripcion', 'Calificacion', 'Id Estudiante', 'Id Profesor', 'Acciones']

  constructor(private gradesSvc : GradesService) { }

  ngOnInit(): void {
    this.gradesSvc.getGrades()
    .pipe(
      tap( (grades : Grade[]) => this.grades = grades)
    )
    .subscribe();
  }

  onGradeSelected(grade: Grade):void {

  }

  onGradeUpdated(grade: Grade):void {

  }

  onGradeDeleted(id: number):void {

  }

}
