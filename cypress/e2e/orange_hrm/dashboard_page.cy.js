/// <reference types="cypress"/>

describe('Dashboard page I', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })

    function login(user, password){
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type(user);
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type(password);
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-tab').should('be.visible');
    }

    it('Check page elements - left table', () => {
    // Log in the account with the correct username and password
        login("Admin", "admin123");

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

    it('Close the menu and check the icons', () => {
    // Log in the account with the correct username and password
        login('Admin', 'admin123');

    // Close the menu and verify it is closed
        cy.get('.oxd-main-menu-search > .oxd-icon-button').click();
        cy.get(':nth-child(3) > .oxd-main-menu-item > .oxd-text').should('not.be.visible');
    
    // Check if the icons are displayed 
        const itensList = ['.oxd-brand-logo > img', '.oxd-main-menu-search', 
                ':nth-child(1) > .oxd-main-menu-item', ':nth-child(2) > .oxd-main-menu-item',
                ':nth-child(3) > .oxd-main-menu-item', ':nth-child(4) > .oxd-main-menu-item',
                ':nth-child(5) > .oxd-main-menu-item', ':nth-child(6) > .oxd-main-menu-item',
                ':nth-child(7) > .oxd-main-menu-item', ':nth-child(8) > .oxd-main-menu-item',
                ':nth-child(9) > .oxd-main-menu-item', ':nth-child(10) > .oxd-main-menu-item',
                ':nth-child(11) > .oxd-main-menu-item', ':nth-child(12) > .oxd-main-menu-item'];
    
        for(let i=0; i<itensList.length; i++){
            cy.get(itensList[i]).should('exist');
        }
    
    // Verify if it is possible to access each icon and the correct section is displayed, the menu won't be collapsed anymore
        const titleList = ['System Users'];

        function click_and_validate(itemList, sectionTitle, sectionTextTitle){
            cy.get(itemList).click()
            cy.get(sectionTitle).should('contain.text', sectionTextTitle)   }
        
        click_and_validate(itensList[2], '.oxd-table-filter-header-title > .oxd-text', 'System Users');
        click_and_validate(itensList[3], '.oxd-table-filter-header-title > .oxd-text', 'Employee Information');
        click_and_validate(itensList[4], '.oxd-table-filter-header-title > .oxd-text', 'Leave List');
        click_and_validate(itensList[5], '.orangehrm-card-container > .oxd-text--h6', 'Select Employee');
        click_and_validate(itensList[6], '.oxd-table-filter-header-title > .oxd-text', 'Candidates');
        click_and_validate(itensList[7], '.orangehrm-edit-employee-content > :nth-child(1) > .oxd-text--h6', 'Personal Details');
        click_and_validate(itensList[8], '.oxd-table-filter-header-title > .oxd-text', 'Employee Reviews');
        click_and_validate(itensList[9], ':nth-child(1) > .oxd-sheet > .orangehrm-dashboard-widget-header > .orangehrm-dashboard-widget-name > .oxd-text', 'Time at Work');
        click_and_validate(itensList[10], '.oxd-table-filter-header-title > .oxd-text', 'Directory');
        click_and_validate(itensList[11], '.oxd-text--h6', 'Administrator Access');
        cy.go('back');
        click_and_validate(itensList[12], '.oxd-table-filter-header-title > .oxd-text', 'Employee Claims')
        click_and_validate(itensList[13], '.orangehrm-buzz-newsfeed > .oxd-text--card-title', 'News BuzzFeed')
    })
})
