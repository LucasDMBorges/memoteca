import { Component, OnInit } from "@angular/core";
import { TextoGrande } from "./listar-pensamento.const";

@Component({
  selector: "app-listar-pensamento",
  templateUrl: "./listar-pensamento.component.html",
  styleUrls: ["./listar-pensamento.component.css"],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos = [
    {
      conteudo: "Curso Angular 14",
      autoria: "Lucas Dean",
      modelo: "modelo3",
    },
    {
      conteudo: "Comunicação entre componentes",
      autoria: "Lucas Dean",
      modelo: "modelo3",
    },
    {
      conteudo: TextoGrande,
      autoria: "Lucas Dean",
      modelo: "modelo3",
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
