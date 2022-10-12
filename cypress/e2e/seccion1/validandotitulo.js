///<reference types= "Cypress" /> 
describe("Seccion 1 Validando el titulo",() =>{
    it("Test validar titulo de la pagina",() =>{
        cy.visit("https://testingqarvn.com.es/datos-personales/")
        cy.title().should("eq","Datos Personales | TestingQaRvn")

        cy.log("ok la funcion bien")
    })
})//cierre de describe