describe('Logins', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })
    
      it('Login successful', () => {
    // Verify if the Username field exists and enter the correct username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type('Admin');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('have.value','Admin');

    // Verify if the Password field exists and enter the correct password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
                .should('exist').type('admin123');
        
    // Click on Login button and verify if the Login was successful
        cy.get('.oxd-button').click();
        cy.get('.oxd-userdropdown-tab').should('be.visible');
      })

    it('Wrong Username and correct password', () => {
    // Verify if the Username field exists and enter the wrong username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('exist').type('wrongUser');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('have.value','wrongUser');
    // Verify if the Password field exists and enter the correct password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('exist').type('admin123');

    // Click on Login button and verify if the 'Invalid credentials' message is displayed
        cy.get('.oxd-button').click();
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
        cy.get('.oxd-userdropdown-tab').should('not.exist');
    })

    it('Wrong password and correct username', ()=>{
    // Verify if the Username field exists and enter the correct username
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('exist').type('Admin');
        cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('have.value','Admin');
    
    // Verify if the password field exists and enter the wrong password
        cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input')
            .should('exist').type('aaaaaaaaaaaaaaaaaaa123');

    // Click on Login button and verify if the 'Invalid credentials' message is displayed
        cy.get('.oxd-button').click();
        cy.get('.oxd-alert-content > .oxd-text').should('have.text', 'Invalid credentials');
        cy.get('.oxd-userdropdown-tab').should('not.exist');
    })

    it('No password or username', () => {
    // Click on Login button and verify if Required messages are displayed
        cy.get('.oxd-button').click();
        cy.get(':nth-child(2) > .oxd-input-group > .oxd-text').should('have.text', 'Required');
        cy.get(':nth-child(3) > .oxd-input-group > .oxd-text').should('have.text', 'Required');
        cy.get('.oxd-userdropdown-tab').should('not.exist');
    })
})
