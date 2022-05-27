/// <reference types="Cypress" />

describe('Adding to cart',{tags: [ '@Regression', "@Cart", "@Critcal", '@ProductPage']}, ()=>{
    beforeEach(()=>
    {
        cy.visit('');
        cy.request({
            url:'/cart-add',
            method: 'POST',
            form: true,
            body:{
                'item-id': 4091636,
                'format-id': 11656712,
                'q': null,
                'upgrade-mask': 0
            }
        })
    })

    it('Checking if product is on cart',()=>{
        cy.contains('Cart').click();
    })
})