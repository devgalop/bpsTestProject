import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './notfound.component.html',
  styleUrls: ['./notfound.component.css']
})
export class NotFoundComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit(): void {
  }

  onClick():void {
    console.log("redirigir a inicio ");
    this._router.navigate(['/'])
  }

}
