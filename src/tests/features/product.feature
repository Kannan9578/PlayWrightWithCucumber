Feature: Validate product Page functionality

    Scenario Outline: User is able to select Product 
        Given Go to productPage
        When Select a Product "<productName>" to cart
        Then I should see product counts <count> in cart icon
        Examples:
            | productName | count|
            | Sauce Labs Backpack |1|
            | Sauce Labs Onesie|12|