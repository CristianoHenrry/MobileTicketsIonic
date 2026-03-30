# 📱 MobileTicketsIonic - Sistema de Controle de Atendimento

Este projeto consiste em um sistema de gerenciamento de filas de atendimento, desenvolvido como atividade prática da disciplina de Desenvolvimento Mobile. O aplicativo simula o fluxo operacional de uma clínica ou laboratório, abrangendo desde a emissão da senha até a geração de relatórios de desempenho gerencial.

## 🎯 Objetivo
Desenvolver uma solução utilizando **Ionic + Angular (Standalone Components)** capaz de gerenciar múltiplas filas, aplicar regras de prioridade automatizadas e fornecer métricas detalhadas de atendimento (como o Tempo Médio) conforme as especificações do cliente.

## ⚙️ Funcionalidades Implementadas

### ✅ Geração e Emissão de Senhas
* **Categorias**: SP (Prioritária), SE (Exame) e SG (Geral).
* **Formatação**: As senhas utilizam um padrão baseado na data atual e um contador sequencial para identificação única (ex: `260330-SP1`).

### ✅ Lógica de Prioridade e Chamada
* **Regra de Negócio**: O sistema prioriza senhas do tipo SP. A chamada alterna entre Prioritária e Geral/Exame para garantir o fluxo de atendimento.
* **Gestão de Guichês**: Distribuição automática das chamadas entre 3 guichês configurados, com alternância cíclica (1, 2 e 3).

### ✅ Relatórios e Métricas de Desempenho
* **Quantitativos Gerais**: Exibição do total de senhas emitidas e total de atendimentos realizados.
* **Métricas por Prioridade**: Contagem individualizada de emissões e atendimentos para os tipos SP, SE e SG.
* **Tempo Médio de Atendimento (TM)**: Cálculo em tempo real do intervalo médio entre a geração da senha e a chamada no guichê.
* **Relatório Detalhado**: Listagem completa contendo número da senha, tipo, horário de emissão, horário de atendimento e guichê responsável.

### ✅ Histórico
* Visualização rápida das últimas 5 senhas atendidas para monitoramento imediato.

## 🛠️ Tecnologias Utilizadas
* **Ionic Framework**: Interface mobile responsiva.
* **Angular (Standalone)**: Arquitetura moderna baseada em componentes independentes.
* **TypeScript**: Lógica de serviço e tipagem de dados.
* **Capacitor**: Integração para recursos nativos.

## 📸 Telas do Sistema
*(Insira aqui os prints capturados do seu simulador)*

1.  **Tela de Emissão (Tab1)**: Interface de seleção de categoria pelo cliente.
2.  **Painel de Chamada (Tab2)**: Interface do atendente para convocar a próxima senha.
3.  **Relatórios e Histórico (Tab3)**: Exibição detalhada das métricas e TM para gestão.


## 📄 Licença
Este projeto está sob a licença **MIT**.

## 👨‍💻 Autor
Desenvolvido por **Cristiano Henrry**.

---
**Observação de Entrega**: A pasta `node_modules` foi devidamente ignorada via `.gitignore` conforme exigido nas instruções rigorosas do projeto.

<img width="1886" height="925" alt="Captura de tela 2026-03-30 203211" src="https://github.com/user-attachments/assets/2b1cb9d6-f612-485a-9f41-e1cf589034e2" />

<img width="1866" height="853" alt="Captura de tela 2026-03-30 203152" src="https://github.com/user-attachments/assets/15ba5f61-77d6-4b54-9a20-cfd2a6902366" />

<img width="1871" height="920" alt="Captura de tela 2026-03-30 203222" src="https://github.com/user-attachments/assets/0c4be3a0-72ba-47e6-9c4c-0806b3315929" />


