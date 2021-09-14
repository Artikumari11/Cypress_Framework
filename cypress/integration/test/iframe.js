import 'cypress-iframe'
  describe('Recipe: blogs__iframes', () => {
        it('fetches post using iframes plugin', () => {
          cy.frameLoaded("iframe[id*='App']")
          // after the frame has loaded, we can use "cy.iframe()"
          // to retrieve it
          cy.iframe().find("a[class*=button-medium'] span").eq(0).click()
         // cy.iframe().find('#result').should('include.text', '"delectus aut autem"')


        })
    })