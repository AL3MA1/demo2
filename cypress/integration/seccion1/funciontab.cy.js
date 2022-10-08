///<reference types= "Cypress" /> 
require('cypress-plugin-tab')
describe("Ejemplo funcion tab",() =>{
    it("Type con tab",() =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1000)
        
        cy.get("#wsf-1-field-29").type("Alejandro").tab().
        type("May").tab().
        type("alej@hot.es").tab().
        type("9545454")
        
    })
})
// para ir rellena formulario e ir pasando con la funcion tabulador.