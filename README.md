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



      

