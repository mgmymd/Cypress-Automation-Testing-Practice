/// <reference types="cypress" />

describe('Login page elements', () => {
    beforeEach(() => {
        cy.visit("https://www.saucedemo.com")
      })

    it('Check page elements', () => { 
        const listElements = ['.login_logo', '[data-test=username]', '[data-test=password]',
                            '[data-test=login-button]', '#login_credentials', '.login_password'];

         for (let i = 0; i < listElements.length; i++) {
            const message = 'Element ${listElements[i]} should be displayed';
             cy.get(listElements[i]).should('be.visible', message);
        }
    })

    it('Negative: Check page elements', () =>{
        cy.get('rememberMe').should('not.be.visible');
    })

    it('Texts', () => {
        const credentialsList=['standard_user', 'locked_out_user', 'problem_user',
                                'performance_glitch_user', 'error_user', 'visual_user']

        cy.get('.login_password').contains('Password for all users:secret_sauce').should('be.visible').debug()
        
        for (let i = 0; i < credentialsList.length; i++){
            cy.get('.login_credentials').contains(credentialsList[i]).should(($div) => {
                const text = $div.text()
                expect(text).to.include(credentialsList[i])}).debug() }
        })
})

describe('Login errors', () => {
    beforeEach(() => {cy.visit("https://www.saucedemo.com")});

    it('No username or password', () => {
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Username is required').should('be.visible').debug()
    })

    it('Valid username and no password', () =>{
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Password is required').should('be.visible').debug()
    })

    it('No username and valid password', () => {
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Username is required').should('be.visible')
    })

    it('Wrong username and correct password', () => {
        cy.get('[data-test=username]').type('fake_user')
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })

    it('Wrong password and valid username', () => {
        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type('horrible_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })

    it('Long username and correct password', () =>{
        function randomString(len, arr) {
            var string = '';
            for (var i = len; i > 0; i--) {
                string += 
                arr[Math.floor(Math.random() * arr.length)];
            }
            return string;}

        var longUsername = randomString(314,'123toolongUsername1')

        cy.get('[data-test=username]').type(longUsername)
        cy.get('[data-test=password]').type('secret_sauce')
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })

    it('Long password and correct username', () => {
        function randomString(len, arr) {
            var string = '';
            for (var i = len; i > 0; i--) {
                string += 
                arr[Math.floor(Math.random() * arr.length)];
            }
            return string;}

        var longPassword = randomString(413,'123toolongPasswordddd987')

        cy.get('[data-test=username]').type('standard_user')
        cy.get('[data-test=password]').type(longPassword)
        cy.get('[data-test=login-button]').click()
        cy.get('[data-test=error]').contains('Epic sadface: Username and password do not match any user in this service').should('be.visible')
    })
})
