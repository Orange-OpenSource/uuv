import { from, map, Observable } from "rxjs";
import { A11yChecker } from "../../model";
import { AccessibilityIssue, UuvA11yResultUsecase, UuvA11yResultUsecaseLocation } from "../../model/uuv-a11y-result";
import axe from "axe-core";
import * as WcagHelper from "./wcag-helper";

export class WcagChecker implements A11yChecker {
    protected constructor(readonly url: string, readonly context?: axe.ElementContext) { }

    validate(name: string, script: string, location: UuvA11yResultUsecaseLocation): Observable<UuvA11yResultUsecase> {
        return from(axe.run(this.context))
            .pipe(
                map(axeResult => {
                    let issues: AccessibilityIssue[] = [];
                    [
                        ...axeResult.violations,
                        ...axeResult.incomplete
                    ].forEach(violation => {
                        issues = issues.concat(WcagHelper.fromAxeToUvvA11yIssue(violation));
                    });
                    return {
                        name,
                        script,
                        location,
                        result: {
                            date: (new Date()).getTime(),
                            issues
                        }
                    };
                })
            );
    }

}
