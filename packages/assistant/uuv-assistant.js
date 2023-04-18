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

const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.
var argv = require('minimist')(process.argv.slice(2));

(async () => {
  const browser = await firefox.launch({headless: false});
  const page = await browser.newPage();
  await page.addInitScript({
    path: './build/static/js/main.51b78c36.js'
  });
  await page.addInitScript({
    path: '../chrome-extension/content-script.js'
  });

  await page.goto(argv.targetUrl);

  await page.addStyleTag({
    path: './build/static/css/main.b873c13a.css'
  });
  //await browser.close();
})();
