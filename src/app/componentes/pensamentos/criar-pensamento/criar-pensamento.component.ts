import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-criar-pensamento',
  templateUrl: './criar-pensamento.component.html',
  styleUrls: ['./criar-pensamento.component.css']
})
export class CriarPensamentoComponent implements OnInit {

  pensamento= {
    conteudo: '',
    autoria: '',
    modelo: '', 
  }

  constructor() { }

  ngOnInit(): void {
  }

  criarPensamento(){
    console.log(this.pensamento);
  }

  cancelar(){
    console.log(this.pensamento);
  }

}
