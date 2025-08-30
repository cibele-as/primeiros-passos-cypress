class MenuPages {

    selectorsList () {

        const selectorsList = {
          myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
          performanceButton: '[href="/web/index.php/performance/viewPerformanceModule"]',
          dashboardButton: '[href="/web/index.php/dashboard/index"]',
          directoryButton: '[href="/web/index.php/directory/viewDirectory"]',
          maintenanceButton: '[href="/web/index.php/maintenance/viewMaintenanceModule"]',
          claimButton: '[href="/web/index.php/claim/viewClaimModule"]',
          buzzButton: '[href="/web/index.php/buzz/viewBuzz"]',
          recruitmentButton: '[href="/web/index.php/recruitment/viewRecruitmentModule"]',
          timeButton: '[href="/web/index.php/time/viewTimeModule"]',
          leaveButton: '[href="/web/index.php/leave/viewLeaveModule"]',
          pimButton: '[href="/web/index.php/pim/viewPimModule"]',
          adminButton: '[href="/web/index.php/admin/viewAdminModule"]',


        }

       return selectorsList

    }

   acessMyInfoPage () {
      cy.get(this.selectorsList().myInfoButton).click()
         
    }

    acessPerformancePage(){
        cy.get(this.selectorsList().performanceButton).click()
    }

    acessDashboardPage() {
        cy.get(this.selectorsList().dashboardButton).click()
    }

    acessDirectoryPage() {
        cy.get(this.selectorsList().directoryButton).click()
    }

    acessMaintenancePage() {
        cy.get(this.selectorsList().maintenanceButton).click()
    }

    acessClaimPage() {
        cy.get(this.selectorsList().claimButton).click()
    }

    acessBuzzPage() {
        cy.get(this.selectorsList().buzzButton).click()
    }

    acessRecruitmentPage(){
        cy.get(this.selectorsList().recruitmentButton).click()
    }

    acessTimePage () {
        cy.get(this.selectorsList().timeButton).click()
    }

    acessLeavePage() {
        cy.get(this.selectorsList().leaveButton).click()
    }

    acessPimPage() {
        cy.get(this.selectorsList().pimButton).click()
    }
   
    acessAdminPage() {
        cy.get(this.selectorsList().adminButton).click()
    }
}

export default MenuPages