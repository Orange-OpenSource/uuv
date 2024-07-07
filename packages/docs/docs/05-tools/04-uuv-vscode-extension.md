# UUV VS Code Extension

This extension helps you to write and execute your UUV E2E tests from Visual Studio Code. 

## Install extension
- Download [UUV E2E Tests](https://marketplace.visualstudio.com/items?itemName=e2e-test-quest.uuv-vscode-extension) extension
- Or find **"UUV"** from Extension tab, then click on `install` button.

### Execute **uuv open**
Opens the runner : find `UUV Open` vscode command.<br/>
![UUV Open](https://github.com/Orange-OpenSource/uuv/raw/HEAD/packages/vscode-extension/docs/images/uuv-open.png)

### Execute **uuv e2e**
From the `Testing view`, you can see and execute your uuv tests.<br/>
![UUV E2E](https://github.com/Orange-OpenSource/uuv/raw/HEAD/packages/vscode-extension/docs/images/uuv-e2e.png)

## Extension settings

| Parameter             | Required | Default value | Description                                                                                |
|-----------------------|----------|---------------|--------------------------------------------------------------------------------------------|
| uuv.projectHomeDir    | Yes      | `.`           | Must be the directory containing the package.json where the uuv dependency is installed    |
| uuv.useLocalScript    | No       |               | Check this box if for some reason you are unable to run **npx scripts** from your ide      |
