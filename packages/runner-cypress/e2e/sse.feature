Feature: Accessibility Step Definition

  Rule: a11y
    Scenario: key.when.keyboard.startNavigationFromTheTop & key.when.keyboard.withRoleAndNameTabbable
      When I visit path "https://e2e-test-quest.github.io/weather-app/"
      Given I start a keyboard navigation from the top of the page
      And I go to next keyboard element
      Then I should see an element with role "image" and name "Weather App's Logo", accessible with the keyboard

    Scenario: key.when.keyboard.nextElement
      When I visit path "https://e2e-test-quest.github.io/weather-app/"
      Given I start a keyboard navigation from the top of the page
      And I go to next keyboard element
      Then I should see an element with role "link" and name "Home", accessible with the keyboard


