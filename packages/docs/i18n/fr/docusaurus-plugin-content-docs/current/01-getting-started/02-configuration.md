import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration

## Ajout du script npm
Modifier le fichier `package.json` pour rajouter les lignes suivantes dans la section script :

```json title='package.json'
{
...
    "scripts": {
        "...
        "uuv": "uuv"
    },
  ...
}
```
### Cypress
:::caution
Cette étape n'est nécessaire que si vous avez choisi le runner `Cypress` et que vous n'arrivez pas à [exécuter normalement les tests](/docs/test/running-test).
:::
Modifier le fichier `package.json` pour rajouter les lignes suivantes dans la section script :

```json title='package.json'
{
...
    "scripts": {
        "...
        "uuv": "node node_modules/@uuv/cypress/dist/lib/uuv-cli.js"
    },
  ...
}
```

### Playwright
:::caution
Cette étape n'est nécessaire que si vous avez choisi le runner `Playwright` et que vous n'arrivez pas à [exécuter normalement les tests](/docs/test/running-test).
:::
Modifier le fichier `package.json` pour rajouter les lignes suivantes dans la section script :

```json title='package.json'
{
...
    "scripts": {
        "...
        "uuv": "node node_modules/@uuv/playwright/dist/lib/uuv-cli.js"
    },
  ...
}
```

## Mise à jour du .gitignore

Modifier le fichier `.gitignore` pour rajouter les lignes suivantes :

```gitignore title='.gitignore'
#@nobelisation/uuv
/uuv/reports
```


## (Optionnel) Ajout des types Typescripts
### Cypress
:::info
Cette étape n'est nécessaire que si vous prévoyez de rajouter vos propres [step_definitions](/docs/wordings/add-custom-step-definition).
:::
Ajouter un nouveau fichier `tsconfig.e2e.json` pour inclure les types nécessaires :

```json title='tsconfig.e2e.json'
{
  "extends": "./tsconfig.json",
  "compilerOptions": {
    "outDir": "./out-tsc/app",
    "types": [
      "cypress",
      "@testing-library/cypress",
      "@nobelisation/uuv"
    ]
  },
  "files": [
    "uuv/cypress.config.ts"
  ],
  "include": [
    "src/**/*.cy.ts"
  ]
}
```

### Playwright
WIP
