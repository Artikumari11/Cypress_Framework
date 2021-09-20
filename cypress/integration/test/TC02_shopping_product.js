
//const commands= require('../support/commands.js');

describe('automation practice for shopping product', function() {

    before('testsuit', function () {
        cy.visit('/')
        cy.login('xyza@yahoo.com', 'Test@12')
        /*cy.fixture('example').then(function(data){
            this.data=data

     })*/

        it('should login', function () {
            /*cy.get('a.login').click()
            cy.get('#email').type(this.data.email)
            cy.get('#passwd').type(this.data.password)
            cy.get('#SubmitLogin').click()*/
            cy.url().should('include', 'controller=my-account')
            cy.get('.myaccount-link-list a').should('have.length', 5)
        })

        it('should navigate to home page', () => {
            cy.get('.icon-chevron-left').last().click().url().should('include', 'index.php')
        })
    })

    it('shopping the product', () => {
        cy.get("ul[class*='menu-content'] > li:last-of-type").click()
        cy.get("div:last-of-type img[title='Faded Short Sleeve T-shirts']").should('be.visible').click()
        cy.get("div.box-info-product button[name='Submit']").click()
        cy.get("a[class*='button-medium'] span").click()
        cy.get("p.cart_navigation.clearfix a[title='Proceed to checkout']").click()
        cy.get("form[method='post'] button[name='processAddress']").click()
        cy.get("div.checker input[type='checkbox']").click()
        cy.get("form[method='post'] button[name='processCarrier']").should('be.enabled').click()
        cy.paymentmethod("bank")
        cy.get("p#cart_navigation button[type='submit']").click()
        cy.get("div#center_column").should('contain.text','Order confirmation')

    })
})