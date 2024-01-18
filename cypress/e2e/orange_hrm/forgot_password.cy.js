describe('Forgot your password option', () => {
    beforeEach(() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
      })
      
        it('Click on Forgot your password after tried to login', () => {
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
    
    // Click on 'Forgot your password' and verify the pop up
        cy.get('.orangehrm-login-forgot > .oxd-text').should('exist').click();

        cy.get('.orangehrm-card-container').should('exist')
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password');
        cy.get('.orangehrm-card-note > .oxd-text')
            .should('have.text', 'Please enter your username to identify your account to reset your password');
        cy.get('.oxd-icon').should('exist');
        cy.get('.oxd-label').should('have.text', 'Username');
        cy.get('.oxd-input').should('exist');
        cy.get('.oxd-button--ghost').should('contain', 'Cancel').debug();
        cy.get('.oxd-button--secondary').should('contain', 'Reset Password');

    // Enter the Username and click on Reset Password
        cy.get('.oxd-input').type('Admin').should('have.value', 'Admin')
        cy.get('.oxd-button--secondary').should('contain', 'Reset Password').click()

    // Check the container and its texts
        cy.get('.orangehrm-forgot-password-container').should('exist');
        cy.get('.orangehrm-card-container').should('exist');
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password link sent successfully');
        cy.get(':nth-child(3) > .oxd-text')
            .should('have.text', 'A reset password link has been sent to you via email.');
        cy.get(':nth-child(4) > .oxd-text')
            .should('have.text', 'You can follow that link and select a new password.');
        cy.get('.orangehrm-card-note--background').should('exist');
        cy.get('.orangehrm-sub-title').should('have.text', 'Note\: ').debug();
        cy.get('.orangehrm-card-note--background > :nth-child(2)')
            .should('have.text', 'If the email does not arrive, please contact your OrangeHRM Administrator.');
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('have.text', 'OrangeHRM OS 5.5');
        cy.get('.orangehrm-copyright-wrapper > :nth-child(2)')
            .should('have.text', '© 2005 - 2024 OrangeHRM, Inc. All rights reserved.');
    })

    it('Click on Forgot your Password without trying to login', () => {
    // Click on 'Forgot your password' and check the pop up
        cy.get('.orangehrm-login-forgot > .oxd-text').should('exist').click();

        cy.get('.orangehrm-card-container').should('exist')
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password');
        cy.get('.orangehrm-card-note > .oxd-text')
            .should('have.text', 'Please enter your username to identify your account to reset your password');
        cy.get('.oxd-icon').should('exist');
        cy.get('.oxd-label').should('have.text', 'Username');
        cy.get('.oxd-input').should('exist');
        cy.get('.oxd-button--ghost').should('contain', 'Cancel').debug();
        cy.get('.oxd-button--secondary').should('contain', 'Reset Password');
    
    // Enter the Username and click on Reset Password
        cy.get('.oxd-input').type('Admin').should('have.value', 'Admin')
        cy.get('.oxd-button--secondary').should('contain', 'Reset Password').click()

    // Verify the container and its texts
        cy.get('.orangehrm-forgot-password-container').should('exist');
        cy.get('.orangehrm-card-container').should('exist');
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password link sent successfully');
        cy.get(':nth-child(3) > .oxd-text')
            .should('have.text', 'A reset password link has been sent to you via email.');
        cy.get(':nth-child(4) > .oxd-text')
            .should('have.text', 'You can follow that link and select a new password.');
        cy.get('.orangehrm-card-note--background').should('exist');
        cy.get('.orangehrm-sub-title').should('have.text', 'Note\: ').debug();
        cy.get('.orangehrm-card-note--background > :nth-child(2)')
            .should('have.text', 'If the email does not arrive, please contact your OrangeHRM Administrator.');
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('have.text', 'OrangeHRM OS 5.5');
        cy.get('.orangehrm-copyright-wrapper > :nth-child(2)')
            .should('have.text', '© 2005 - 2024 OrangeHRM, Inc. All rights reserved.');
    })

    it('Enter an invalid username', () => {
    // Click on 'Forgot your password' and verify the pop up
        cy.get('.orangehrm-login-forgot > .oxd-text').should('exist').click();

        cy.get('.orangehrm-card-container').should('exist')
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password');
        cy.get('.orangehrm-card-note > .oxd-text')
            .should('have.text', 'Please enter your username to identify your account to reset your password');
        cy.get('.oxd-icon').should('exist');
        cy.get('.oxd-label').should('have.text', 'Username');
        cy.get('.oxd-input').should('exist');
        cy.get('.oxd-button--ghost').should('contain', 'Cancel').debug();
        cy.get('.oxd-button--secondary').should('contain', 'Reset Password');
    
    // Enter the Username and click on Reset Password
        cy.get('.oxd-input').type('WrongUser').should('have.value', 'WrongUser')
        cy.get('.oxd-button--secondary').should('contain', 'Reset Password').click()
    
    // Check the container and its texts, this step isn't different for an invalid username
        cy.get('.orangehrm-forgot-password-container').should('exist');
        cy.get('.orangehrm-card-container').should('exist');
        cy.get('.oxd-text--h6').should('have.text', 'Reset Password link sent successfully');
        cy.get(':nth-child(3) > .oxd-text')
            .should('have.text', 'A reset password link has been sent to you via email.');
        cy.get(':nth-child(4) > .oxd-text')
            .should('have.text', 'You can follow that link and select a new password.');
        cy.get('.orangehrm-card-note--background').should('exist');
        cy.get('.orangehrm-sub-title').should('have.text', 'Note\: ').debug();
        cy.get('.orangehrm-card-note--background > :nth-child(2)')
            .should('have.text', 'If the email does not arrive, please contact your OrangeHRM Administrator.');
        cy.get('.orangehrm-copyright-wrapper > :nth-child(1)').should('have.text', 'OrangeHRM OS 5.5');
        cy.get('.orangehrm-copyright-wrapper > :nth-child(2)')
            .should('have.text', '© 2005 - 2024 OrangeHRM, Inc. All rights reserved.');
    })
})
