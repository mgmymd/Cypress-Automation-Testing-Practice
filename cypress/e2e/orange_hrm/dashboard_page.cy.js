/// <reference types="cypress"/>

describe('Dashboard page I', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })

    it('Check page elements - left table', () => {
    // Log in the account with the correct username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-tab').should('be.visible');

    // Check menu icons and other elements, click and check if it is possible to access the respective section
        const menuList = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 'My Info', 'Performance',
                         'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

        function check_click_validate(i, menuItem, validateItem, text){
            cy.get(`:nth-child(${i}) > .oxd-main-menu-item > .oxd-text`)
                    .should('have.text', menuItem)
                    .click();
            cy.get(validateItem).should('have.text', text)
        }

        cy.get('.oxd-sidepanel-body').should('exist', 'Left menu should be displayed');
        cy.get('.oxd-brand-banner > img').should('exist');
        cy.get('.oxd-input').should('be.enabled');
        
        check_click_validate(1, menuList[0], '.orangehrm-horizontal-padding > .oxd-text', 'Form')
        // cy.get(':nth-child(1) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Admin').click();
        // cy.get(':nth-child(2) > .oxd-main-menu-item > .oxd-text').should('have.text', 'PIM');
        // cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Leave');
        // cy.get(':nth-child(4) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Time');
        // cy.get(':nth-child(5) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Recruitment');
        // cy.get(':nth-child(6) > .oxd-main-menu-item > .oxd-text').should('have.text', 'My Info');
        // cy.get(':nth-child(7) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Performance');
        // cy.get(':nth-child(8) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Dashboard');
        // cy.get(':nth-child(9) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Directory');
        // cy.get(':nth-child(10) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Maintenance');
        // cy.get(':nth-child(11) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Claim');
        // cy.get(':nth-child(12) > .oxd-main-menu-item > .oxd-text').should('have.text', 'Buzz');
    })
})
