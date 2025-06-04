import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistoricoService {
  // Chave para armazenar o histórico no localStorage
  private storageKey = 'historicoClimaJa';

  constructor() { }

  /**
   * Recupera o histórico de buscas do localStorage
   * @returns Array de strings com os nomes das cidades pesquisadas
   */
  getHistorico(): string[] {
    const historicoJson = localStorage.getItem(this.storageKey);
    if (historicoJson) {
      return JSON.parse(historicoJson);
    }
    return [];
  }

  /**
   * Adiciona uma cidade ao histórico de buscas
   * @param cidade Nome da cidade a ser adicionada
   */
  adicionarHistorico(cidade: string): void {
    let historico = this.getHistorico();

    // Remove a cidade se já existir para evitar duplicatas
    historico = historico.filter(c => c.toLowerCase() !== cidade.toLowerCase());

    // Adiciona a cidade no início do array
    historico.unshift(cidade);

    // Limita o histórico a 20 itens
    if (historico.length > 20) {
      historico = historico.slice(0, 20);
    }

    // Salva o histórico atualizado no localStorage
    localStorage.setItem(this.storageKey, JSON.stringify(historico));
  }
}
