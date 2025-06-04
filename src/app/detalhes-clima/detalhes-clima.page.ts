import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ClimaService } from '../services/clima.service';

@Component({
  selector: 'app-detalhes-clima',
  templateUrl: './detalhes-clima.page.html',
  styleUrls: ['./detalhes-clima.page.scss'],
  standalone: false
})
export class DetalhesClimaPage implements OnInit {

  // Nome da cidade para a qual será exibida a previsão
  cidade: string = '';

  // Objeto para armazenar a previsão de 5 dias retornada pela API
  previsao5dias: any;

  // Flag para indicar se a requisição está em andamento (loading)
  carregando: boolean = false;

  constructor(
    private route: ActivatedRoute, // Serviço para acessar parâmetros da rota
    private climaService: ClimaService // Serviço para requisições de clima
  ) {}

  // Método executado na inicialização do componente
  ngOnInit() {
    // Obtém o parâmetro 'cidade' da rota e decodifica para uso
    this.cidade = decodeURIComponent(this.route.snapshot.paramMap.get('cidade') || '');
    if (this.cidade) {
      this.buscarPrevisao(); // Busca a previsão para a cidade
    }
  }

  // Método para buscar a previsão de 5 dias da cidade
  buscarPrevisao() {
    this.carregando = true; // Ativa o indicador de carregamento
    this.climaService.getPrevisao5Dias(this.cidade).subscribe(
      (data) => {
        this.previsao5dias = data; // Armazena os dados da previsão
        this.carregando = false; // Desativa o indicador de carregamento
      },
      (error) => {
        console.error('Erro ao buscar previsão:', error);
        this.carregando = false; // Desativa o indicador em caso de erro
      }
    );
  }
}
