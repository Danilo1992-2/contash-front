import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private apiUrl = 'http://localhost:8000';
  
    constructor(private http: HttpClient) {}
  
    getData(): Observable<any> {
      return this.http.get(`${this.apiUrl}/deposits/deposit/1`);
    }
  
    // Exemplo de uma requisição POST
    postData(data: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/enviar-dados`, data);
    }
  }