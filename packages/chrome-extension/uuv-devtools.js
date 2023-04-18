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

chrome.devtools.inspectedWindow.eval("setSelectedElement($0)", { useContentScriptContext: true }, (result, exceptionInfo) => {
    console.log('result');
    console.log(result);
    console.log('exceptionInfo');
    console.log(exceptionInfo);
});
chrome.devtools.panels.create('UUV', null, '/uuv-devtools-panel.html', null);
