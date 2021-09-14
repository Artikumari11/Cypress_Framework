import 'cypress-iframe'
//const commands= require('../support/commands.js');

describe('automation practice features testing', function(){

    before('testsuit',function(){
        cy.visit('http://automationpractice.com/')
        //cy.login('abcd1@yahoo.com', 'password')
        cy.fixture('example').then(function(data){
            this.data=data

        })
    })

    it('should login', function() {
        cy.get('a.login').click()
        cy.get('#email').type('abcd1@yahoo.com')
        cy.get('#passwd').type('password')
        cy.get('#SubmitLogin').click()
        cy.url().should('include','controller=my-account')
        cy.get('.myaccount-link-list a').should('have.length', 5)

    })
   it('shopping the product',()=>{
       cy.get("ul li:last-of-type a[title='T-shirts']").click()
       cy.get("div:last-of-type img[title='Faded Short Sleeve T-shirts']").should('be.visible').click()
       //cy.get("a[class*='add_to_cart'] span").click()
       //cy.get("a[class*=button-medium'] span").click()
       
       
       //cy.iframe().then(function($element){
    //var $element= $element.contents().find("a[class*=button-medium'] span'")
        //cy.wrap().click()
       /* cy.wait(5000)
        cy.get("iframe[id*=App]").then(function ($element) 
        { const $body = $element.contents().find('body') 
        const cyElement = cy.wrap($body) 
        cyElement.find("a[class*=button-medium'] span").click({force:true})

    })*/
       
        //it('fetches post using iframes plugin', () => {
            //cy.visit('http://automationpractice.com/index.php?id_product=1&controller=product')
          //cy.frameLoaded("iframe[id*='App']")
          // after the frame has loaded, we can use "cy.iframe()"
          // to retrieve it
         // cy.iframe().find("a[class*=button-medium'] span").eq(0).should('be.visible').click()
         // cy.iframe().find('#result').should('include.text', '"delectus aut autem"')


        //}
      //})


   })
})
   