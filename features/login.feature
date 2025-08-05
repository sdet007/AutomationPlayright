Feature: Login Feature

  Scenario: Valid user logs in
    Given the user navigates to the login page
    When the user enters username "admin" and password "root"
    Then the user should see the dashboard
