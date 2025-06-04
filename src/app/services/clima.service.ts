import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  // URL base da API OpenWeatherMap
  private apiUrl = environment.openWeatherMapUrl;
  
  // Chave da API (em produção, deve ser armazenada em variáveis de ambiente)
  private apiKey = environment.openWeatherMapApiKey;

  constructor(
    private http: HttpClient // Injeção do HttpClient para fazer requisições HTTP
  ) { }

  /**
   * Busca o clima atual de uma cidade
   * @param cidade Nome da cidade para buscar o clima
   * @returns Observable com os dados do clima atual
   */
  getClimaAtual(cidade: string): Observable<any> {
    // Monta a URL com os parâmetros necessários
    const url = `${this.apiUrl}/weather?q=${cidade}&appid=${this.apiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }

  /**
   * Busca a previsão do tempo para 5 dias de uma cidade
   * @param cidade Nome da cidade para buscar a previsão
   * @returns Observable com os dados da previsão do tempo
   */
  getPrevisao5Dias(cidade: string): Observable<any> {
    // Monta a URL com os parâmetros necessários
    const url = `${this.apiUrl}/forecast?q=${cidade}&appid=${this.apiKey}&units=metric&lang=pt_br`;
    return this.http.get(url);
  }
}
