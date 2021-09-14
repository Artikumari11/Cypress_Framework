Cypress.Commands.add('login', (email, password) =>{
    cy.get('.login').click()
    cy.get('#email').type(email)
    cy.get('#passwd').type(password)
    cy.get('#SubmitLogin').click()
})


Cypress.Commands.add('search', (product)=>{
    cy.get('#search_query_top').type(product)
    cy.get("button[name='submit_search']").click()
})
Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get('iframe[id*=App]')
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})