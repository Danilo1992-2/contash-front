import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
    providedIn: 'root'
  })
  export class ApiService {
    private apiUrl = 'http://localhost:8001';
  
    constructor(private http: HttpClient) {}
  
    getDataApiRecebimento(): Observable<any> {
      return this.http.get(`${this.apiUrl}/deposits/all-deposits-current-moth/1`);
    }

    getDataApiGastos(): Observable<any> {
      return this.http.get(`${this.apiUrl}/withdraw/all-withdrawals-current-moth/1`);
    }
  
    // Exemplo de uma requisição POST
    postData(data: any): Observable<any> {
      return this.http.post(`${this.apiUrl}/enviar-dados`, data);
    }
  }