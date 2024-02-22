Cypress.Commands.add('clickButton', () => {

    cy.section('Inicio de teste')
    cy.step(`Validando existencia de elementos`)

    cy.get('.large-2.columns').find('.button').should('have.length', 3);

    cy.step(`Clicando no primeiro botão`)
    cy.get('.large-2.columns')
        .find('.button')
        .eq(0)
        .then($el => {
            cy.wrap($el).click(); // Clicar no primeiro botão
            cy.screenshot('botao1_selecionado',
                {
                    capture: 'viewport',
                    clip: {
                        x: $el[0].getBoundingClientRect().x,
                        y: $el[0].getBoundingClientRect().y,
                        width: $el[0].getBoundingClientRect().width,
                        height: $el[0].getBoundingClientRect().height
                    }
                });
        });

    cy.step(`clicando no segundo botão`)
    cy.get('.large-2.columns')
        .find('.button')
        .not(':disabled')
        .not(':eq(0)')
        .first()
        .then($el => {
            cy.wrap($el).click(); // Clicar no segundo botão
            cy.screenshot('botao2_selecionado',
                {
                    capture: 'viewport',
                    clip: {
                        x: $el[0].getBoundingClientRect().x,
                        y: $el[0].getBoundingClientRect().y,
                        width: $el[0].getBoundingClientRect().width,
                        height: $el[0].getBoundingClientRect().height
                    }
                });
        });

    cy.step(`Clicando no terceiro botão`)
    cy.get('.large-2.columns')
        .find('.button')
        .not(':disabled')
        .not(':eq(0)')
        .not(':eq(2)')
        .last()
        .then($el => {
            cy.wrap($el).click(); // Clicar no terceiro botão
            cy.screenshot('botao3_selecionado',
                {
                    capture: 'viewport',
                    clip: {
                        x: $el[0].getBoundingClientRect().x,
                        y: $el[0].getBoundingClientRect().y,
                        width: $el[0].getBoundingClientRect().width,
                        height: $el[0].getBoundingClientRect().height
                    }
                });
        });
});

Cypress.Commands.add('clickDeleteEdit', () => {
    cy.section('Inicio de teste')
    cy.step(`Clicando nos botões com edit`)

    cy.get('a[href="#edit"]')
        .each(($el, indexEdit) => {
            cy.wrap($el).click()
            cy.screenshot(`edit_click_${indexEdit}`)
            // Captura de tela após clicar em "edit"
        });


    cy.step(`Clicando nos Botões com delete`)
    cy.get('a[href="#delete"]')
        .each(($el, indexDelete) => {
            cy.wrap($el).click()
            cy.screenshot(`delete_click_${indexDelete}`)
            // Captura de tela após clicar em "delete"
        });
});