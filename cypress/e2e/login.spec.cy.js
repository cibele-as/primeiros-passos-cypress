describe('Orange HRM Test', () => {

beforeEach(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

const selectorsList = {
  usernameField: 'input[name="username"]',
  passwordField: 'input[name="password"]',
  loginButton: 'button[type="submit"]',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  wrongCredentialsAlert: "[role='alert']"
}

// Check login succes wiith valid username and password
  it('Login Sucess', () => {
    cy.get(selectorsList.usernameField).type('Admin')
    cy.get(selectorsList.passwordField).type('admin123')
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.sectionTitleTopBar).should('contain', 'Dashboard')
  })

// Check login failed with invalid username and password
  it('Login Failed', () => {  
    cy.get(selectorsList.usernameField).type('Test')
    cy.get(selectorsList.passwordField).type('test123')
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
  
})
 