import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Grade } from '../interfaces/grade.interface';
import { GradesService } from '../services/grades.service';

@Component({
  selector: 'app-update-grade',
  templateUrl: './update-grade.component.html',
  styleUrls: ['./update-grade.component.css']
})
export class UpdateGradeComponent implements OnInit {
  grade!: Grade;
  constructor(private gradesSvc : GradesService,private router:Router, private activatedRoute:ActivatedRoute) {}

  ngOnInit(): void {
    this.grade=history.state;
  }

  updateGrade(grade:Grade): void{
    console.log("Se guardará la nota: "+ this.grade.Name);
    this.gradesSvc.updateGrade(this.grade).subscribe();
    console.log("redirigir a modulo inicial" );
    this.router.navigate(['/grades']);
  }

  goToBack():void{
    console.log("redirigir a modulo inicial" );
    this.router.navigate(['/grades']);
  }

}
