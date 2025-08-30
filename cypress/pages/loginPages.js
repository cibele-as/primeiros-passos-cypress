class LoginPages {

    selectorsList () {

        const selectors = {
            usernameField: 'input[name="username"]',
            passwordField: 'input[name="password"]',
            loginButton: 'button[type="submit"]',
            wrongCredentialsAlert: "[role='alert']",
        }

        return selectors
    }
     
     acessLoginPage () {
        cy.visit('/auth/login')
     }

     loginWithAnyUser(usernamme, password) {
        cy.get(this.selectorsList().usernameField).type(usernamme)
        cy.get(this.selectorsList().passwordField).type(password)
        cy.get(this.selectorsList().loginButton).click()
     }



}

export default LoginPages