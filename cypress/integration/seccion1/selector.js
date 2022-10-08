//validar comandos d cypress
///<reference types= "Cypress" /> 
require('cypress-xpath')
describe("Tipo de selector",() =>{
    it.only("Selector Id",() =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title("Datos Personales | TestingQaRvn")
        cy.wait(1000)
        cy.get("#wsf-1-field-21").should("be.visible").type("Alejandro")
        cy.get("#wsf-1-field-23").should("be.visible").type("ale@hot.es")
    })

    it("Selector atributo",() =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title("Datos Personales | TestingQaRvn")
        cy.wait(1000)
         cy.get("[placeholder='Nombre:']").should("be.visible").type("Antonio")
            
    })

    it("Selector xpath",() =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title("Datos Personales | TestingQaRvn")
        cy.wait(1000)
        cy.xpath("//*[@id='wsf-1-field-21']").should("be.visible").type("Alegandro")
        cy.xpath("//input[contains(@type,'email')]").should("be.visible").type("ale@hot.es")
        cy.xpath("//input[@id='wsf-1-field-24']").should("be.visible").type("959495656")
    })
    it("Selector por contains",() =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title("Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(5000)
        cy.get(".wsf-label").contains("PHP").click() // siempre hay q poner un.
        cy.wait(5000)
       })

       it.only("Selector por copyselector",() =>{
        cy.visit("https://testingqarvn.com.es/prueba-de-campos-checkbox/")
        cy.title("Prueba de campos Checkbox | TestingQaRvn")
        cy.wait(5000)
        cy.get("#wsf-1-field-31").should("be.enabled").type("ale@hotes.es") // siempre hay q poner un.
        cy.wait(5000)
       })



       
})//cierre de describe