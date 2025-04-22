# 📂 Projeto de Automação – Cypress

Este projeto contém automações E2E desenvolvidas com **Cypress**, cobrindo as principais funcionalidades da aplicação [automationpratice.com.br](https://automationpratice.com.br), incluindo **Login**, **Cadastro de Usuário** e **Navegação por Menus**.

---

## ✅ Funcionalidades Automatizadas

### 🔐 Login

Testes focados na validação de autenticação de usuários.

#### 1. Login com sucesso
- Acessa a página de login
- Preenche e-mail e senha válidos
- Verifica a mensagem de sucesso

```javascript
cy.visit('https://automationpratice.com.br/login')
cy.get('#user').type('edu@qazando.com')
cy.get('#password').type("125986")
cy.get('#btnLogin').click()
cy.get('#swal2-title').should('have.text', 'Login realizado')

````
#### 2. E-mail inválido
 - Insere e-mail mal formatado
 - Verifica a mensagem de erro exibida

 ```javascript
 cy.visit('https://automationpratice.com.br/login')
 cy.get('#user').type('tatiane')
 cy.get('#password').type("125986")
 cy.get('#btnLogin').click()
 cy.get('.invalid_input').should('have.text', 'E-mail inválido.')

  ````
#### 3. Senha inválida
- Insere senha incorreta
- Verifica a mensagem de erro exibida

```javascript
cy.visit('https://automationpratice.com.br/login')
cy.get('#user').type('tatiane.dias@gmail.com')
cy.get('#password').type("123")
cy.get('#btnLogin').click()
cy.get('.invalid_input').should('have.text', 'Senha inválida.')

  ````

### 📝 Cadastro

Fluxo completo de criação de conta para novo usuário.

- Acessa a página de login
- Clica em "Criar Conta"
- Preenche nome, e-mail e senha
- Valida mensagem de sucesso no cadastro

```javascript

cy.visit('https://automationpratice.com.br/login')
cy.get('#createAccount').click()
cy.get('#user').type('leticia')
cy.get('#email').type('leticia@gmail.com')
cy.get('#password').type('1234567')
cy.get('#btnRegister').click()
cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')

 ````

### 🛒 Navegação por Menus

#### 1. Acesso à página de favoritos

- Abre o menu lateral
- Acessa o menu "Shop"
- Clica em "Favorites"
- Verifica se o botão Remove está visível

```javascript

cy.visit('https://automationpratice.com.br')
cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
cy.get('#menuShopText').click()
cy.get('#favoritesPage').click()
cy.get('.product_remove').should('have.text', 'Remove')

 ````

#### 2. Acesso ao Checkout 2

- Abre o menu lateral
- Navega até "Shop"
- Clica em "Checkout 2"
- Verifica se a seção Billing Details está visível

```javascript

cy.visit('https://automationpratice.com.br')
cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
cy.get('#menuShopText').click()
cy.get('#checkout2Page').click()
cy.get('.checkout_form_area > h3').should('have.text', 'Billing Details')

```
#### 🧰 Pré-requisitos e Tecnologias

Antes de começar, certifique-se de ter instalado em sua máquina:

- Node.js
- Visual Studio Code
- Git Bash
- Git instalado
- Cypress (será instalado no passo a passo)

``
#### 📌 Passo a passo para configurar o projeto Cypress

#### 1. Criar um novo projeto Node.js

```javascript

npm init -y

````
#### 2. Instalar o Cypress

```javascript

npm install cypress

````
#### 3. Iniciar o Cypress pela primeira vez (cria a estrutura inicial)

```javascript

npx cypress open

````
#### 4. Criar arquivos de teste

- Crie arquivos .cy.js dentro da pasta cypress/e2e, por exemplo:

```javascript

login.cy.js
cadastro.cy.js
menus.cy.js

````
#### 5. Escrever os cenários de teste

- Utilize a sintaxe Cypress com describe e it para criar seus testes automatizados.


