import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  public fila: string[] = [];
  public ultimasChamadas: string[] = [];

  adicionarFila(senha: string) {
    this.fila.push(senha);
  }

  chamarProximo() {
    if (this.fila.length > 0) {
      const proxima = this.fila.shift();
      if (proxima) {
        this.ultimasChamadas.unshift(proxima);
        if (this.ultimasChamadas.length > 5) {
          this.ultimasChamadas.pop();
        }
        return proxima;
      }
    }
    return null;
  }
}