import userData from '../fixtures/userData.json'
import LoginPages from '../pages/loginPages'
import Dashboard from '../pages/dashboardPages'
import MenuPages from '../pages/menuPages'
import MyInfoPages from '../pages/myInfoPages'


  const Chance = require('chance');

  const login = new LoginPages()
  const dashboard = new Dashboard()
  const menuPages = new MenuPages()
  const myInfoPage = new MyInfoPages
  const chance = new Chance();


describe('Orange HRM Test', () => {



// Check login succes wiith valid username and password
  it('User Info Update Success', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboard.checkDashboardPage()
    menuPages.acessMyInfoPage()
  
    myInfoPage.fillMyPersonalDetails(chance.first(), chance.last())
    myInfoPage.fillMyEmployeeDetails(chance.ssn({ dashes: false }), chance.ssn({ ssnFour: true }), chance.cf(), '2025-12-25')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

  
})
 