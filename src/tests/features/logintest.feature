Feature: Validate Login Page functionality

    Scenario Outline: User is able to login with valid credintial
        Given goto login Page
        When Enter the "<username>" and "<password>"
        When click on Login button
        Then I should see Home Page with title "Products"
        Examples:
            | username | password |
            | standard_user    | secret_sauce |

    Scenario Outline: User is not able to login with logged out user
        Given goto login Page
        When Enter the "<username>" and "<password>"
        When click on Login button
        Then I should see error message "<error_message>"
        Examples:
            | username | password |error_message |
            | locked_out_user    | secret_sauce |Epic sadface: Sorry, this user has been locked out.|