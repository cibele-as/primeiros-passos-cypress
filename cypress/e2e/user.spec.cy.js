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
  wrongCredentialsAlert: "[role='alert']",
  myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
  firstNameField: '[name="firstName"]',
  lastNameField: '[name="lastName"]',
  genericField: '.oxd-input--active ',
  dateField: '[placeholder="yyyy-dd-mm"]',
  dateCloseButton: '.--close',
  saveMyInfoButton: '[type="submit"]'
}

// Check login succes wiith valid username and password
  it.only('User Info Update Success', () => {
    cy.get(selectorsList.usernameField).type(userData.userSucess.username)
    cy.get(selectorsList.passwordField).type(userData.userSucess.password)
    cy.get(selectorsList.loginButton).click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorsList.dashboardGrid)
    cy.get(selectorsList.myInfoButton).click()
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-08-24')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveMyInfoButton).eq(0).click()
    cy.get('body').should('contain','Successfully Updated')
  

  })

// Check login failed with invalid username and password
  it('Login Failed', () => {  
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialsAlert)
  })
  
})
 