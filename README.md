# Ignite UI — Design System

Biblioteca de componentes React criada para promover consistência visual, reutilização de código e uma experiência de desenvolvimento mais organizada.

O projeto está estruturado como um monorepo e reúne componentes de interface, design tokens e documentação interativa com Storybook.

## ✨ Objetivos

- Construir componentes reutilizáveis para interfaces React.
- Centralizar tokens de design e estilos.
- Documentar e visualizar componentes de forma isolada.
- Organizar pacotes compartilhados em um monorepo.

## 🧰 Tecnologias

- **React 18**
- **TypeScript**
- **Stitches** — estilização de componentes
- **Radix UI** — primitivas de interface
- **Phosphor React** — ícones
- **Storybook 8** — documentação e desenvolvimento visual
- **Vite** — ambiente de desenvolvimento da documentação
- **Tsup** — build dos pacotes
- **Turborepo** — orquestração de tarefas do monorepo
- **npm Workspaces** — gerenciamento dos pacotes

## 📦 Estrutura do projeto

```text
design-system-ig/
├── packages/
│   ├── docs/          # Documentação e Storybook
│   ├── react/         # Componentes React
│   ├── tokens/        # Design tokens
│   ├── eslint-config/ # Configuração compartilhada do ESLint
│   └── ts-config/     # Configurações compartilhadas do TypeScript
├── package.json
├── package-lock.json
└── turbo.json
```

## 🧩 Componentes planejados

A biblioteca está em desenvolvimento. A lista abaixo representa os componentes previstos no projeto:

- [ ] Text
- [ ] Heading
- [ ] Box
- [ ] Button
- [ ] TextInput
- [ ] TextArea
- [ ] Checkbox
- [ ] Avatar
- [ ] MultiStep

## 🚀 Como executar localmente

### Pré-requisitos

- [Node.js](https://nodejs.org/)
- npm (o projeto utiliza npm Workspaces)

### Instalação

Clone o repositório e entre na pasta:

```bash
git clone https://github.com/wwilliamsantana/design-system-ig.git
cd design-system-ig
npm install
```

### Ambiente de desenvolvimento

Para iniciar as tarefas de desenvolvimento configuradas no monorepo:

```bash
npm run dev
```

O Storybook está configurado para iniciar na porta **6006**. Quando o serviço estiver ativo, acesse [http://localhost:6006](http://localhost:6006).

### Build

Para executar as tarefas de build dos pacotes:

```bash
npm run build
```

## 🗺️ Próximos passos

- [ ] Desenvolver e refinar os componentes planejados.
- [ ] Ampliar a documentação e os exemplos no Storybook.
- [ ] Evoluir os design tokens e os padrões de estilo.
- [ ] Melhorar os exemplos de uso e a experiência de integração.

## 👨‍💻 Autor

**William Silva de Santana**

- GitHub: [@wwilliamsantana](https://github.com/wwilliamsantana)
- Portfólio: [portfolio-william-nu.vercel.app](https://portfolio-william-nu.vercel.app)

---

Projeto desenvolvido para praticar e aplicar conceitos de componentização, design systems e organização de bibliotecas React.
