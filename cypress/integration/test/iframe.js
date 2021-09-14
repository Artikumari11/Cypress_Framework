import 'cypress-iframe'
  describe('Recipe: blogs__iframes', () => {
        it('fetches post using iframes plugin', () => {
          //cy.get('http://automationpractice.com/index.php?id_product=1&controller=product')
          //cy.frameLoaded("iframe[id*='App']").its("0.contecnt.d")
          //cy.get("iframe[id*='App']").its('0.contentDocument.body').find("a[class*=button-medium'] span'").click()
          // after the frame has loaded, we can use "cy.iframe()"
          // to retrieve it
          //cy.iframe().find("a[class*=button-medium'] span").eq(0).click()
         // cy.iframe().find('#result').should('include.text', '"delectus aut autem"')
cy.iframe(0).its('0.contentDocument.body').find("a[class*=button-medium'] span'").click()

        })
    })