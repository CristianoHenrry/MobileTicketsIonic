import { Injectable } from '@angular/core';

export interface Ticket {
  numero: string;
  tipo: string;
  atendido: boolean;
  guiche?: number;
  horaAtendimento?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  guicheAtual = 1;
  totalGuiches = 3;
  ultimaSenhaTipo: string = '';

  fila: Ticket[] = [];
  historico: Ticket[] = [];
  contador = 1;

  gerarSenha(tipo: string) {
    const data = new Date();
    const numero = `${data.getFullYear().toString().slice(2)}${(data.getMonth() + 1)
      .toString().padStart(2, '0')}${data.getDate()
        .toString().padStart(2, '0')}-${tipo}${this.contador}`;

    this.contador++;

    const ticket: Ticket = {
      numero,
      tipo,
      atendido: false
    };

    this.fila.push(ticket);
  }

  chamarProximo() {
    if (this.fila.length === 0) return;

    let index = -1;

    if (this.ultimaSenhaTipo !== 'SP') {
      index = this.fila.findIndex(t => t.tipo === 'SP');
    } else {
      index = this.fila.findIndex(t => t.tipo === 'SE');
      if (index === -1) {
        index = this.fila.findIndex(t => t.tipo === 'SG');
      }
    }

    if (index === -1) {
      index = 0;
    }

    const proximo = this.fila.splice(index, 1)[0];

    proximo.atendido = true;
    proximo.guiche = this.guicheAtual;
    proximo.horaAtendimento = new Date();

    this.ultimaSenhaTipo = proximo.tipo;


    this.guicheAtual++;
    if (this.guicheAtual > this.totalGuiches) {
      this.guicheAtual = 1;
    }

    this.historico.unshift(proximo);

    if (this.historico.length > 5) {
      this.historico.pop();
    }

    return proximo;
  }
}