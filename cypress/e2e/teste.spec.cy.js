
describe('Testes interação GUI', () => {
    beforeEach(() => {        
        cy.intercept('GET', '**').as('preventReload');
        cy.visit('/challenging_dom');
    });
    it('Deverá clicar um click nos três botoes exibidos na tela', () => {
        cy.cliqueNobotao();
        cy.clickDeleteEdit()
    });
    it('Deverá clicar  em todos os botões edit e delete da Grid', () => {
        cy.clickDeleteEdit()
    });
});