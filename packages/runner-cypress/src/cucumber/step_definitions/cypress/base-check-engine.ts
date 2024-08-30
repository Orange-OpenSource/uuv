/**
 * Software Name : UUV
 *
 * SPDX-FileCopyrightText: Copyright (c) Orange SA
 * SPDX-License-Identifier: MIT
 *
 * This software is distributed under the MIT License,
 * see the "LICENSE" file for more details
 *
 * Authors: NJAKO MOLOM Louis Fredice & SERVICAL Stanley
 * Software description: Make test writing fast, understandable by any human
 * understanding English or French.
 */

import { DataTable, Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";
import { Context } from "./_context";
import "../../../cypress/commands";
import { Method } from "cypress/types/net-stubbing";
import { key } from "@uuv/runner-commons/wording/web";
import {
    assertTextContent,
    findWithRoleAndName,
    findWithRoleAndNameAndContent,
    findWithRoleAndNameAndContentDisable,
    findWithRoleAndNameAndContentEnable,
    findWithRoleAndNameFocused,
    notFoundWithRoleAndName,
    withinRoleAndName
} from "./core-engine";
import { A11yReferenceEnum } from "@uuv/a11y";
import { pressKey } from "./_.common";

/**
 * key.when.visit.description
 * */
When(`${key.when.visit}`, function(siteUrl: string) {
  if (siteUrl.match("^http:\\/\\/|https:\\/\\/")) {
    cy.visit(`${siteUrl}`);
  } else {
    cy.visit(`${Cypress.config().baseUrl}${siteUrl}`);
  }
});

/**
 * key.when.click.withContext.description
 * */
When(`${key.when.click.withContext}`, function() {
    if (haveKeyBoardFocused()) {
        cy.focused().click();
    } else {
        cy.uuvCheckContextWithinFocusedElement().then(context => {
            context.withinFocusedElement!.click();
        });
    }
});

/**
 * key.when.click.button.description
 * */
When(`${key.when.click.button}`, function(name: string) {
  click("button", name);
});

/**
 * key.when.click.withRole.description
 * */
When(`${key.when.click.withRole}`, function(role: string, name: string) {
  click(role, name);
});

/**
 * key.when.type.description
 * */
When(`${key.when.type}`, function(textToType: string) {
    if (haveKeyBoardFocused()) {
        cy.focused().type(textToType);
    } else {
        cy.uuvCheckContextWithinFocusedElement().then((context) => {
            context.withinFocusedElement!.focus();
            context.withinFocusedElement!.type(textToType);
        });
    }
});

/**
 * key.when.keyboard.multiplePress.description
 * */
When(`${key.when.keyboard.multiplePress}`, function(nbTimes: number, key: string) {
  for (let i = 1; i <= nbTimes; i++) {
    pressKey(key);
  }
});

/**
 * key.when.keyboard.press.description
 * */
When(`${key.when.keyboard.press}`, function(key: string) {
  pressKey(key);
});

/**
 * key.when.keyboard.previousElement.description
 * */
When(`${key.when.keyboard.previousElement}`, function() {
  pressKey("{reverseTab}");
});

/**
 * key.when.keyboard.nextElement.description
 * */
When(`${key.when.keyboard.nextElement}`, function() {
  pressKey("{tab}");
});

////////////////////////////////////////////
// Context ACTIONS
////////////////////////////////////////////

/**
 * key.given.viewport.preset.description
 * */
Given(`${key.given.viewport.preset}`, function(viewportPreset: string) {
  cy.viewport(viewportPreset as Cypress.ViewportPreset);
});

/**
 * key.given.viewport.withWidthAndHeight.description
 * */
Given(
 `${key.given.viewport.withWidthAndHeight}`,
 function(width: number, height: number) {
   cy.viewport(width, height);
 }
);

/**
 * key.given.keyboard.startNavigationFromTheTop.description
 * */
Given(
 `${key.given.keyboard.startNavigationFromTheTop}`,
 function() {
     cy.get("body").last().realClick({ x: 0.5, y: 0.5 });
 }
);

/**
 * key.when.timeout.description
 * */
When(`${key.when.timeout}`, function(newTimeout: number) {
  cy.uuvPatchContext({
    timeout: newTimeout
  });
});

/**
 * key.when.withinElement.description
 * */
When(`${key.when.withinElement.roleAndName}`, function(role: string, name: string) {
  withinRoleAndName(role, name);
});

/**
 * key.when.withinElement.ariaLabel.description
 * */
When(`${key.when.withinElement.ariaLabel}`, function(expectedAriaLabel: string) {
  const foundedElement = cy.uuvFindByLabelText(expectedAriaLabel, {})
   .uuvFoundedElement()
   .should("exist");

  cy.uuvPatchContext({
    withinFocusedElement: foundedElement
  });
});

/**
 * key.when.withinElement.description
 * */
When(`${key.when.withinElement.testId}`, function(testId: string) {
  const foundedElement = cy.uuvFindByTestId(testId)
   .uuvFoundedElement()
   .should("exist");

  cy.uuvPatchContext({
    withinFocusedElement: foundedElement
  });
});

/**
 * key.when.withinElement.selector.description
 * */
When(`${key.when.withinElement.selector}`, function(selector: string) {
  const foundedElement = cy.uuvGetContext().then(context => {
    const parentElement = context.withinFocusedElement;
    if (parentElement) {
      // console.log("parentElement: ", parentElement);
      return parentElement.should("exist").within(() => {
        cy.get(selector).as("foundedChildElement");
      });
    }
    cy.wrap(null).as("foundedChildElement");
    return cy.get(selector);
  }).uuvFoundedElement()
   .should("exist");

  cy.uuvPatchContext({
    withinFocusedElement: foundedElement
  });
});

/**
 * key.when.resetContext.description
 * */
When(`${key.when.resetContext}`, function() {
    cy.wrap(new Context()).as("context");
});

/**
 * key.when.mock.withBody.description
 * */
When(
 `${key.when.mock.withBody}`,
 function(verb: Method, uri: string, name: string, body: any) {
   cy
    .intercept(verb, uri, {
      body: body
    })
    .as(name);
 }
);

/**
 * key.when.mock.withStatusCode.description
 * */
When(
 `${key.when.mock.withStatusCode}`,
 function(verb: Method, uri: string, name: string, statusCode: number) {
   cy
    .intercept(verb, uri, {
      statusCode: statusCode
    })
    .as(name);
 }
);

/**
 * key.when.mock.withFixture.description
 * */
When(
 `${key.when.mock.withFixture}`,
 function(verb: Method, uri: string, name: string, fixture: any) {
   cy
    .intercept(verb, uri, {
      fixture: fixture
    })
    .as(name);
 }
);

////////////////////////////////////////////
// INTERCEPTION
////////////////////////////////////////////
/**
 * key.when.headers.forUriAndMethod.description
 * */
When(
 `${key.when.headers.forUriAndMethod}`,
 function(url: string, method: string, headersToSet: DataTable) {
   cy.intercept(method as Method, url, (req) => {
     req.headers = {
       ...req.headers,
       ...headersToSet.rowsHash()
     };
     req.continue();
   });
 }
);

/**
 * key.when.headers.forUri.description
 * */
When(`${key.when.headers.forUri}`, function(url: string, headersToSet: DataTable) {
  cy.intercept(url, (req) => {
    req.headers = {
      ...req.headers,
      ...headersToSet.rowsHash()
    };
    req.continue();
  });
});

////////////////////////////////////////////
// VALIDATION
////////////////////////////////////////////

/**
 * key.then.element.withContent.description
 * */
Then(`${key.then.element.withContent}`, function(textContent: string) {
  cy.uuvFindByText(textContent, {})
   .uuvFoundedElement()
   .should("exist");
});

/**
 * key.then.element.not.withContent.description
 * */
Then(`${key.then.element.not.withContent}`, function(textContent: string) {
  cy.uuvFindByText(textContent, {})
   .should("not.exist");
});

/**
 * key.then.element.withTestId.description
 * */
Then(`${key.then.element.withTestId}`, function(testId: string) {
  cy.uuvFindByTestId(testId)
   .uuvFoundedElement()
   .should("exist");
});

/**
 * key.then.element.not.withTestId.description
 * */
Then(`${key.then.element.not.withTestId}`, function(testId: string) {
  cy.uuvFindByTestId(testId)
   .should("not.exist");
});

/**
 * key.then.element.withRoleAndName.description
 * */
Then(`${key.then.element.withRoleAndName}`, function(role: string, name: string) {
  findWithRoleAndName(role, name);
});

/**
 * key.then.element.not.withRoleAndName.description
 * */
Then(
 `${key.then.element.not.withRoleAndName}`,
  function(role: string, name: string) {
   notFoundWithRoleAndName(role, name);
 }
);

/**
 * key.then.element.withRoleAndNameAndContent.description
 * */
Then(
 `${key.then.element.withRoleAndNameAndContent}`,
  function(expectedRole: string, name: string, expectedTextContent: string) {
   findWithRoleAndNameAndContent(expectedRole, name, expectedTextContent);
 }
);

/**
 * key.then.element.withRoleAndNameFocused.description
 * */
Then(
 `${key.then.element.withRoleAndNameFocused}`,
  function(expectedRole: string, name: string) {
    findWithRoleAndNameFocused(expectedRole, name);
 }
);

/**
 * key.then.element.withSelectorFocused.description
 * */
Then(
 `${key.then.element.withSelectorFocused}`,
 function(selector: string) {
   cy.get(selector).then(foundElement => {
     cy.focused().then(focusedElement => {
       expect(foundElement?.get(0)).eq(focusedElement?.get(0));
     });
   });
 }
);

/**
 * key.then.element.withRoleAndNameAndContentDisabled.description
 * */
Then(
 `${key.then.element.withRoleAndNameAndContentDisabled}`,
  function(expectedRole: string, name: string, expectedTextContent: string) {
   findWithRoleAndNameAndContentDisable(expectedRole, name, expectedTextContent);
 }
);

/**
 * key.then.element.withRoleAndNameAndContentEnabled.description
 * */
Then(
 `${key.then.element.withRoleAndNameAndContentEnabled}`,
  function(expectedRole: string, name: string, expectedTextContent: string) {
   findWithRoleAndNameAndContentEnable(expectedRole, name, expectedTextContent);
 }
);

/**
 * key.then.element.withAriaLabel.description
 * */
Then(`${key.then.element.withAriaLabel}`, function(expectedAriaLabel: string) {
  cy.uuvFindByLabelText(expectedAriaLabel, {})
   .uuvFoundedElement()
   .should("exist");
});

/**
 * key.then.element.not.withAriaLabel.description
 * */
Then(`${key.then.element.not.withAriaLabel}`, function(expectedAriaLabel: string) {
  cy.uuvFindByLabelText(expectedAriaLabel, {})
    .should("not.exist");
});

/**
 * key.then.element.withAriaLabelAndContent.description
 * */
Then(
 `${key.then.element.withAriaLabelAndContent}`,
  function(expectedAriaLabel: string, expectedTextContent: string) {
   cy.uuvFindByLabelText(expectedAriaLabel, {})
    .uuvFoundedElement()
    .should("exist")
    .then((response) => {
      assert.equal(response.length, 1);
      assertTextContent(response, expectedTextContent);
    });
 }
);

/**
 * key.then.element.previousWithRoleAndNameFocused.description
 * */
When(`${key.then.element.previousWithRoleAndNameFocused}`, function(expectedRole: string, name: string) {
    pressKey("{reverseTab}");
    findWithRoleAndNameFocused(expectedRole, name);
});

/**
 * "key.then.element.nextWithRoleAndNameFocused.description
 * */
When(`${key.then.element.nextWithRoleAndNameFocused}`, function(expectedRole: string, name: string) {
    pressKey("{tab}");
    findWithRoleAndNameFocused(expectedRole, name);
});

/**
 * key.then.wait.mock.description
 * */
Then(`${key.then.wait.mock}`, function(name: string) {
  cy.wait([`@${name}`]);
});

/**
 * key.when.click.withContext.description
 * */
Then(`${key.then.wait.milliSeconds}`, function(ms: number) {
  cy.wait(ms);
});

/**
 * key.then.list.withNameAndContent.description
 * */
Then(
 `${key.then.list.withNameAndContent}`,
  function(expectedListName: string, expectedElementsOfList: DataTable) {
   cy.uuvFindByRole("list", { name: expectedListName })
    .uuvFoundedElement()
    .should("exist")
    .within(() => {
      return cy.findAllByRole("listitem", {}).then((listitem) => {
        const foundedElement: any[] = [];
        for (let i = 0; i < listitem.length; i++) {
          foundedElement.push([listitem[i].textContent]);
        }
        assert.equal(listitem.length, expectedElementsOfList.raw().length);
        assert.deepEqual(
         foundedElement,
         expectedElementsOfList.raw(),
         `expected [${foundedElement}] to be [${expectedElementsOfList.raw()}]`
        );
      });
    });
 }
);

/**
 * key.then.attributes.withValues.description
 * */
Then(
 `${key.then.attributes.withValues}`,
  function(expectedAttributeList: DataTable) {
   cy.uuvCheckContextWithinFocusedElement().then((context) => {
     const elementToSelect = context.withinFocusedElement!;
     for (const currentIndex in expectedAttributeList.raw()) {
       const attributeName = expectedAttributeList.raw()[currentIndex][0];
       const attributeValue = expectedAttributeList.raw()[currentIndex][1];
       elementToSelect.then((response) => {
         assert.equal(response[0].getAttribute(attributeName), attributeValue);
       });
     }
   });
 }
);

/**
 * key.then.element.withSelector.description
 * */
Then(`${key.then.element.withSelector}`, function(selector: string) {
  cy.get(selector).should("exist");
});

/**
 * key.then.a11y.axecore.default.description
 * */
Then(
 `${key.then.a11y.axecore.default}`,
  function() {
   cy.injectAxe();
   cy.checkA11y();
 });

/**
 * key.then.a11y.axecore.onlyCritical.description
 * */
Then(
 `${key.then.a11y.axecore.onlyCritical}`,
  function() {
   cy.injectAxe();
   cy.checkA11y(undefined, {
     includedImpacts: ["critical"]
   });
 });

/**
 * key.then.a11y.axecore.withImpacts.description
 * */
Then(
 `${key.then.a11y.axecore.withImpacts}`,
  function(impacts: any) {
   cy.injectAxe();
   cy.checkA11y(undefined, {
     includedImpacts: [impacts]
   });
 });

/**
 * key.then.a11y.axecore.withTags.description
 * */
Then(
 `${key.then.a11y.axecore.withTags}`,
  function(tags: any) {
   cy.injectAxe();
   cy.checkA11y(undefined, {
     runOnly: {
       type: "tag",
       values: [tags]
     }
   });
 });

/**
 * key.then.a11y.axecore.withFixtureContextAndFixtureOption.description
 * */
Then(
 `${key.then.a11y.axecore.withFixtureContextAndFixtureOption}`,
  function(context: any, option: any) {
   cy.injectAxe();
   cy.fixture(context).then(context => {
     cy.fixture(option).then(option => {
       cy.checkA11y(context, option);
     });
   });
 });

/**
 * key.then.a11y.axecore.withFixtureOption.description
 * */
Then(
 `${key.then.a11y.axecore.withFixtureOption}`,
  function(option: any) {
   cy.injectAxe();
   cy.fixture(option).then(data => {
     cy.checkA11y(undefined, data);
   });
 });


/**
 * key.then.a11y.rgaa.default.description
 * */
Then(
 `${key.then.a11y.rgaa.default}`,
  function() {
   cy.injectUvvA11y();
   cy.checkUvvA11y(A11yReferenceEnum.RGAA);
 });

Then(
 `${key.then.a11y.rgaa.defaultWithResult}`,
  function(expectedResult: string) {
   cy.injectUvvA11y();
   cy.checkUvvA11y(A11yReferenceEnum.RGAA, JSON.parse(expectedResult));
 });

Then(
 `${key.then.a11y.rgaa.defaultWithResultContaining}`,
  function(expectedResult: string) {
   cy.injectUvvA11y();
   cy.checkUvvA11y(A11yReferenceEnum.RGAA, JSON.parse(expectedResult), true);
 });

function click(role: string, name: string) {
  cy.uuvGetContext().then(context => {
    const parentElement = context.withinFocusedElement;
    if (parentElement) {
      cy.uuvFindByRole(role, { name: name }).uuvFoundedElement().click();
      cy.wrap(new Context()).as("context");
    } else {
      cy.findByRole(role, { name: name, ...context }).click();
    }
  });
}

function haveKeyBoardFocused() {
  return Cypress.$(":focus").length > 0;
}
