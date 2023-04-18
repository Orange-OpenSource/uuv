import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# Configuration

## 1. Ajout des scripts npm :

Modifier le fichier `package.json` pour rajouter les lignes suivantes dans la section script :

```json title='package.json'
{
...
    "scripts": {
        "...
        "uuv:open": "node uuv-cli.js openCypress",
        "uuv:e2e": "node uuv-cli.js runE2ETests"
    },
  ...
}
```

## 2. Mise à jour du gitignore

Modifier le fichier `.gitignore` pour rajouter les lignes suivantes :

```gitignore title='.gitignore'
#@nobelisation/uuv
/uuv-cli.js
/uuv/reports
```

## 3. Ajout des types Typescripts

:::info
Cette étape n'est nécessaire que si vous prévoyez de rajouter vos
propres [step_definitions](/docs/wordings/add-custom-step-definition).
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
