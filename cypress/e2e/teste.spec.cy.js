
describe('Testes interação GUI - Validação de clique em botões', () => {
    beforeEach(() => {        
        cy.intercept('GET', '**').as('preventReload');
        cy.visit('/challenging_dom');
    });
    it('Deverá clicar um click nos três botoes exibidos na tela', () => {
        cy.clickButton();
    });   
});

describe('Testes interação GUI - Validação de clique em todos os botoes edit e delete', () => {
    beforeEach(() => {        
        cy.intercept('GET', '**').as('preventReload');
        cy.visit('/challenging_dom');
    });  
    it('Deverá clicar  em todos os botões edit e delete da Grid', () => {
        cy.clickDeleteEdit()
    });
});