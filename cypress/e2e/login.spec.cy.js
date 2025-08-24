import userData from '../fixtures/userData.json'

describe('Orange HRM Test', () => {

beforeEach(() => {
  cy.visit('/auth/login')
})

const selectorsList = {
  usernameField: 'input[name="username"]',
  passwordField: 'input[name="password"]',
  loginButton: 'button[type="submit"]',
  sectionTitleTopBar: '.oxd-topbar-header-breadcrumb-module',
  dashboardGrid: '.orangehrm-dashboard-grid',
  wrongCredentialsAlert: "[role='alert']"
}

// Check login succes wiith valid username and password
  it('Login Success', () => {
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
  })

// Check login failed with invalid username and password
  it('Login Failed', () => {  
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
  
})
 