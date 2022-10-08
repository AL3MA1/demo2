///<reference types= "Cypress" /> 
require('cypress-plugin-tab')
require('cypress-xpath')
describe("Opciones de click",() =>{
    it.only("Reto Segundo",() =>{
        cy.visit("https://computer-database.gatling.io/computers")
        cy.title().should('eq',"Computers database")
        

      /*  
        cy.get("#searchbox").should("be.visible").click().type("ACE")
        cy.get("#searchsubmit").should("be.visible").click()
        cy.get("#main > table > tbody > tr:nth-child(1) > td:nth-child(1) > a").click()
        cy.get("#name").should("be.visible").click().clear().type("Reto2").tab().type("2012-05-01").tab().type("2022-05-01")
        cy.xpath("//select[contains(@id,'company')]").select("RCA")
        cy.xpath("//input[contains(@value,'Save this computer')]").click()
     */   
   // agregar
        cy.get("#add").click()
        cy.get("#name").should("be.visible").click().clear().type("Reto2").tab().type("2012-05-01").tab().type("2022-05-01")
        cy.get("#company").should("be.visible").select("Nokia").should("have.value","16").wait(1500)
        cy.get(".primary").should("be.visible").click()
         
        cy.get("#searchbox").should("be.visible").click().type("Reto2")
        cy.get("#searchsubmit").should("be.visible").click()
        
     
    })

    
})
