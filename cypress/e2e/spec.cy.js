/// <reference types="cypress"/>

describe('US-012-Funcionalidade: Cadastro de membros', () => {
  it('Cadastro de campos obrigatórios', () => {
    cy.visit('http://127.0.0.1:8080/')
    cy.get('#signup-firstname').type("Fábio")
    cy.get('#signup-lastname').type("Araujo")
    cy.get('#signup-email').type("fabio1@testes.com")
    cy.get('#signup-phone').type("119232989832")
    cy.get('#signup-password').type("Teste&2020")
    cy.get('#signup-button').click()
    cy.get('#signup-response').should("contain", "Cadastro realizado com sucesso!")
  })
})