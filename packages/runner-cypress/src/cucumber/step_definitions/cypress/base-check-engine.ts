/**
 * Copyright UUV.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {DataTable, Given, Then, When,} from "@badeball/cypress-cucumber-preprocessor";
import {Context} from "./_context";
import "../../../cypress/commands";
import {Method} from "cypress/types/net-stubbing";
import {key} from '@uuv/runner-commons';
import {
    assertTextContent,
    findWithRoleAndName,
    findWithRoleAndNameAndContent, findWithRoleAndNameAndContentDisable, findWithRoleAndNameAndContentEnable,
    notFoundWithRoleAndName,
    withinRoleAndName
} from "./core-engine";

When(`${key.when.visit}`, (siteUrl: string) => {
    if (siteUrl.match("^http:\\/\\/|https:\\/\\/")) {
        return cy.visit(`${siteUrl}`);
    }
    return cy.visit(`${Cypress.config().baseUrl}${siteUrl}`);
});

When(`${key.when.click}`, () => {
    cy.uuvCheckContextFocusedElement().then(context => {
        context.focusedElement!!.click();
    });
});

When(`${key.when.type}`, (textToType: string) => {
    cy.uuvCheckContextFocusedElement().then((context) => {
        context.focusedElement!!.focus();
        context.focusedElement!!.type(textToType);
    });
});

////////////////////////////////////////////
// Context ACTIONS
////////////////////////////////////////////

Given(`${key.given.viewport.preset}`, (viewportPreset: string) => {
    return cy.viewport(viewportPreset as Cypress.ViewportPreset);
});

Given(
    `${key.given.viewport.withWidthAndHeight}`,
    (width: number, height: number) => {
        return cy.viewport(width, height);
    }
);

When(`${key.when.timeout}`, (newTimeout: number) => {
    return cy.uuvPatchContext({
        timeout: newTimeout,
    });
});

When(`${key.when.withinElement.roleAndName}`, (role: string, name: string) => {
    return withinRoleAndName(role, name);
});

When(`${key.when.withinElement.ariaLabel}`, (expectedAriaLabel: string) => {
    const foundedElement = cy.uuvFindByLabelText(expectedAriaLabel, {})
        .uuvFoundedElement()
        .should("exist");

    return cy.uuvPatchContext({
        focusedElement: foundedElement
    });
});

When(`${key.when.withinElement.testId}`, (testId: string) => {
    const foundedElement = cy.uuvFindByTestId(testId)
        .uuvFoundedElement()
        .should("exist");

    return cy.uuvPatchContext({
        focusedElement: foundedElement
    });
});


When(`${key.then.element.withSelector}`, (selector: string) => {
    return cy.get(selector).should("exist");
});

When(`${key.when.withinElement.selector}`, (selector: string) => {
    const foundedElement = cy.uuvGetContext().then(context => {
        const parentElement = context.focusedElement;
        if (parentElement) {
            console.log('parentElement: ', parentElement);
            return parentElement.should('exist').within(() => {
                cy.get(selector).as('foundedChildElement');
            });
        }
        cy.wrap(null).as("foundedChildElement");
        return cy.get(selector);
    }).uuvFoundedElement()
        .should("exist");

    return cy.uuvPatchContext({
        focusedElement: foundedElement
    });
});

When(`${key.when.resetContext}`, () => {
    return cy.wrap(new Context()).as("context");
});

When(
    `${key.when.mock.withBody}`,
    (verb: Method, uri: string, name: string, body: any) => {
        return cy
            .intercept(verb, uri, {
                body: body,
            })
            .as(name);
    }
);

When(
    `${key.when.mock.withStatusCode}`,
    (verb: Method, uri: string, name: string, statusCode: number) => {
        return cy
            .intercept(verb, uri, {
                statusCode: statusCode,
            })
            .as(name);
    }
);

When(
    `${key.when.mock.withFixture}`,
    (verb: Method, uri: string, name: string, fixture: any) => {
        return cy
            .intercept(verb, uri, {
                fixture: fixture,
            })
            .as(name);
    }
);

////////////////////////////////////////////
// INTERCEPTION
////////////////////////////////////////////
When(
    `${key.when.headers.forUriAndMethod}`,
    (url: string, method: string, headersToSet: DataTable) => {
        cy.intercept(method as Method, url, (req) => {
            req.headers = {
                ...req.headers,
                ...headersToSet.rowsHash(),
            };
            req.continue();
        });
    }
);

When(`${key.when.headers.forUri}`, (url: string, headersToSet: DataTable) => {
    cy.intercept(url, (req) => {
        req.headers = {
            ...req.headers,
            ...headersToSet.rowsHash(),
        };
        req.continue();
    });
});

////////////////////////////////////////////
// VALIDATION
////////////////////////////////////////////

/**
 * Look for an element based on its content
 */
Then(`${key.then.element.withContent}`, (textContent: string) => {
    cy.uuvFindByText(textContent, {})
        .uuvFoundedElement()
        .should("exist");
});

Then(`${key.then.element.not.withContent}`, (textContent: string) => {
    cy.uuvFindByText(textContent, {})
        .should("not.exist");
});

Then(`${key.then.element.withTestId}`, (testId: string) => {
    cy.uuvFindByTestId(testId)
        .uuvFoundedElement()
        .should("exist");
});

Then(`${key.then.element.not.withTestId}`, (testId: string) => {
    cy.uuvFindByTestId(testId)
        .should("not.exist");
});

Then(`${key.then.element.withRoleAndName}`, (role: string, name: string) => {
    findWithRoleAndName(role, name);
});

Then(
    `${key.then.element.not.withRoleAndName}`,
    (role: string, name: string) => {
        notFoundWithRoleAndName(role, name);
    }
);

Then(
    `${key.then.element.withRoleAndNameAndContent}`,
    (expectedRole: string, name: string, expectedTextContent: string) => {
        findWithRoleAndNameAndContent(expectedRole, name, expectedTextContent);
    }
);

Then(
    `${key.then.element.withRoleAndNameAndContentDisabled}`,
    (expectedRole: string, name: string, expectedTextContent: string) => {
        findWithRoleAndNameAndContentDisable(expectedRole, name, expectedTextContent);
    }
);

Then(
    `${key.then.element.withRoleAndNameAndContentEnabled}`,
    (expectedRole: string, name: string, expectedTextContent: string) => {
        findWithRoleAndNameAndContentEnable(expectedRole, name, expectedTextContent);
    }
);

Then(`${key.then.element.withAriaLabel}`, (expectedAriaLabel: string) => {
    cy.uuvFindByLabelText(expectedAriaLabel, {})
        .uuvFoundedElement()
        .should("exist");
});

Then(`${key.then.element.not.withAriaLabel}`, (expectedAriaLabel: string) => {
  return cy.uuvFindByLabelText(expectedAriaLabel, {})
      .should("not.exist");
});

Then(
    `${key.then.element.withAriaLabelAndContent}`,
    (expectedAriaLabel: string, expectedTextContent: string) => {
        cy.uuvFindByLabelText(expectedAriaLabel, {})
            .uuvFoundedElement()
            .should("exist")
            .then((response) => {
                assert.equal(response.length, 1);
                assertTextContent(response, expectedTextContent);
            });
    }
);

Then(`${key.then.wait.mock}`, (name: string) => {
    return cy.wait([`@${name}`]);
});

Then(`${key.then.wait.milliSeconds}`, (ms: number) => {
    return cy.wait(ms);
});

Then(
    `${key.then.list.withNameAndContent}`,
    (expectedListName: string, expectedElementsOfList: DataTable) => {
        cy.uuvFindByRole("list", {name: expectedListName})
            .uuvFoundedElement()
            .should("exist")
            .within(() => {
                return cy.uuvFindAllByRole("listitem", {}).then((listitem) => {
                    let foundedElement: any[] = [];
                    for (let i = 0; i < listitem.length; i++) {
                        foundedElement.push([listitem[i].textContent]);
                    }
                    assert.equal(listitem.length, expectedElementsOfList.raw().length);
                    assert.deepEqual(
                        foundedElement,
                        expectedElementsOfList.raw(),
                        `expected [${expectedElementsOfList.raw()}] to be [${foundedElement}]`
                    );
                });
            });
    }
);

Then(
    `${key.then.attributes.withValues}`,
    (expectedAttributeList: DataTable) => {
        return cy.uuvCheckContextFocusedElement().then((context) => {
            const elementToSelect = context.focusedElement!!;
            for (let currentIndex in expectedAttributeList.raw()) {
                const attributeName = expectedAttributeList.raw()[currentIndex][0];
                const attributeValue = expectedAttributeList.raw()[currentIndex][1];
                elementToSelect.then((response) => {
                    assert.equal(response[0].getAttribute(attributeName), attributeValue);
                });
            }
        });
    }
);

Then(
    `${key.then.a11y.check}`,
    () => {
        cy.injectAxe();
        cy.checkA11y();
});
