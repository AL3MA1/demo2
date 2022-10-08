///<reference types= "Cypress" /> 
require('cypress-plugin-tab')
describe("Opciones de click",() =>{
    it.only("Reto primero",() =>{
        cy.visit("https://demoqa.com/webtables")
        cy.title().should('eq',"ToolsQA")
        

        cy.get("#searchBox").should("be.visible").type("Cierra")
        cy.get("#searchBox").should("be.visible").clear()// limpia
        cy.get("#addNewRecordButton").should("be.visible").click()// agregando valor
        cy.get("#firstName").should("be.visible").type("Alejandro").tab().
        type("may").tab().type("Alejandro@may").tab().type("31").tab().
        type("1000").tab().type("potorro")
        cy.get("#submit").should("be.visible").click()
        cy.get("#searchBox").should("be.visible").type("Alejandro")

        //Editar un campo
        cy.get("#edit-record-1").should("be.visible").click()
        cy.get("#salary").should("be.visible").clear().type("5000")
        cy.get("#submit").should("be.visible").click()

        //eliminar un campo

        cy.get("#delete-record-1").should("be.visible").click()


    })
})


