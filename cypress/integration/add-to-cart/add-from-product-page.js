/// <reference types="Cypress" />

describe('Adding to cart', ()=>{
    beforeEach(()=>
    {
        //cy.clearCookies();
        //cy.clearLocalStorage();
        cy.visit('displate/2781837',{
            onBeforeLoad: (win) => {
            win.sessionStorage.clear();
          }})
    })

    it('Add 1 plain product to cart',()=>{
        cy.get('.add-to-cart-button-container').click();
        cy.intercept('/lapi/users/cart/items').as('userCart');
        cy.get('#d_app > nav > div.main-menu__outer > div.main-menu__inner > div.aside-menu > div:nth-child(4) > a').should('contain','1');
    
        cy.wait('@userCart').its('response.body').then((body)=>{
            expect(body[0].itemCollectionId).to.eq(2781837);
        })
    })
})