/// <reference types = "cypress" />
 
describe("Logs in a user", () => {
    it ("passes", () => {
        cy.visit('http://localhost:4200/login')

        cy.get('[data-cy="email"]').type('emmanuel@gmail.com')
        cy.get('[data-cy="password"]').type('@Emmanuel123')
 
       
        cy.get('[data-cy="submit-button"]').click()
 
        cy.visit('http://localhost:4200/home')
       


    })
})