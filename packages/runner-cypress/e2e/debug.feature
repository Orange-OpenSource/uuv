Feature: Debug

  Scenario: key.then.a11y.check.default - 1
    When I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
    Then I should not have any axe-core accessibility issue

  Scenario: key.then.a11y.check.default - 2
    When I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
    Then I should not have any axe-core critical accessibility issue

  Scenario: key.then.a11y.check.default - 3
    When I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
    Then I should not have any axe-core accessibility issue with option json fixture withExperimentalOption.json

  Scenario: key.then.a11y.check.default - 4
    When I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
    Then I should not have any axe-core accessibility issue with critical impact

  Scenario: key.then.a11y.check.default - 5
    When I visit path "https://e2e-test-quest.github.io/weather-app/?isStarted=true"
    Then I should not have any axe-core accessibility issue with context json fixture withExcludeErrorContext.json and option json fixture withBestPracticeOption.json

  Scenario: key.then.a11y.rgaa.default
    When I visit path "https://accessibilite.numerique.gouv.fr/ressources/questions/"
    Then I should not have any rgaa accessibility issue

  Scenario: key.then.a11y.rgaa.defaultWithResultContaining
    When I visit path "https://e2e-test-quest.github.io/simple-webapp/a11y-test.html"
    Then I should have the following partial result based on the rgaa reference
    """json
      {
        "status": "error",
        "criteria": {
          "1.5": {
            "status": "manual"
          },
          "1.6": {
            "status": "manual",
            "tests": {
              "1.6.5": {
                "status": "success"
              }
            }
          },
          "11.1": {
            "status": "success",
            "tests": {
              "11.1.1": {
                "status": "success"
              }
            }
          }
        }
      }
    """
