/// <reference types="cypress" />
describe('automation practice search features testing', ()=>{

    before(()=> {
        cy.visit('/')
       // cy.fixture('example').then(function (data) {
          //  this.data = data
        cy.login('xyza@yahoo.com', 'Test@12')

        })

        it('should login', () => {
            /*cy.get('a.login').click()
            cy.get('#email').type('abcd1@yahoo.com')
            cy.get('#passwd').type('password')
            cy.get('#SubmitLogin').click()*/
            cy.url().should('include', 'controller=my-account')
            cy.get('.myaccount-link-list a').should('have.length', 5)

        })


        it('should navigate to home page', () => {
            cy.get('.icon-chevron-left').last().click().url().should('include', 'index.php')
        })

        it('should search', () => {
            //cy.get('#search_query_top').type('Dress')
            cy.search('Dress')
            //cy.get("button[name='submit_search']").click()
            cy.get('.lighter').should('contain.text', 'Dress')
        })

    })

