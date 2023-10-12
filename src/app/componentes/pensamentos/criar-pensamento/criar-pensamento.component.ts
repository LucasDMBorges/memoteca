import { Component, OnInit } from "@angular/core";
import { PensamentoService } from "../pensamento.service";
import { Pensamento } from "../pensamento";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: "app-criar-pensamento",
  templateUrl: "./criar-pensamento.component.html",
  styleUrls: ["./criar-pensamento.component.css"],
})
export class CriarPensamentoComponent implements OnInit {
  formulario!: FormGroup;

  constructor(
    private pensamentoService: PensamentoService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formulario = this.fb.group({
      conteudo: ["Formulário reativo"],
      autoria: ["Angular"],
      modelo: [""],
    });
  }

  criarPensamento() {
    this.pensamentoService.criar(this.formulario.value).subscribe(() => {
      this.router.navigate(["/listarPensamento"]);
    });
  }

  cancelar() {
    this.router.navigate(["/listarPensamento"]);
  }
}
