import { Component } from '@angular/core';
import { QueueService } from '../services/queue.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: false
})
export class Tab1Page {
  public ultimaSenha: string = "";
  private seq: number = 1;

  constructor(private queue: QueueService) {}

  gerarSenha(tipo: string) {
    const agora = new Date();
    const data = agora.toISOString().slice(2, 10).replace(/-/g, '');
    this.ultimaSenha = `${data}-${tipo}${this.seq.toString().padStart(2, '0')}`;
    this.queue.adicionarFila(this.ultimaSenha);
    this.seq++;
  }
}