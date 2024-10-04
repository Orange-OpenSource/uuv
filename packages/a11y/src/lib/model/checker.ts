import { Observable } from "rxjs";
import { A11yResult } from "./result";
import { UuvA11yResultUsecase, UuvA11yResultUsecaseLocation } from "./uuv-a11y-result";

export interface A11yChecker {
    validate(name: string, script: string, location: UuvA11yResultUsecaseLocation): Observable<A11yResult | UuvA11yResultUsecase>;
}
