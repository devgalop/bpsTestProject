import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../student/interfaces/student.interface';


@Injectable({
    providedIn: 'root'
})

export class StudentsService {

    private apiURL = '';

    constructor(private http: HttpClient) { }

    getStudents():Observable<any>{
        return this.http.get<Student[]>(this.apiURL);
    }
}