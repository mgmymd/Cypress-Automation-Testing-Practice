describe('Login Page Elements', () => {
    beforeEach(() => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    })

    it('Checking Login Page Elements', () => {
      let message = "Element ${listElements[i]} should be displayed";
      const listElements = ['.orangehrm-login-branding > img', '.oxd-text--h5', '.oxd-sheet > :nth-child(1)',
                    '.oxd-sheet > :nth-child(2)', '.orangehrm-login-logo > img',
                    ':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-icon',
                    ':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input',
                    ':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-icon',
                    ':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input', '.oxd-button',
                    '.orangehrm-login-footer-sm'];

      for (let i = 0; i < listElements.length; i++) {
              cy.get(listElements[i]).should('exist', message);
       };
    })

    it('Texts', () =>{
      let message2 = "The text should be ${textList[i]}";
      const elementsList2 = ['.oxd-sheet > :nth-child(1)', '.oxd-sheet > :nth-child(2)',
              ':nth-child(2) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label',
              ':nth-child(3) > .oxd-input-group > .oxd-input-group__label-wrapper > .oxd-label',
              '.orangehrm-copyright-wrapper > :nth-child(1)', 
              '.orangehrm-copyright-wrapper > :nth-child(2)', ':nth-child(2) > a'];
      const textList = ['Username : Admin', 'Password : admin123', 'Username', 'Password', 
              'OrangeHRM OS 5.5', '© 2005 - 2024 OrangeHRM, Inc. All rights reserved.', 'OrangeHRM, Inc'];

      for(let i=0; i < elementsList2.length; i++){
            cy.get(elementsList2[i]).should('have.text', textList[i], message2)
      };

      cy.get('.orangehrm-login-forgot > .oxd-text').should('contain', 'Forgot your password?');
      cy.get('.oxd-button').invoke('text').should('be.equal', ' Login ').debug();
    })
  })
