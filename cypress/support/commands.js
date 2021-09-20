

    Cypress.Commands.add('login', (email, password) => {
        cy.get('.login').click()
        cy.get('#email').type(email)
        cy.get('#passwd').type(password)
        cy.get('#SubmitLogin').click()
    })


    Cypress.Commands.add('search', (product) => {
        cy.get('#search_query_top').type(product)
        cy.get("button[name='submit_search']").click()
    })
    Cypress.Commands.add('paymentmethod', (bank) => {
        let paymentmethod = "bank";
        if (paymentmethod == ("bank")) {
            cy.get("div#HOOK_PAYMENT p.payment_module a.bankwire").click()

        } else {
            cy.get("div#HOOK_PAYMENT p.payment_module a.cheque").click()
        }
    })
    Cypress.Commands.add('quantitys', (bank) => {
        let quantity = "quantity";
        if (quantity == ("quantity")) {
            cy.get('.icon-plus').click()

        } else {
            cy.get('.icon-minus').click()
        }
    })
