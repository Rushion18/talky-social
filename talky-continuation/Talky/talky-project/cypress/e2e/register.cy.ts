/// <reference types = "cypress" />
 
describe("Reisters a user", () => {
    it ("passes", () => {
        cy.visit('http://localhost:4200')

        cy.get('[data-cy="username"]').type('Daniel')
        cy.get('[data-cy="email"]').type('daniel@gmail.com')
        cy.get('[data-cy="password"]').type('@Daniel123')
 
       
        cy.get('[data-cy="submit-button"]').click()
 
        cy.visit('http://localhost:4200/login')
       

    })
})