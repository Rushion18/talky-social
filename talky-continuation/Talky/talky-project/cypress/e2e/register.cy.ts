/// <reference types = "cypress" />
 
describe("Reisters a user", () => {
    it ("passes", () => {
        cy.visit('http://localhost:4200')

        cy.get('[data-cy="username"]').type('Sanny')
        cy.get('[data-cy="email"]').type('emmanuel@gmail.com')
        cy.get('[data-cy="password"]').type('@Emmanuel123')
 
       
        cy.get('[data-cy="submit-button"]').click()
 
        cy.visit('http://localhost:4200/login')
       

    })
})