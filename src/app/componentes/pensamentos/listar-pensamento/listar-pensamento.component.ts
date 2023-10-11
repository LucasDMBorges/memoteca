import { Component, OnInit } from "@angular/core";
import { TextoGrande } from "./listar-pensamento.const";
import { Pensamento } from "../pensamento";

@Component({
  selector: "app-listar-pensamento",
  templateUrl: "./listar-pensamento.component.html",
  styleUrls: ["./listar-pensamento.component.css"],
})
export class ListarPensamentoComponent implements OnInit {
  listaPensamentos: Pensamento[] = [];

  constructor() {}

  ngOnInit(): void {}
}
