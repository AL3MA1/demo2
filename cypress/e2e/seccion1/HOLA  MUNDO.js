// HOLA  MUNDO created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:;
// https://on.cypress.io/writing-first-test
describe("Bievenidos al curso de cypress seccion 1",() =>{
    it("Mi primer test -> Hola mundo",() =>{
        cy.log("Hola mundo")
        cy.wait(3000)
    })

    it("Segundo test -> campo name", () =>{
        cy.visit("https://demoqa.com/text-box")
        cy.get("#userName").type("Alejandro")//elemento id con tipo gato.
        cy.wait(4000)
        
    })
})//cierre de describe