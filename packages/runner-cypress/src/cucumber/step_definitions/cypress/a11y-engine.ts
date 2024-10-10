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

import {
    A11yChecker,
    A11yReferenceEnum,
    NodeToCheckManually,
    NonCompliantNode,
    UuvA11yResult,
    UuvA11yResultUsecase,
    AccessibilityIssue,
    IssueType
} from "@uuv/a11y";
import { tap, Observable } from "rxjs";
import ObjectLike = Cypress.ObjectLike;
import $ from "jquery";
import { getA11yResultFilePath, shouldGenerateA11yReport } from "./_.common";

export const injectUvvA11y = () => {

    const fileName =
        typeof require?.resolve === "function"
            ? require.resolve("@uuv/a11y/bundle")
            : "node_modules/@uuv/a11y/bundle/uuv-a11y.bundle.js";
    cy.readFile<string>(fileName).then((source) =>
        cy.window({ log: false }).then((window) => {
            window.eval(source);
        })
    );
};

export const checkUvvA11y = (reference: A11yReferenceEnum, expectedResult?: any, isContainsMode = false) => {
    
    cy.window({ log: false })
        .then((win: any) => {
            return new Cypress.Promise(async (resolve, reject) => {
                try {
                    const url = win.location.href;
                    const rgaaChecker = getA11yCheckerForReference(win, reference, url);
                    assert.isDefined(rgaaChecker, "A11y reference not found");
                    const validation = () => (rgaaChecker?.validate(
                        Cypress.currentTest.title,
                        "empty Script",
                        {
                            file: Cypress.spec.relative,
                            column: 0,
                            line: 0
                        }
                    ) as Observable<UuvA11yResultUsecase>).toPromise();
                    const reportOfUsecase = await validation();
                    if (shouldGenerateA11yReport() && reportOfUsecase) {
                        storeA11yResult(reportOfUsecase).then(() => {
                            logAllA11yRuleResult(reference, reportOfUsecase);
                            assertWithExpectedResult(reportOfUsecase, expectedResult, isContainsMode);
                            resolve();
                        });
                    } else {
                        logAllA11yRuleResult(reference, reportOfUsecase);
                        assertWithExpectedResult(reportOfUsecase, expectedResult, isContainsMode);
                        resolve();
                    }
                } catch (error) {
                    reject(error);
                }
            });
        });
    
};

export const showUvvA11yReport = (reference: A11yReferenceEnum) => {
    const a11yReport = readA11yReport();
    const log = buildCypressLog(
        "a11y synthesis",
        reference,
        {
            reference: reference,
            nodes: a11yReport
        });
    log.finish();
};

function getA11yCheckerForReference(win: any, reference: A11yReferenceEnum, url): A11yChecker | undefined {
    let checker;
    console.log("reference", reference);
    switch (reference) {
        case A11yReferenceEnum.WCAG_WEB:
            console.log("WcagChecker");
            checker = new win.uuvA11y.WcagChecker(url);
            break;
        case A11yReferenceEnum.WCAG_ANDROID:
            break;
        case A11yReferenceEnum.WCAG_IOS:
            break;
        case A11yReferenceEnum.RGAA:
        default:
            checker = new win.uuvA11y.RgaaChecker(url);
            break;
    }
    return checker;
}

function assertWithExpectedResult(reportOfUsecase?: UuvA11yResultUsecase, expectedResult?: any, isContainsMode = false) {
    const validationFailedMessage = "A11y validation failed";
    if (expectedResult) {
        // if (!isContainsMode) {
        //     assert.deepEqual(report.summary(), expectedResult, validationFailedMessage);
        // } else {
        //     cy.wrap(report.summary())
        //         .should("containSubset", expectedResult);
        // }
        throw new Error("Not implemented");
    } else {
        assert.equal(reportOfUsecase?.result.issues.filter(issue => issue.type === IssueType.Error).length, 0, validationFailedMessage);
        assert.equal(reportOfUsecase?.result.issues.filter(issue => issue.type === IssueType.Warning).length, 0, validationFailedMessage);
    }
}

function logAllA11yRuleResult(reference: A11yReferenceEnum, reportOfUsecase?: UuvA11yResultUsecase) {
    reportOfUsecase?.result.issues.forEach(a11yIssue => {
        // logValidatingA11yRule(result.reference, ruleResult);
        logA11yRuleResult(reference, a11yIssue);
    });
}

function logA11yRuleResult(reference: A11yReferenceEnum, a11yIssue: AccessibilityIssue) {
    switch (a11yIssue.type) {
        case "error":
        case "warning":
            logNonCompliantNode(reference, a11yIssue, a11yIssue.type);
            break;
        // case A11yResultStatus.MANUAL:
        //     logNodeToCheckManually(reference, ruleResult);
        //     break;
        // case A11yResultStatus.UNKNOWN:
        //     break;
        // case A11yResultStatus.SUCCESS:
        //     break;
    }
}

function buildCypressLog(name: string, message: string, consoleLog?: ObjectLike) {
    return Cypress.log({
        name: name,
        displayName: name,
        message: message,
        consoleProps() {
            return consoleLog ? consoleLog : {};
        }
    });
}

function logNonCompliantNode(reference: A11yReferenceEnum, a11yIssue: AccessibilityIssue, type: "error" | "warning") {
    const errorNode = a11yIssue.htmlElement;
    const log = buildCypressLog(
        `${reference.toString()} error !`,
        `criteria ${a11yIssue.code} with message : ${a11yIssue.message}`,
        getConsoleDetails(a11yIssue, errorNode as any)
    );
    if (errorNode) {
        log.set({ $el: $(errorNode as any) }).snapshot();
    }
    log.error(new Error(`Validation ${type} on node: ${errorNode}`));
}

// function logNodeToCheckManually(reference: A11yReferenceEnum, ruleResult: A11yRuleResult) {
//     const nodesToCheckManually = ruleResult.getNodesToCheckManually();
//     const log = buildCypressLog(
//         `${reference.toString()} to validate manually !`,
//         `criteria ${ruleResult.rule.criterion} on ${nodesToCheckManually.length} nodes`,
//         getConsoleDetails(reference, ruleResult, nodesToCheckManually)
//     );
//     nodesToCheckManually.forEach(nodeToCheck => log.set({ $el: $(nodeToCheck.node.domNode) }).snapshot());
//     log.finish();
// }

function getConsoleDetails(a11yIssue: AccessibilityIssue, nodes: (NonCompliantNode | NodeToCheckManually)[]) {
    return {
        // Id: a11yIssue.runnerExtras.help rule.id,
        // WCAG: a11yIssue.code,
        // targetUrl: ruleResult.url,
        Criteria: a11yIssue.code,
        // "Element type": ruleResult.rule.elementType,
        Help: `${a11yIssue.runnerExtras.help}, ${a11yIssue.runnerExtras.helpUrl}`,
        // Help: ruleResult.rule.help,
        nodes: nodes
    };
}

function storeA11yResult(reportOfUsecase: UuvA11yResultUsecase): Cypress.Chainable<any> {
    reportOfUsecase.result.issues.forEach(issue => delete issue.htmlElement);
    console.log("reportOfUsecase", reportOfUsecase);
    return readA11yReport().then((report: any) => {
        console.log("report", report);
        report.app.usecases.push(reportOfUsecase);
        writeA11yReport(report);
    });
}

function readA11yReport(): Cypress.Chainable<any> {
    const filePath = getA11yResultFilePath();
    console.log("filePath", filePath);
    return cy.readFile(filePath);
}

function writeA11yReport(data: any) {
    const filePath = getA11yResultFilePath();
    return cy.writeFile(filePath, data, { flag: "w" });
}
