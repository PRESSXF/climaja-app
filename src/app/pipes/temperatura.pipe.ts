import { Pipe, PipeTransform } from '@angular/core';

/**
 * Pipe personalizado para formatar temperaturas
 * Exemplo de uso: {{ 23.5 | temperatura }}
 * Resultado: 23,5°C
 */
@Pipe({
  name: 'temperatura'
})
export class TemperaturaPipe implements PipeTransform {
  /**
   * Transforma o valor numérico em uma string formatada com a temperatura
   * @param value Valor numérico da temperatura
   * @returns String formatada com a temperatura e o símbolo de graus Celsius
   */
  transform(value: number): string {
    if (value === null || value === undefined) {
      return '';
    }
    
    // Formata o número com uma casa decimal e substitui ponto por vírgula
    const temperaturaFormatada = value.toFixed(1).replace('.', ',');
    
    // Retorna a temperatura formatada com o símbolo de graus Celsius
    return `${temperaturaFormatada}°C`;
  }
}
