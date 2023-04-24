import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Exécution des tests

## Ouverture du Runner

:::tip
- Pour le runner `Cypress` modifier l'url, changer le paramètre `e2e.baseUrl` dans le fichier `uuv/cypress.config.ts` afin de renseigner l'url
cible.
- [WIP] Pour le runner `Plawright` modifier l'url, changer le paramètre `e2e.baseUrl` dans le fichier `uuv/cypress.config.ts` afin de renseigner l'url
    cible.
:::

Depuis powershell ou un terminal cmd **en mode non-administrateur** :

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

Depuis powershell ou un terminal cmd **en mode non-administrateur** :


<Tabs>
<TabItem value="Npm" label="Npm">

```shell
npm run uuv e2e
```

Avec des arguments

```shell
npm run uuv e2e -- --browser=edge --env="{'TAGS':'@mobile'}" --generateHtmlReport
```

</TabItem>
<TabItem value="Yarn" label="Yarn">

```shell
yarn uuv e2e
```

Avec des arguments

```shell
yarn uuv e2e -- --browser=edge --env="{'TAGS':'@mobile'}" --generateHtmlReport
```

</TabItem>
</Tabs>

### Cypress
:::tip
Pour modifier la BASE_URL en mode E2E, il suffit de positionner la variable d'environnement :

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

| Nom     | Description                                                                                                   | Valeur                                                                                                                                                                                                                                                                               |
|---------|---------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `browser` | Navigateur cible                                                                                              | `chrome` / `edge` / `firefox` / `electron`                                                                                                                                                                                                                                           |
| `env` | Variable d'environnement                                                                                      | Objet json contenant les propriétés: <br/> - `TAGS` : Pour cibler des [tags cucumber](https://cucumber.io/docs/cucumber/api/?lang=javascript#tags) <br/> - `...` : L'ensemble des [propriétés possible pour cypress](https://docs.cypress.io/guides/references/configuration#Global) |
| `generateHtmlReport` | Lorsque cette option est présente, un rapport html des tests éxécutés sera généré içi : `./reports/e2e/html/` | N/A                                                                                                                                                                                                                                                                                  |


### Playwright
WIP