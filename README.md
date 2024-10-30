![Estrutura de desacopulamento do CleanArchitecture ](https://blog.cleancoder.com/uncle-bob/images/2012-08-13-the-clean-architecture/CleanArchitecture.jpg)


# Sistema de Gestão de Produtos - Backend

Este projeto é um sistema de gestão de produtos desenvolvido para demonstrar habilidades em Node.js, TypeScript, Mongoose, Domain-Driven Design (DDD) e Arquitetura Limpa. A aplicação permite o gerenciamento de produtos com operações de criação, leitura, atualização e exclusão, estruturada para promover a manutenção e escalabilidade.

## Sumário

- [Visão Geral do Projeto](#visão-geral-do-projeto)
- [Arquitetura e Estrutura de Diretórios](#arquitetura-e-estrutura-de-diretórios)
- [Principais Componentes](#principais-componentes)
- [Instruções de Instalação e Configuração](#instruções-de-instalação-e-configuração)
- [Uso da API](#uso-da-api)
- [Testes](#testes)
- [Decisões Arquiteturais e Boas Práticas](#decisões-arquiteturais-e-boas-práticas)

---

## Visão Geral do Projeto

Este sistema utiliza princípios de DDD (Domain-Driven Design) e Arquitetura Limpa para organizar o código de forma modular e separar responsabilidades. A lógica de negócios é isolada em camadas, o que facilita a escalabilidade, a manutenibilidade e os testes do sistema.

---

## Arquitetura e Estrutura de Diretórios

A estrutura de diretórios segue os princípios do DDD e da Arquitetura Limpa:

```plaintext
src/
├── domain/                 # Regras de negócios empresariais
│   ├── application/
│   │   application/           
│   ├── enterprise
│   │     ├──entities         
│   └── dtos/               
│
├── Drivers/         # Estrutura e unidades
│   └── lib/
│       └── repositories        
│
├── Adapter/            # Adaptadores de interface
│   ├── controllers/       # Implementação dos repositórios de domínio
│   └── routes/           # Serviços de negócios (ex.: ProductService)
│
├── cors/                 # Utilitários e erros compartilhados
│   ├── errors/             # Classe de erro (ex.: AppError)
│   └── types/    
│   └── either.ts/           # Personalização de erros genericos
│
└── tests/                  # Testes unitários com Vitest
    └── unit/               # Testes organizados por módulos