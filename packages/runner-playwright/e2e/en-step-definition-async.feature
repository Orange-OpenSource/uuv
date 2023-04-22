@Playwright
Feature: English Test Step Definition async
  Background:
    When I mock a request GET on url "http://localhost:9002/tests/uuvFixture.png" named "uuvFixture" with fixture mockUuv.jpg
    When I mock a request GET on url "http://localhost:9002/tests/uuvBody.png" named "uuvBody" with content "I am a content"
    When I mock a request GET on url "http://localhost:9002/tests/uuvStatus.png" named "uuvStatus" with status code 500
    When I visit path "http://localhost:9002/tests/test-app"

#  Scenario: key.when.mock.withFixture & key.then.mock.consume
#    Then I should consume a mock named "uuvFixture"
#
#  Scenario: key.when.mock.withBody & key.then.mock.consume
#    Then I should consume a mock named "uuvBody"
#
#  Scenario: key.when.mock.withStatusCode & key.then.mock.consume
#    Then I should consume a mock named "uuvStatus"