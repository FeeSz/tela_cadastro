# Documentação do Site de Cadastro

Este documento descreve as funcionalidades e estrutura do site de cadastro.

---

## Estrutura HTML

### Cabeçalho `<head>`
- **Charset**: UTF-8
- **Viewport**: Ajustado para largura de dispositivo e escala inicial de 1.0.
- **Título da Página**: Cadastro
- **Link de Estilo**: `css/styles.css` (arquivo externo de CSS)

### Corpo `<body>`
O corpo é dividido em duas seções principais:

1. **Tela de Cadastro (`#cadastroScreen`)**
   - Contém um formulário (`#contactForm`) com os seguintes elementos:
     - **Título (`<h2>`)**: "Cadastro"
     - **Campo Nome**
       - `label` com texto "Nome:"
       - `input` tipo texto (`id="firstName"`)
       - Atributo `required` para validação
     - **Campo Sobrenome**
       - `label` com texto "Sobrenome:"
       - `input` tipo texto (`id="lastName"`)
       - Atributo `required` para validação
     - **Campo Email**
       - `label` com texto "Email:"
       - `input` tipo email (`id="email"`)
       - Atributo `required` para validação
     - **Campo Senha**
       - `label` com texto "Senha:"
       - `input` tipo senha (`id="password"`)
       - Atributo `required` para validação
     - **Botão de Envio**
       - `button` tipo submit com texto "Cadastrar"

2. **Tela de Sucesso (`#successScreen`)**
   - Exibida após a submissão bem-sucedida do formulário. Inicialmente com `display: none`.
   - **Conteúdo**
     - Título (`<h2>`): "Cadastro Realizado com Sucesso!"
     - Mensagem explicativa (`<p>`)
     - Botão de retorno (`#backButton`) com texto "Voltar".

### Script
- Arquivo JavaScript externo: `script.js`.

---

## Funcionalidades

### Formulário de Cadastro
- Captura os dados:
  - Nome
  - Sobrenome
  - Email
  - Senha
- Utiliza validação HTML padrão com o atributo `required`.

### Tela de Sucesso
- Mostra uma mensagem de confirmação e oferece um botão para retornar.
