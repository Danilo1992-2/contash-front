import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.services';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  dadosDaAPI: any[] = [];

  
  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.apiService.getData().subscribe((data) => {
      this.dadosDaAPI = data;
    });
  }
}



