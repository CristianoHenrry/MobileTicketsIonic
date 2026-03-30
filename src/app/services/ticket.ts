import { Injectable } from '@angular/core';

export interface Ticket {
  numero: string;
  tipo: string;
  atendido: boolean;
  guiche?: number;
  horaEmissao: Date;
  horaAtendimento?: Date;
}

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  guicheAtual = 1;
  totalGuiches = 3;
  ultimaSenhaTipo: string = '';
  todosOsTickets: Ticket[] = [];
  fila: Ticket[] = [];
  historico: Ticket[] = [];
  contador = 1;

  gerarSenha(tipo: string) {
    const data = new Date();
    const numero = `${data.getFullYear().toString().slice(2)}${(data.getMonth() + 1)
      .toString().padStart(2, '0')}${data.getDate()
        .toString().padStart(2, '0')}-${tipo}${this.contador}`;

    const ticket: Ticket = {
      numero,
      tipo,
      atendido: false,
      horaEmissao: new Date()
    };

    this.fila.push(ticket);
    this.todosOsTickets.push(ticket);
    this.contador++;
  }

  getRelatorioGeral() {
    return {
      totalEmitidos: this.todosOsTickets.length,
      totalAtendidos: this.todosOsTickets.filter(t => t.atendido).length,
      emitidosSP: this.todosOsTickets.filter(t => t.tipo === 'SP').length,
      emitidosSE: this.todosOsTickets.filter(t => t.tipo === 'SE').length,
      emitidosSG: this.todosOsTickets.filter(t => t.tipo === 'SG').length,
      atendidosSP: this.todosOsTickets.filter(t => t.atendido && t.tipo === 'SP').length,
      atendidosSE: this.todosOsTickets.filter(t => t.atendido && t.tipo === 'SE').length,
      atendidosSG: this.todosOsTickets.filter(t => t.atendido && t.tipo === 'SG').length,
      tempoMedio: this.getTempoMedioAtendimento(),
      detalhes: this.todosOsTickets
    };
  }

  getTempoMedioAtendimento(): string {
    const atendidos = this.todosOsTickets.filter(t => t.atendido && t.horaAtendimento);

    if (atendidos.length === 0) return '00:00';

    const somaTempos = atendidos.reduce((acc, t) => {
      const diff = t.horaAtendimento!.getTime() - t.horaEmissao.getTime();
      return acc + diff;
    }, 0);

    const mediaMs = somaTempos / atendidos.length;
    const totalSegundos = Math.floor(mediaMs / 1000);
    const minutos = Math.floor(totalSegundos / 60);
    const segundos = totalSegundos % 60;

    return `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
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