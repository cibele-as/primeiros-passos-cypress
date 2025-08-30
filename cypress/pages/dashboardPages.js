class DashboardPage {

    selectorsList () {

        const selectors = {
           dashboardGrid: '.orangehrm-dashboard-grid',
           location: '/web/index.php/dashboard/index',
          

        }

        return selectors
    }  

    checkDashboardPage() {
        cy.location('pathname').should('equal', this.selectorsList().location)
        cy.get(this.selectorsList().dashboardGrid).should('be.visible')
    }
  
   
}
  export default DashboardPage