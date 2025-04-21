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

#### 2. E-mail inválido
Insere e-mail mal formatado

Verifica a mensagem de erro exibida

javascript
Copiar
Editar
cy.visit('https://automationpratice.com.br/login')
cy.get('#user').type('tatiane')
cy.get('#password').type("125986")
cy.get('#btnLogin').click()
cy.get('.invalid_input').should('have.text', 'E-mail inválido.')
3. Senha inválida
Insere senha incorreta

Verifica a mensagem de erro exibida

javascript
Copiar
Editar
cy.visit('https://automationpratice.com.br/login')
cy.get('#user').type('tatiane.dias@gmail.com')
cy.get('#password').type("123")
cy.get('#btnLogin').click()
cy.get('.invalid_input').should('have.text', 'Senha inválida.')
📝 Cadastro
Fluxo completo de criação de conta para novo usuário.

Acessa a página de login

Clica em "Criar Conta"

Preenche nome, e-mail e senha

Valida mensagem de sucesso no cadastro

javascript
Copiar
Editar
cy.visit('https://automationpratice.com.br/login')
cy.get('#createAccount').click()
cy.get('#user').type('leticia')
cy.get('#email').type('leticia@gmail.com')
cy.get('#password').type('1234567')
cy.get('#btnRegister').click()
cy.get('#swal2-title').should('have.text', 'Cadastro realizado!')
🛒 Navegação por Menus
1. Acesso à página de favoritos
Abre o menu lateral

Acessa o menu "Shop"

Clica em "Favorites"

Verifica se o botão Remove está visível

javascript
Copiar
Editar
cy.visit('https://automationpratice.com.br')
cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
cy.get('#menuShopText').click()
cy.get('#favoritesPage').click()
cy.get('.product_remove').should('have.text', 'Remove')
2. Acesso ao Checkout 2
Abre o menu lateral

Navega até "Shop"

Clica em "Checkout 2"

Verifica se a seção Billing Details está visível

javascript
Copiar
Editar
cy.visit('https://automationpratice.com.br')
cy.get(':nth-child(4) > .offcanvas-toggle > .fa').click()
cy.get('#menuShopText').click()
cy.get('#checkout2Page').click()
cy.get('.checkout_form_area > h3').should('have.text', 'Billing Details')
🧪 Tecnologias utilizadas
Cypress — Framework de testes E2E

JavaScript

🚀 Como executar os testes
Clone o repositório:

bash
Copiar
Editar
git clone https://github.com/seu-usuario/seu-repositorio.git
Instale as dependências:

bash
Copiar
Editar
npm install
Rode os testes:

bash
Copiar
Editar
npx cypress open
Ou, para execução em modo headless:

bash
Copiar
Editar
npx cypress run
