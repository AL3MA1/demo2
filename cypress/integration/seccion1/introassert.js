///<reference types= "Cypress" /> 
require('cypress-plugin-tab')
describe("Ejemplo funcion tab",() =>{
    it("Type con tab",() =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1000)

        cy.get("#wsf-1-field-29").should("be.visible").type("Ale").tab() // para validar los campos bevisible
        cy.get("#wsf-1-field-30").should("be.visible").type("May").tab()
        cy.get("#wsf-1-field-31").should("be.visible").should("be.enabled").type("ale@hot") // saber si campo esta habilitado be enabled
        
        
    })
})
// para ir rellena formulario e ir pasando con la funcion tabulador.