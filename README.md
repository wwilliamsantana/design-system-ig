# Ignite UI — Design System

O Ignite UI é uma biblioteca de componentes React desenvolvida com TypeScript, criada para oferecer componentes de interface reutilizáveis, consistência visual e centralização dos tokens de design.

O projeto utiliza uma arquitetura de monorepo, reunindo uma biblioteca de componentes React, um pacote de tokens de design e documentação interativa desenvolvida com Storybook.

## Tecnologias

- React 18
- TypeScript
- Stitches
- Radix UI
- Phosphor React
- Storybook 8
- Vite
- Tsup
- Turborepo
- npm Workspaces

## Componentes

A biblioteca inclui os seguintes componentes:

- Box
- Text
- Heading
- Avatar
- Button
- TextInput
- TextArea
- Checkbox
- MultiSteps

## Tokens de Design

O pacote `@ignite-ui/tokens` centraliza os fundamentos visuais utilizados pela biblioteca.

As categorias de tokens disponíveis incluem:

- Cores
- Tamanhos de fonte
- Pesos de fonte
- Famílias tipográficas
- Alturas de linha
- Raios de borda
- Espaçamentos


## Instalação e Execução

### Pré-requisitos

- Node.js
- npm

### Instalação

Clone o repositório e instale as dependências:

```bash
git clone https://github.com/wwilliamsantana/design-system-ig.git
cd design-system-ig
npm install
```

### Desenvolvimento

Para iniciar as tarefas de desenvolvimento configuradas no monorepo:

```bash
npm run dev
```

Para iniciar a documentação do Storybook separadamente:

```bash
cd packages/docs
npm run dev
```

Por padrão, o Storybook utiliza a porta `6006`. Após iniciar o serviço, acesse [http://localhost:6006](http://localhost:6006) no navegador.

### Build

Para gerar o build dos pacotes configurados no monorepo:

```bash
npm run build
```

Para gerar o build da documentação do Storybook separadamente:

```bash
cd packages/docs
npm run build
```

