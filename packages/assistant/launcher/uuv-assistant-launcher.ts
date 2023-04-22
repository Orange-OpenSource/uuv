#!/usr/bin/env node

import {UuvAssistant} from "./index";

console.log('UUV Assistant starting...');
new UuvAssistant().start().then(() => {
    console.log('UUV Assistant started');
});
