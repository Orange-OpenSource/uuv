export enum UUV_TARGET_COMMAND {
    OPEN ="open",
    E2E ="e2e",
    RUN ="run"
}

export type UUVCliOptions = {
    baseUrl: string;
    command: UUV_TARGET_COMMAND;
    browser: string;
    targetTestFile: string;
    report: {
        outputDir: string,
        a11y: {
            enabled: boolean,
            outputFile: string
        },
        html: {
            enabled: boolean,
            outputDir: string
        },
        junit: {
            enabled: boolean,
            outputFile: string
        }
    },
    extraArgs: any;
}
