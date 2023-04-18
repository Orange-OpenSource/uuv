/** Generated from: e2e\en-step-definition.feature */
import { test } from "playwright-bdd";

test.describe("English Test Step Definition", () => {

  test.beforeEach(async ({ When }) => {
    await When("I visit path \"http://localhost:9002/tests/test-app\"");
  });

  test("key.then.element.withAriaLabel", async ({ Then }) => {
    await Then("I should see an element with aria-label \"flegend\"");
  });

  test("key.then.element.not.withAriaLabel", async ({ Then }) => {
    await Then("I should not see an element with aria-label \"[NOT] flegend\"");
  });

  test("key.then.element.withAriaLabelAndContent", async ({ Then }) => {
    await Then("I should see an element with aria-label \"flegend\" and content \"Personalia\"");
  });

  test("key.then.element.withContent", async ({ Then }) => {
    await Then("I should see an element with content \"The fieldset element is used to group related data in a form, and the legend element defines a caption for the\"");
  });

  test("key.then.element.not.withContent", async ({ Then }) => {
    await Then("I should not see an element with content \"[NOT] The fieldset element is used to group related data in a form, and the legend element defines a caption for the\"");
  });

  test("key.then.element.withTestId", async ({ Then }) => {
    await Then("I should see an element with testId \"fieldset\"");
  });

  test("key.then.element.not.withTestId", async ({ Then }) => {
    await Then("I should not see an element with testId \"[NOT] fieldset\"");
  });

  test("key.then.element.withRoleAndName", async ({ Then }) => {
    await Then("I should see an element with role \"heading\" and name \"Grouping Form Data with Fieldset\"");
  });

  test("key.then.element.not.withRoleAndName", async ({ Then }) => {
    await Then("I should not see an element with role \"heading\" and name \"[NOT] Grouping Form Data with Fieldset\"");
    await Then("I should not see an element with role \"[NOT] heading\" and name \"Grouping Form Data with Fieldset\"");
  });

  test("key.then.element.withRoleAndNameAndContent", async ({ Then }) => {
    await Then("I should see an element with role \"button\" and name \"Reset\" and content \"Reset\"");
  });

  test("key.then.element.withRoleAndNameAndContentDisabled", async ({ Then }) => {
    await Then("I should see an element with role \"textbox\" and name \"First name\" and content \"John\" disabled");
  });

  test("key.then.element.withRoleAndNameAndContentEnabled", async ({ Then }) => {
    await Then("I should see an element with role \"textbox\" and name \"Last name\" and content \"Doe\" not disabled");
  });

  test("key.then.list.withNameAndContent", async ({ Then }) => {
    await Then("I should see elements of the list with name \"test-list\"", {"dataTable":{"rows":[{"cells":[{"value":"a"}]},{"cells":[{"value":"b"}]},{"cells":[{"value":"c"}]}]}});
  });

  test("key.then.attributes.withValues", async ({ When, And }) => {
    await When("Within the element with role \"textbox\" and name \"First name\"");
    await And("I should see these attributes with values", {"dataTable":{"rows":[{"cells":[{"value":"class"},{"value":"fname-class"}]}]}});
  });

  test("key.then.element.key.when.click", async ({ And, When, Then }) => {
    await And("Within the element with testId \"fieldset\"");
    await And("Within the element with role \"button\" and name \"Submit\"");
    await When("I click");
    await And("I reset context");
    await Then("I should see an element with role \"heading\" and name \"Index of uuv/\"");
  });

  test("key.then.element.key.when.type", async ({ And, When, Then }) => {
    await And("Within the element with testId \"fieldset\"");
    await And("Within the element with role \"textbox\" and name \"Last name\"");
    await When("I type the sentence \"Toto\"");
    await And("I reset context");
    await Then("I should see an element with role \"textbox\" and name \"Last name\" and content \"TotoDoe\"");
  });

  test("key.then.a11y.check", async ({ Then }) => {
    await Then("I should not have any accessibility issue");
  });

  test("key.given.within.selector", async ({ Then, And }) => {
    await Then("Within the element with selector '[data-testid=\"fieldset\"]'");
    await And("Within the element with selector '#fname'");
    await And("I should see these attributes with values", {"dataTable":{"rows":[{"cells":[{"value":"class"},{"value":"fname-class"}]}]}});
    await And("I reset context");
  });

});
