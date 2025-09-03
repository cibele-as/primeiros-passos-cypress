import userData from '../fixtures/userData.json'
import LoginPages from '../pages/loginPages'
import Dashboard from '../pages/dashboardPages'
import MenuPages from '../pages/menuPages'
import MyInfoPages from '../pages/myInfoPages'  


  const login = new LoginPages()
  const dashboard = new Dashboard()


describe('Login Orange HRM Test', () => {


// Check login failed with invalid username and password
  it('Login Failed', () => {  
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    login.checkAcessInvalid()

  })

  // Check login succes wiith valid username and password
   it('Login Success', () => {  
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSucess.username, userData.userSucess.password)
    dashboard.checkDashboardPage()

  })

  
})
 