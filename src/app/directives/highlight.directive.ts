import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

/**
 * Diretiva personalizada para destacar elementos ao passar o mouse
 * Exemplo de uso: <ion-item appHighlight>...</ion-item>
 */
@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
  constructor(
    private el: ElementRef, // Referência ao elemento DOM
    private renderer: Renderer2 // Renderer para manipulação segura do DOM
  ) {}

  /**
   * Evento disparado quando o mouse entra no elemento
   * Aplica um fundo azul claro para destacar
   */
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', '#d1eaff');
  }

  /**
   * Evento disparado quando o mouse sai do elemento
   * Remove o destaque aplicado
   */
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.removeStyle(this.el.nativeElement, 'background-color');
  }
}
