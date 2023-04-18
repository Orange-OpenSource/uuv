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

document.addEventListener("DOMContentLoaded", () => {
    console.log('content-script');

    function setSelectedElement(el) {
        alert('toto');
        console.log('tata');
    }

    window.addEventListener("load", (event) => {
        console.log("page is fully loaded");
    });

    window.addEventListener('click', (event) => {
        console.log('event.target');
        console.log(event.target);
        console.log(document.activeElement)
        //setSelectedElement(event.target);
    }, true);

    let rootElement = document.createElement('div');
    rootElement.id = 'uvv-assistant-root';
    document.body.appendChild(rootElement);
    document.dispatchEvent(new Event('UUVReadyToLoad'));
});
