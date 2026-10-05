# Quemet — Café Cultura

O **Quemet — Café Cultura** é um projeto acadêmico desenvolvido durante o curso de **Programador Full Stack do SENAI DF**. O projeto também representa o desenvolvimento inicial da proposta da Quemet, uma cafeteria com foco em café, leitura, cultura e convivência, criada em conjunto com colegas do Instituto Federal de Brasília.

A proposta da aplicação é apresentar uma experiência digital para leitores, estudantes e pessoas que apreciam momentos de pausa acompanhados de café e cultura. O site utiliza uma identidade visual inspirada em cafeterias e literatura, com produtos, conteúdos institucionais, divulgação do Clube de Leitura e a iniciativa Bolsa Leitores.

> **Status atual:** o projeto continua em desenvolvimento. Para a avaliação deste trabalho, o foco principal está nas páginas `index.html`, `login.html` e nos scripts JavaScript já implementados. A tela `dashboard.html` está sendo desenvolvida gradualmente e ainda não representa um painel administrativo completo.

## Foco da avaliação

A avaliação atual considera principalmente:

- a estrutura e a organização do `index.html`;
- a construção visual e funcional do `login.html`;
- a utilização de HTML semântico;
- a estilização com CSS e Bootstrap;
- a responsividade da interface;
- as interações implementadas nos arquivos JavaScript;
- a organização dos arquivos e dos recursos visuais do projeto.

O desenvolvimento de novas áreas continuará acontecendo de forma independente e progressiva.

## Funcionalidades implementadas

### Página principal — `index.html`

- Cabeçalho com logotipo, nome da marca e navegação;
- Menu responsivo utilizando Bootstrap;
- Banner principal do projeto;
- Apresentação de produtos da cafeteria;
- Cards com imagens, descrições e preços;
- Galeria de produtos com navegação por setas em telas maiores;
- Seção de destaque para a Bolsa Leitores;
- Seção de novidades da Quemet;
- Botão para voltar ao topo;
- Rodapé com ícones de redes sociais e informações institucionais.

### Tela de login — `login.html`

- Formulário de acesso com usuário e senha;
- Validação básica dos campos obrigatórios pelo HTML;
- Login demonstrativo implementado em JavaScript;
- Redirecionamento para `dashboard.html` quando os dados definidos no script são informados;
- Formulário visual de cadastro;
- Exibição e ocultação do cadastro utilizando jQuery;
- Layout compartilhado com a identidade visual da página principal.

### Scripts já implementados

O arquivo `scripts/scripts.js` contém:

- navegação da galeria de produtos;
- adaptação do carrossel para telas desktop e dispositivos menores;
- botão “Voltar ao topo”;
- validação demonstrativa do login;
- redirecionamento para a tela de dashboard;
- retorno visual de cadastro concluído.

O arquivo `scripts/jquery-script.js` controla a animação de abertura e fechamento do formulário de cadastro na tela de login.

## Dashboard em desenvolvimento

A tela `dashboard.html` está sendo desenvolvida neste momento. A ideia inicial é manter uma estrutura visual semelhante à tela de login, reutilizando a navegação, o cabeçalho, o rodapé e a identidade visual já criada para o projeto.

Aos poucos, serão agregadas funções típicas de um dashboard, como:

- organização de informações da conta;
- visualização e gerenciamento de produtos;
- acompanhamento de conteúdos da Quemet;
- possíveis áreas administrativas;
- integração futura com dados reais;
- recursos relacionados ao Clube de Leitura e à Bolsa Leitores.

Essas funcionalidades ainda estão em desenvolvimento e não fazem parte da versão final do projeto.

## Tecnologias utilizadas

- **HTML5:** estrutura e marcação semântica das páginas;
- **CSS3:** identidade visual, layout, componentes e responsividade;
- **JavaScript:** interações da interface, galeria, login demonstrativo e botão de topo;
- **Bootstrap 5:** sistema de grid, componentes responsivos e navegação;
- **Bootstrap Icons:** ícones utilizados na interface;
- **jQuery:** interação e animação do formulário de cadastro;
- **Google Fonts:** tipografia visual do projeto;
- **Git e GitHub:** versionamento e hospedagem do código.

## Estrutura do projeto

```text
Quemet/
├── HyperText/
│   ├── index.html       página principal e foco principal da avaliação
│   ├── login.html       tela de login e cadastro demonstrativo
│   ├── dashboard.html   tela em desenvolvimento
│   └── sobrenos.html    página institucional sobre a Quemet
├── Imagens/
│   ├── quemetLogo.webp
│   ├── banner.webp
│   ├── cafe.webp
│   ├── chaGelado.webp
│   ├── espresso.webp
│   ├── comboEstudante.webp
│   └── comboLeitor.webp
├── scripts/
│   ├── jquery-script.js  interação do formulário de cadastro
│   └── scripts.js        funcionalidades gerais da interface
├── style/
│   └── style.css         estilos, cores, layout e responsividade
├── .gitignore
└── README.md
```

## Identidade visual

A identidade visual da Quemet combina elementos associados ao café, ao conforto e à literatura:

- **Marrom escuro:** remete ao café, acolhimento e sofisticação;
- **Dourado:** utilizado para destacar a marca e elementos importantes;
- **Tons claros:** ajudam a criar equilíbrio e leveza;
- **Azul-esverdeado:** usado como cor de destaque em seções culturais;
- **Playfair Display e Inter:** combinação de uma fonte com referência editorial e outra mais moderna para leitura da interface.

## Como executar localmente

Não é necessário instalar dependências ou configurar um servidor de aplicação. Basta ter um navegador moderno.

```bash
git clone https://github.com/edgarcursos470-maker/Quemet.git
cd Quemet
```

Depois, abra o arquivo abaixo no navegador:

```text
HyperText/index.html
```

Durante o desenvolvimento, também é possível utilizar a extensão **Live Server** do Visual Studio Code.

## Limitações atuais

O projeto ainda é uma aplicação front-end estática. Portanto:

- o login é apenas demonstrativo;
- as credenciais ficam definidas no JavaScript;
- não há autenticação real;
- não há banco de dados;
- não há backend ou API;
- os produtos são cadastrados diretamente no HTML;
- o dashboard ainda está sendo construído;
- os links de redes sociais ainda são demonstrativos.

## Próximos passos

O desenvolvimento continuará de forma gradual, com possibilidades de:

- concluir a estrutura visual do dashboard;
- adicionar funcionalidades típicas de um painel administrativo;
- implementar autenticação real;
- integrar produtos e usuários a um banco de dados;
- criar carrinho e fluxo de pedidos;
- desenvolver recursos do Clube de Leitura e da Bolsa Leitores;
- publicar a aplicação em uma plataforma de hospedagem.

## Autor

**Edgar Parreira França**

Projeto desenvolvido para fins acadêmicos no curso de **Programador Full Stack — SENAI DF**.
