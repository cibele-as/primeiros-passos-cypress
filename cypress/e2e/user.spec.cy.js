import userData from '../fixtures/userData.json'
import LoginPages from '../pages/loginPages'
import Dashboard from '../pages/dashboardPages'
import MenuPages from '../pages/menuPages'


  const login = new LoginPages()
  const dashboard = new Dashboard()
  const menuPages = new MenuPages()


describe('Orange HRM Test', () => {

  const selectorsList = {
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active ',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    saveMyInfoButton: '[type="submit"]',
    genericDropdown:'.oxd-select-text-input',
    selectDropdown:'.oxd-select-dropdown',
    //usernameField: 'input[name="username"]',
    //passwordField: 'input[name="password"]',
    loginButton: 'button[type="submit"]',
    wrongCredentialsAlert: "[role='alert']",

  }



// Check login succes wiith valid username and password
  it.only('User Info Update Success', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboard.checkDashboardPage()
    menuPages.acessMyInfoPage()

   
    cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    cy.get(selectorsList.genericField).eq(5).clear().type('DriverLicenseTest')
    cy.get(selectorsList.dateField).eq(0).clear().type('2025-08-24')
    cy.get(selectorsList.dateCloseButton).click()
    cy.get(selectorsList.saveMyInfoButton).eq(0).click({force:true})

   // Select values from dropdowns Nationality and Marital Status
    cy.get(selectorsList.genericDropdown).eq(0).then(dropDown => {
      cy.wrap(dropDown).click()
      cy.get(selectorsList.selectDropdown).contains('American').click({force:true})
    })
    
    cy.get(selectorsList.genericDropdown).eq(1).then(dropDown => {
      cy.wrap(dropDown).click()
      cy.get(selectorsList.selectDropdown).contains('Single').click({force:true})
    })
   
    // Check if the success message appears
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
 