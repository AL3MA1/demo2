///<reference types= "Cypress" /> 
describe("Ejemplo de type pageup, pagedown",() =>{
    it("Type pageup",() =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(1000)
        cy.get("#wsf-1-field-29").type("{pageup}")
        
    })
})//cierre de describe
it("Type dpagedown",() =>{
    cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
    cy.title().should('eq',"Prueba de campos Checkbox | TestingQaRvn")
    cy.wait(1000)
    cy.get("#wsf-1-field-29").type("{pagedown}")
    
})