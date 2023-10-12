import { Component, OnInit } from "@angular/core";
import { PensamentoService } from "../pensamento.service";
import { Pensamento } from "../pensamento";
import { Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

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
      conteudo: [
        "Formulário reativo",
        Validators.compose([
          Validators.pattern(/(.|\s)*\S(.|\s)*/),
          Validators.required,
        ]),
      ],
      autoria: [
        "Angular",
        Validators.compose([Validators.minLength(3), Validators.required]),
      ],
      modelo: ["modelo1"],
    });
  }

  criarPensamento() {
    if (this.formulario.valid) {
      this.pensamentoService.criar(this.formulario.value).subscribe(() => {
        this.router.navigate(["/listarPensamento"]);
      });
    }
  }

  cancelar() {
    this.router.navigate(["/listarPensamento"]);
  }

  habilitarBotao(): string {
    if (this.formulario.valid) return "botao";
    return "botao__desabilitado";
  }
}
