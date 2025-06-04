import { Component, OnInit } from '@angular/core';
import { HistoricoService } from '../services/historico.service';

@Component({
  selector: 'app-historico-clima',
  templateUrl: './historico-clima.page.html',
  styleUrls: ['./historico-clima.page.scss'],
})
export class HistoricoClimaPage implements OnInit {
  historico: string[] = [];
  historicoPaginado: string[] = [];
  paginaAtual: number = 1;
  itensPorPagina: number = 5;
  totalPaginas: number = 1;

  constructor(private historicoService: HistoricoService) {}

  ngOnInit() {
    this.historico = this.historicoService.getHistorico();
    this.totalPaginas = Math.ceil(this.historico.length / this.itensPorPagina);
    this.atualizarPaginacao();
  }

  atualizarPaginacao() {
    const inicio = (this.paginaAtual - 1) * this.itensPorPagina;
    const fim = inicio + this.itensPorPagina;
    this.historicoPaginado = this.historico.slice(inicio, fim);
  }

  onPageChange(pagina: number) {
    if (pagina < 1 || pagina > this.totalPaginas) {
      return;
    }
    this.paginaAtual = pagina;
    this.atualizarPaginacao();
  }
}
