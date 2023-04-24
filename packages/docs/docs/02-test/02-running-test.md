import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Running tests

## Opening runner

:::tip
- Pour le runner `Cypress` modifier l'url, changer le paramètre `e2e.baseUrl` dans le fichier `uuv/cypress.config.ts` afin de renseigner l'url
cible.
- [WIP] Pour le runner `Plawright` modifier l'url, changer le paramètre `e2e.baseUrl` dans le fichier `uuv/cypress.config.ts` afin de renseigner l'url
    cible.
:::

From powershell or cmd terminal **in non-administrator mode** :

<Tabs>
<TabItem value="Npm" label="Npm">

```shell
npm run uuv open
```

</TabItem>
<TabItem value="Yarn" label="Yarn">

```shell
yarn uuv open
```

</TabItem>
</Tabs>

## Exécution des tests E2E depuis la console

From powershell or cmd terminal **in non-administrator mode** :


<Tabs>
<TabItem value="Npm" label="Npm">

```shell
npm run uuv e2e
```

With arguments

```shell
npm run uuv e2e -- --browser=edge --env="{'TAGS':'@mobile'}" --generateHtmlReport
```

</TabItem>
<TabItem value="Yarn" label="Yarn">

```shell
yarn uuv e2e
```

With arguments

```shell
yarn uuv e2e -- --browser=edge --env="{'TAGS':'@mobile'}" --generateHtmlReport
```

</TabItem>
</Tabs>

### Cypress
:::tip
To modify the BASE_URL in E2E mode, simply set the environment variable :

<Tabs>
<TabItem value="Windows" label="Windows">

```shell
set CYPRESS_BASE_URL=http://localhost:4200
```

</TabItem>
<TabItem value="Shell" label="Shell">

```shell
export CYPRESS_BASE_URL=http://localhost:4200
```

</TabItem>
</Tabs>
:::

#### Arguments

| Nom     | Description                                                                                                   | Valeur                                                                                                                                                                                                                                                                                 |
|---------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `browser` | Target browser                                                                                                | `chrome` / `edge` / `firefox` / `electron`                                                                                                                                                                                                                                             |
| `env` | Environment variables                                                                                         | Json object containing the properties: <br/> - `TAGS` : To target the [cucumber tags](https://cucumber.io/docs/cucumber/api/?lang=javascript#tags) <br/> - `...` : All [possible properties](https://docs.cypress.io/guides/references/configuration#Global) for cypress |
| `generateHtmlReport` | When this option is present, an html report of the executed tests will be generated here : `./reports/e2e/html/` | N/A                                                                                                                                                                                                                                                                                    |


### Playwright
WIP