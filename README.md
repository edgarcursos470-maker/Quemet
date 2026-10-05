# Quemet — Café Cultura

O **Quemet — Café Cultura** é um projeto acadêmico desenvolvido durante o curso de **Full Stack do SENAI DF**. A aplicação apresenta uma experiência digital que conecta café, leitura e cultura em uma interface acolhedora, responsiva e visualmente inspirada no universo literário.

O projeto foi criado para praticar conceitos fundamentais de desenvolvimento front-end, incluindo estruturação semântica, estilização, responsividade, interatividade e organização de um projeto web.

## Sobre o projeto

O Quemet representa uma cafeteria voltada para leitores, estudantes e pessoas que apreciam momentos de pausa acompanhados de café e cultura. A página apresenta produtos, destaques da marca e uma tela de login integrada à identidade visual do projeto.

A versão atual é um projeto exclusivamente front-end. Portanto, o login possui validação no navegador, mas ainda não conta com integração com banco de dados ou autenticação real.

## Funcionalidades

### Página inicial

- Cabeçalho com logotipo e nome da marca;
- Menu de navegação responsivo;
- Banner principal;
- Apresentação dos produtos disponíveis;
- Cards com imagens, descrições e preços;
- Galeria de produtos com navegação por setas;
- Seções de destaques e novidades;
- Rodapé com redes sociais e informações institucionais.

### Tela de login

- Campos para e-mail e senha;
- Validação dos campos obrigatórios;
- Mensagens de retorno para o usuário;
- Botão de acesso à conta;
- Opção visual para cadastro;
- Layout alinhado à identidade visual do Quemet.

## Tecnologias utilizadas

- **HTML5** — estrutura e marcação semântica das páginas;
- **CSS3** — estilização, layout, cores e responsividade;
- **JavaScript** — validação do formulário e interações da interface;
- **Bootstrap 5** — componentes e sistema de grid responsivo;
- **Bootstrap Icons** — ícones utilizados na interface;
- **Google Fonts** — tipografia do projeto;
- **jQuery** — suporte a funcionalidades de interação;
- **Git e GitHub** — versionamento e hospedagem do código.

## Estrutura do projeto

```text
Quemet/
├── Imagens/
│   ├── quemetLogo.webp
│   ├── banner.webp
│   ├── cafe.webp
│   ├── chaGelado.webp
│   ├── espresso.webp
│   ├── comboEstudante.webp
│   └── comboLeitor.webp
├── HyperText/
│   ├── index.html
│   └── login.html
├── scripts/
│   ├── jquery-script.js
│   └── scripts.js
├── style/
│   └── style.css
├── .gitignore
└── README.md
```

## Como executar localmente

### Pré-requisitos

Não é necessário instalar dependências ou utilizar um servidor de aplicação. Basta ter um navegador moderno instalado.

### Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/edgarcursos470-maker/Quemet.git
   ```

2. Acesse a pasta do projeto:

   ```bash
   cd Quemet
   ```

3. Abra o arquivo `HyperText/index.html` em um navegador.

Como alternativa, utilize a extensão **Live Server** no Visual Studio Code e abra o arquivo `HyperText/index.html` para executar o projeto com atualização automática durante o desenvolvimento.

## Responsividade e acessibilidade

A aplicação foi planejada para funcionar em diferentes tamanhos de tela, incluindo:

- Computadores e notebooks;
- Tablets;
- Smartphones.

Em dispositivos menores, o menu, os cards e os demais conteúdos são reorganizados para melhorar a leitura, a navegação e a usabilidade. O projeto também aplica boas práticas de organização de HTML, CSS e JavaScript.

## Identidade visual

A identidade visual do Quemet combina elementos associados ao café e à literatura:

- **Marrom escuro:** representa o café, o conforto e a sofisticação;
- **Dourado:** destaca a marca e os elementos principais;
- **Tons claros:** proporcionam leveza e equilíbrio ao layout;
- **Azul-esverdeado:** funciona como cor de destaque;
- **Tipografia combinada:** une fontes modernas e clássicas para reforçar a proposta cultural.

## Limitações atuais

- O login ainda não possui autenticação real;
- Não há integração com banco de dados;
- Os produtos são exibidos de forma estática;
- O projeto não possui backend ou API.

## Possíveis melhorias futuras

- Implementar cadastro e autenticação de usuários;
- Integrar os produtos a um banco de dados;
- Criar carrinho de compras e finalização de pedidos;
- Adicionar uma área administrativa;
- Incluir testes automatizados;
- Publicar a aplicação em uma plataforma de hospedagem.

## Autor

**Edgar Parreira França**

Projeto desenvolvido como atividade acadêmica do curso de **Full Stack — SENAI DF**.

## Licença

Este projeto foi desenvolvido para fins educacionais e acadêmicos.
