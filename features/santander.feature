Feature: cotizacion de seguros autocompara

    @Santander
    Scenario: cotizacion de seguro de auto Santander
        Given I am on the santander quoter home page
        When I fill my car year
        When I select my car brand
        When I fill the personal data form
        Then I can see the quoter results
        When I view my car info and extract it