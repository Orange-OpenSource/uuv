/** Generated from: e2e\en-step-definition-async.feature */
import { test } from "playwright-bdd";

test.describe("English Test Step Definition async", () => {

  test.beforeEach(async ({ When }) => {
    await When("I mock a request GET on uri \"http://localhost:9001/tests/uuvFixture.png\" named \"uuvFixture\" with fixture mockUuv.jpg");
    await When("I mock a request GET on uri \"http://localhost:9001/tests/uuvBody.png\" named \"uuvBody\" with content \"I am a content\"");
    await When("I mock a request GET on uri \"http://localhost:9001/tests/uuvStatus.png\" named \"uuvStatus\" with status code 500");
    await When("I visit path \"http://localhost:9002/tests/test-app\"");
  });

  test("key.when.mock.withFixture & key.then.mock.consume", async ({ Then }) => {
    await Then("I should consume a mock named \"uuvFixture\"");
  });

  test("key.when.mock.withBody & key.then.mock.consume", async ({ Then }) => {
    await Then("I should consume a mock named \"uuvBody\"");
  });

  test("key.when.mock.withStatusCode & key.then.mock.consume", async ({ Then }) => {
    await Then("I should consume a mock named \"uuvStatus\"");
  });

});
