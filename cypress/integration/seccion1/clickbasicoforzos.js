///<reference types= "Cypress" /> 
require('cypress-plugin-tab')
describe("Opciones de click",() =>{
    it("Click basico",() =>{
        cy.visit("https://opensource-demo.orangehrmlive.com/index.php/auth/login")
        cy.title().should('eq',"OrangeHRM")
        cy.wait(1000)

        cy.get("#txtUsername").should("be.visible").type("admin")
        cy.get("#txtPassword").should("be.visible").type("admin123")
        cy.get("#btnLogin").should("be.visible").click() 

        cy.get("#menu_time_viewTimeModule").should("be.visible").click({force: true})
        
    
    })
})
