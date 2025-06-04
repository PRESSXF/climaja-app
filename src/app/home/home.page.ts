import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ClimaService } from '../services/clima.service';
import { HistoricoService } from '../services/historico.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  cidade: string = '';
  climaAtual: any;
  carregando: boolean = false;

  public historicoService: HistoricoService;

  constructor(
    private climaService: ClimaService,
    historicoService: HistoricoService,
    private router: Router
  ) {
    this.historicoService = historicoService;
  }

  ngOnInit() {}

  buscarClima() {
    if (!this.cidade.trim()) {
      return;
    }
    this.carregando = true;
    this.climaService.getClimaAtual(this.cidade).subscribe(
      (data) => {
        this.climaAtual = data;
        this.carregando = false;
        this.historicoService.adicionarHistorico(this.cidade);
      },
      (error) => {
        console.error('Erro ao buscar clima:', error);
        this.carregando = false;
      }
    );
  }

  irParaDetalhes() {
    if (this.climaAtual && this.climaAtual.name) {
      this.router.navigate(['/detalhes-clima', this.climaAtual.name]);
    }
  }

  irParaHistorico() {
    this.router.navigate(['/historico-clima']);
  }

  selecionarCidade(cidade: string) {
    this.cidade = cidade;
    this.buscarClima();
  }
}
