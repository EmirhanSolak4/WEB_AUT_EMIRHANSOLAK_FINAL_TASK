describe('Final Task - Form Automation', () => {
  it('should fill the form and validate submitted data', () => {
    cy.visit('https://demoqa.com/automation-practice-form');

    // Remove banner (reklam + footer bazen test engeller)
    cy.get('#close-fixedban').click({ force: true });

    // Fill text fields
    cy.get('#firstName').type('Emirhan');
    cy.get('#lastName').type('Solak');
    cy.get('#userEmail').type('emirhan@example.com');
    cy.get('#gender-radio-3').check({ force: true }); // Other
    cy.get('#userNumber').type('1234567890');

    // Set Date of Birth
    cy.get('#dateOfBirthInput').click();
    cy.get('.react-datepicker__month-select').select('February');
    cy.get('.react-datepicker__year-select').select('1930');
    cy.get('.react-datepicker__day--028:not(.react-datepicker__day--outside-month)').click();


    // Subject
    cy.get('.subjects-auto-complete__value-container').click().type('Economics{enter}');

    // Hobbies
    cy.get('#hobbies-checkbox-3').check({ force: true }); // Music

    // Upload file
    cy.get('#uploadPicture').selectFile('cypress/files/profile.jpg');

    // Address (optional ama boş geçmeyelim)
    cy.get('#currentAddress').type('Cypress Test Address');

    // State
cy.get('#state').click({ force: true });
cy.get('#react-select-3-option-0', { timeout: 5000 }).click({ force: true });

// City
cy.get('#city').click({ force: true });
cy.get('#react-select-4-option-0', { timeout: 5000 }).should('be.visible').click({ force: true });





    



    // Submit
    cy.get('#submit').click();

    // ✅ VALIDATION
    cy.get('td').contains('Emirhan Solak').should('be.visible');
    cy.get('td').contains('emirhan@example.com').should('be.visible');
    cy.get('td').contains('Other').should('be.visible');
    cy.get('td').contains('1234567890').should('be.visible');
    cy.get('td').contains('28 February,1930').should('be.visible');
    cy.get('td').contains('Economics').should('be.visible');
    cy.get('td').contains('Music').should('be.visible');
    cy.get('td').contains('profile.jpg').should('be.visible');
    cy.get('td').contains('Cypress Test Address').should('be.visible');
    cy.get('td').contains('NCR Delhi').should('be.visible');
  });
});
