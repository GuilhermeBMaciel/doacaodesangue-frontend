import { Component, OnInit, TemplateRef } from "@angular/core";
import { Observable, empty, Subject } from "rxjs";
import { BsModalService, BsModalRef } from "ngx-bootstrap/modal";
import { catchError, map } from "rxjs/operators";

import { ProdutosListaService } from "./hemocentros-lista.service";
import { Hemocentro } from "src/app/model/hemocentro";

@Component({
  selector: "app-hemocentro-lista",
  templateUrl: "./hemocentro-lista.component.html",
  styleUrls: ["./hemocentro-lista.component.css"]
})
export class HemocentrosListaService implements OnInit {
  hemocentros$: Observable<Hemocentro[]>;
  error$ = new Subject<boolean>();

  modalRef: BsModalRef;
  message: string;

  private hemocentro = {
    nome: null,
    cnes: null,
    email: null,
    senha: null,
    telefone: null,
    tamanho: null,
    volume: null,
    material: null,
    genero: null
  };

  constructor(
    private service: ProdutosListaService,
    private modalService: BsModalService,
    private hemocentroListaService: ProdutosListaService
  ) {}

  ngOnInit() {
    console.log(this.hemocentro$);
    this.hemocentro$ = this.service.list().pipe(
      catchError(error => {
        console.error(error);
        this.error$.next(true);
        return empty();
      })
    );
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template, { class: "modal-sm" });
  }

  salvar(formulario) {
    console.log(formulario);
    this.hemocentroListaService.salvarProdutos(formulario);
  }

  cancelar(): void {
    this.modalRef.hide();
  }
}
