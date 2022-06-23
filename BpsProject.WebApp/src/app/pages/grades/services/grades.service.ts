import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Grade } from '../grade/interfaces/grade.interface';


@Injectable({
    providedIn: 'root'
})

export class GradesService {

    private apiURL = '/GradeService.svc/Grades/GetAll';

    constructor(private http: HttpClient) { }

    getGrades():Observable<any>{
        return this.http.get<Grade[]>(this.apiURL);
    }
}