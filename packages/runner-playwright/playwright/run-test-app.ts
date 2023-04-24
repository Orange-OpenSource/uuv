import http from "http";
import handler from "serve-handler/src";

let argv = require("minimist")(process.argv.slice(1));
let port = findPort(argv);

function findPort(argv: any) {
    if (argv._.length < 1) {
        return 9001;
    }
    return argv._[1];
}

const callback = () => {
    console.log("");
}
runAppTest(port, callback);

export function runAppTest(port, callback) {
    const server = http.createServer((request, response) => {
        return handler(request, response);
    });

    server.listen({port}, () => {
        console.log(`Running at http://localhost:${port}`);
        callback();
    });
}
