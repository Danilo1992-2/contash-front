import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  dadosDaAPIDeposito: any[] = [];
  totalValueDeposito: number = 0;
  dadosDaAPIRetirada: any[] = [];
  totalValueRetirada: number = 0;
  

  
  constructor(private apiService: ApiService) {}
 
  ngOnInit() {
    this.apiService.getDataApiRecebimento().subscribe((data) => {
      this.dadosDaAPIDeposito = data;
      this.totalValueDeposito = 0;
      for (let i = 0; i < this.dadosDaAPIDeposito.length; i++) {
        this.totalValueDeposito += Number(this.dadosDaAPIDeposito[i].value.toFixed(2));
      
      }
    });

    this.apiService.getDataApiGastos().subscribe((data) => {
      this.dadosDaAPIRetirada = data;
      this.totalValueRetirada = 0;
      for (let i = 0; i < this.dadosDaAPIRetirada.length; i++) {
        this.totalValueRetirada += Number(this.dadosDaAPIRetirada[i].value.toFixed(2));
    }})
  }
}