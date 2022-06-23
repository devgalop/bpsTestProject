import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Grade } from '../interfaces/grade.interface';
import { NewGrade } from '../interfaces/newGrade.interface';


@Injectable({
    providedIn: 'root'
})

export class GradesService {

    private apiURL = '/api/GradesManager';
    private complementPath!:string;
    headers = new HttpHeaders().set('Content-Type', 'application/json');

    constructor(private http: HttpClient) { }

    getGrades():Observable<Grade[]>{
        this.complementPath = 'GetAll'
        return this.http.get<Grade[]>(`${this.apiURL}/${this.complementPath}`).pipe(
            catchError(this.handleError)
        );
    }

    getGradesByStudent(studentId: string): Observable<Grade[]> {
        this.complementPath = 'GetByStudent'
        return this.http.get<Grade[]>(`${this.apiURL}/${this.complementPath}/${studentId}`).pipe(
            catchError(this.handleError)
        );
    }

    addGrade(data: NewGrade): Observable<any> {
        this.complementPath = 'AddGrade'
        return this.http.post(`${this.apiURL}/${this.complementPath}`, data).pipe(
            catchError(this.handleError)
        );
    }

    updateGrade(data: Grade): Observable<any> {
        this.complementPath = 'UpdateGrade'
        return this.http.post(`${this.apiURL}/${this.complementPath}`, data).pipe(
            catchError(this.handleError)
        );
    }

    deleteGrade(id:number): Observable<any>{
        this.complementPath = 'DeleteGrade'
        return this.http.delete(`${this.apiURL}/${this.complementPath}/${id}`).pipe(
            catchError(this.handleError)
        );
    }
    
    handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            console.error('A ocurrido un error:', error.error.message);
        } else {
            console.error(
            `Backend ha retornado el codigo: ${error.status}, ` +
            `Mensaje: ${error.error}`);
        }
        return throwError(
            'A ocurrido un error inesperado, por favor intente más tarde');
    };
}