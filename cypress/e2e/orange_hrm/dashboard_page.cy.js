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
            cy.get(validateItem).should('contain', text)
        }

        cy.get('.oxd-sidepanel-body').should('exist', 'Left menu should be displayed');
        cy.get('.oxd-brand-banner > img').should('exist');
        cy.get('.oxd-input').should('be.enabled');
        
        check_click_validate(1, menuList[0], '.oxd-table-filter-header-title > .oxd-text', 'System Users');
        check_click_validate(2, menuList[1], '.oxd-table-filter-header-title > .oxd-text', 'Employee Information');
        check_click_validate(3, menuList[2], '.oxd-table-filter-header-title > .oxd-text', 'Leave List');
        check_click_validate(4, menuList[3], '.orangehrm-card-container > .oxd-text--h6', 'Select Employee')
        check_click_validate(5, menuList[4], '.oxd-table-filter-header-title > .oxd-text', 'Candidates');
        check_click_validate(6, menuList[5], '.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'Personal Details')
        check_click_validate(7, menuList[6], '.oxd-table-filter-header-title > .oxd-text', 'Employee Reviews');
        check_click_validate(8, menuList[7], '.oxd-topbar-header-breadcrumb > .oxd-text', 'Dashboard')
        check_click_validate(9, menuList[8], '.oxd-table-filter-header-title > .oxd-text', 'Directory');
        check_click_validate(10, menuList[9], '.oxd-text--h6', 'Administrator Access')
        cy.go('back')
        check_click_validate(11, menuList[10], '.oxd-table-filter-header-title > .oxd-text', 'Employee Claims');
        check_click_validate(12, menuList[11], '.orangehrm-buzz-newsfeed > .oxd-text--card-title', 'Buzz Newsfeed')
    })

    it.only('Close the menu and check the icons', () => {
    // Log in the account with the correct username and password
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type('Admin');
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type('admin123');
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-tab').should('be.visible');

    // Close the menu and verify it is closed
    cy.get('.oxd-main-menu-search > .oxd-icon-button').click()
    cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('not.be.visible')

    })
})
