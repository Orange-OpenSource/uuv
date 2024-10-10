Feature: Debug

  Scenario: key.then.a11y.check.default
    When I visit path "https://e2e-test-quest.github.io/simple-webapp/"
    Then I should not have any axe-core accessibility issue

  Scenario: key.then.a11y.check.defaultAnother
    When I visit path "https://e2e-test-quest.github.io/simple-webapp/"
    Then I should not have any axe-core accessibility issue
