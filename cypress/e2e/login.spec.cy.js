describe('Orange HRM Test', () => {

beforeEach(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
})

// Check login succes wiith valid username and password
  it('Login Sucess', () => {
    cy.get('input[name="username"]').type('Admin')
    cy.get('input[name="password"]').type('admin123')
    cy.get('button[type="submit"]').click()
    cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    cy.get('.oxd-topbar-header-breadcrumb-module').should('contain', 'Dashboard')
  })

// Check login failed with invalid username and password
  it('Login Failed', () => {  
    cy.get('input[name="username"]').type('Test')
    cy.get('input[name="password"]').type('test123')
    cy.get('button[type="submit"]').click()
    cy.get("[role='alert']")
  })
  
})
 