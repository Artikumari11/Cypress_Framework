
describe('Filtering the product', function() {

    before('testsuit', function () {
        cy.visit('/')
        cy.login('xyza@yahoo.com', 'Test@12')
        /*cy.fixture('example').then(function(data){
            this.data=data

     })*/

        it('should login', function () {
            cy.get('#email').type(this.data.email)
            cy.get('#passwd').type(this.data.password)

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
        cy.quantitys("quantity")
        cy.get('#group_1').select('3')
        cy.get('#group_1').should('have.value', '3')
        cy.get('#color_14').click()
        //close();


    })
    function close_window() {
        if (confirm("Close Window?")) {
            close();
        }
    }
})