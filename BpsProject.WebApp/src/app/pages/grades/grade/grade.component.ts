import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Grade } from '../interfaces/grade.interface';
import { NewGrade } from '../interfaces/newGrade.interface';
import { GradesService } from '../services/grades.service';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  grade! : NewGrade
  gradeName : string = ''
  gradeValue : number = 0
  gradeStudentId : number = 0
  gradeTeacherId : number = 0

  constructor(private gradesSvc : GradesService, private _router: Router) { }

  ngOnInit(): void {
  }

  createGrade():void{
    this.grade = {
      Name:this.gradeName, 
      Value:this.gradeValue, 
      StudentId:this.gradeStudentId,
      TeacherId:this.gradeTeacherId
    }
    console.log("Se guardará la nota: "+ this.grade.Name);
    this.gradesSvc.addGrade(this.grade).subscribe();
    console.log("redirigir a modulo inicial" );
    this._router.navigate(['/']);
  }

  goToBack():void{
    console.log("redirigir a modulo inicial" );
    this._router.navigate(['/grades']);
  }

}
