import { Query } from "./00-query";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const $ = require("jquery/dist/jquery.min");

export class ByTagQuery implements Query {
    constructor(readonly selectors: string[]) {
    }

    execute(): HTMLElement[] {
        return $(this.selectors.join(",")).toArray();
    }

    getSelector(): string {
        return `${this.selectors}`;
    }
}
