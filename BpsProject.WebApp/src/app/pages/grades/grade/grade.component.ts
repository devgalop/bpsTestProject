import { Component, Input, OnInit } from '@angular/core';
import { Grade } from '../interfaces/grade.interface';

@Component({
  selector: 'app-grade',
  templateUrl: './grade.component.html',
  styleUrls: ['./grade.component.css']
})
export class GradeComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
  }

}
