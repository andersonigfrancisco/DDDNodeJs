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
├── domain/                 # Entidades de domínio e interfaces principais
│   ├── entities/           # Modelos de entidades (ex.: Product)
│   ├── interfaces/         # Contratos e interfaces para o repositório e serviço
│   └── dtos/               # Data Transfer Objects (DTOs)
│
├── infrastructure/         # Implementação de persistência e infraestrutura
│   └── database/
│       └── models/         # Modelos Mongoose para interação com MongoDB
│
├── application/            # Lógica de aplicação
│   ├── repositories/       # Implementação dos repositórios de domínio
│   └── services/           # Serviços de negócios (ex.: ProductService)
│
├── presentation/           # Camada de apresentação e controladores HTTP
│   ├── controllers/        # Controladores (ex.: ProductController)
│   └── routes/             # Rotas organizadas para APIs
│
├── shared/                 # Utilitários e erros compartilhados
│   ├── errors/             # Classe de erro (ex.: AppError)
│   └── utils/              # Funções utilitárias comuns
│
└── tests/                  # Testes unitários com Jest
    └── unit/               # Testes organizados por módulos