import { Component } from '@angular/core';
import { QueueService } from '../services/queue.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: false
})
export class Tab2Page {
  public senhaAtual: string | null = "";

  constructor(private queue: QueueService) {}

  chamarProximo() {
    this.senhaAtual = this.queue.chamarProximo();
    if (!this.senhaAtual) {
      alert("Fila vazia!");
    }
  }
}