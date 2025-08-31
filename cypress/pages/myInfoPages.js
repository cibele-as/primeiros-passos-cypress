class MyInfoPages {

    selectorsList() {


        const selectors = {
            firstNameField: '[name="firstName"]',
            lastNameField: '[name="lastName"]',
            genericField: '.oxd-input--active ',
            dateField: '[placeholder="yyyy-dd-mm"]',
            dateCloseButton: '.--close',
            saveMyInfoButton: '[type="submit"]',
            genericDropdown: '.oxd-select-text-input',
            selectDropdown: '.oxd-select-dropdown',
            loginButton: 'button[type="submit"]',
            wrongCredentialsAlert: "[role='alert']",

        }
        return selectors

    }

     fillMyPersonalDetails(firstName, lastName) {
        
      cy.get(this.selectorsList().firstNameField).clear().type(firstName)
      cy.get(this.selectorsList().lastNameField).clear().type(lastName)

     }


    fillMyEmployeeDetails(employeeId, otherId, driveLicenseNumber, licenseExpiryDate) {

        cy.get(this.selectorsList().genericField).eq(3).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(4).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(driveLicenseNumber)
        cy.get(this.selectorsList().dateField).eq(0).clear().type(licenseExpiryDate)
       

    }

    fillStatus() {
        // Select values from dropdowns Nationality and Marital Status

      cy.get(this.selectorsList().genericDropdown).eq(0).then(dropDown => {
      cy.wrap(dropDown).click({ force: true })
      cy.get(this.selectorsList().selectDropdown).contains('American').click({ force: true })
      })

      cy.get(this.selectorsList().genericDropdown).eq(1).then(dropDown => {
      cy.wrap(dropDown).click({ force: true })
      cy.get(this.selectorsList().selectDropdown).contains('Single').click({ force: true })

    })
}

      saveForm () {
         cy.get(this.selectorsList().dateCloseButton).click({ force: true })
         cy.get(this.selectorsList().saveMyInfoButton).eq(0).click({ force: true })
         cy.get('body').should('contain','Successfully Updated')
         cy.get('.oxd-toast-close')
    }

}
export default MyInfoPages

