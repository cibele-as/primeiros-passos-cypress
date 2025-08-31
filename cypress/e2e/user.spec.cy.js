import userData from '../fixtures/userData.json'
import LoginPages from '../pages/loginPages'
import Dashboard from '../pages/dashboardPages'
import MenuPages from '../pages/menuPages'
import MyInfoPages from '../pages/myInfoPages'


  const login = new LoginPages()
  const dashboard = new Dashboard()
  const menuPages = new MenuPages()
  const myInfoPage = new MyInfoPages


describe('Orange HRM Test', () => {



// Check login succes wiith valid username and password
  it('User Info Update Success', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)

    dashboard.checkDashboardPage()
    menuPages.acessMyInfoPage()
  
    myInfoPage.fillMyPersonalDetails('FirstNameTest', 'LastNameTest')
    myInfoPage.fillMyEmployeeDetails('EmployeeId', 'OtherIdTest', 'DriverLicenseTest', '2025-08-24')
    myInfoPage.fillStatus()
    myInfoPage.saveForm()

  })

 
// Check login failed with invalid username and password
  it('Login Failed', () => {  
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    login.checkAcessInvalid()

  })

  
})
 