# Français 
:::caution
Pensez bien à rajouter `#language: fr` en entête de votre fichier feature.
:::


## Etant donné que
### je redimensionne la fenêtre à la vue {string}
> Configure les dimensions de la fenêtre avec à un des préréglages définit par Cypress: https://docs.cypress.io/api/commands/viewport#Preset

### je redimensionne la fenêtre avec une largeur de {int} px et une longueur de {int} px
> Configure les dimensions de la fenêtre à la largeur et la longueur spécifiées

## Quand
### je clique
> Déclenche un click sur l'élément sélectionné

### je saisie le(s) header(s) pour l'Uri {string} et la methode {string}
> Positionne un ou plusieurs headers à la requête http indiquée et uniquement pour la méthode Http (GET / POST / etc...) passée en paramètre

### je saisie le(s) header(s) pour l'Uri {string}
> Positionne un ou plusieurs headers à la requête http indiquée

### je reinitialise le contexte
> Supprime l'élément sélectionné et le timeout du contexte

### je positionne le timeout à {int} secondes
> Positionne le timeout (en milliseconde) pour la recherche des éléments dans le dom

### je saisie le(s) mot(s) {string}
> Saisit de la phrase passée en paramètre (utile par exemple de remplir un champ de formulaire)

### je visite l'Url {string}
> Navigue vers l'Uri passé en paramètre (url complète étant constituée de la BASE_URL + Uri) ou navigue vers l'Url si ça commence par http:// ou https://

### je vais à l'intérieur de l'élément ayant pour aria-label {string}
> Sélectionne l'élément dont l'aria-label est spécifié

### je vais à l'intérieur de l'élément ayant pour sélecteur {string}
> Sélectionne l'élément dont le sélecteur est spécifié

### je vais à l'intérieur de l'élément ayant pour rôle {string} et pour nom {string}
> Sélectionne l'élément dont le [rôle accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

### je vais à l'intérieur de l'élément ayant pour testId {string}
> Sélectionne l'élément dont l'attribut data-testId est spécifié

### je simule une requête {} sur l'uri {string} nommée {string} avec le contenu suivant {}
> Simule une réponse d'API avec un contenu spécifique

### je simule une requête {} sur l'uri {string} nommée {string} avec le fichier suivant {}
> Simule une réponse d'API avec un fichier spécifique ayant pour extension .json, .js, .coffee, .html, .txt, .csv, .png, .jpg, .jpeg, .gif, .tif, .tiff, .zip

### je simule une requête {} sur l'uri {string} nommée {string} avec le code http {int}
> Simule une réponse d'API avec un code http spécifique

## Alors
### je dois voir les attributs avec valeurs suivantes
> Vérifie des attributs Html de l'élément sélectionné

### je dois voir un élément ayant pour aria-label {string} et pour contenu {string}
> Vérifie qu'un élément Html existe avec l'attribut aria-label et le contenu spécifiés

### je dois voir un élément ayant pour aria-label {string}
> Vérifie qu'un élément Html existe avec l'attribut aria-label spécifié

### je dois voir un élément qui contient {string}
> Vérifie qu'un élément Html existe avec le contenu spécifié

### 'je dois voir un élément ayant pour sélecteur {string}'
> Vérifie qu'un élément Html existe avec le sélecteur spécifié

### je dois voir un élément avec le rôle {string} et le nom {string} et pour contenu {string} inactif
> Vérifie qu'un élément Html existe avec le [rôle accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types), le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés, et avec l'attribut disabled à true

### je dois voir un élément avec le rôle {string} et le nom {string} et pour contenu {string} actif
> Vérifie qu'un élément Html existe avec le [rôle accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types), le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés et avec l'attribut disabled à false

### je dois voir un élément avec le rôle {string} et le nom {string} et pour contenu {string}
> Vérifie qu'un élément Html existe avec le [rôle accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types), le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

### je dois voir un élément avec le rôle {string} et le nom {string}
> Vérifie qu'un élément Html existe avec le [rôle accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

### je dois voir un élément ayant pour testId {string}
> Vérifie qu'un élément Html existe avec l'attribut data-testid spécifié

### je dois voir des elements de la liste ayant pour nom {string}
> Vérifie qu'il existe une liste avec le nom et le contenu spécifiés

### je ne dois pas voir un élément qui contient {string}
> Vérifie qu'un élément Html n'existe pas avec le contenu spécifié

### je ne dois pas voir un élément ayant pour testId {string}
> Vérifie qu'un élément Html n'existe pas avec l'attribut data-testid spécifié

### je ne dois pas voir un élément avec le rôle {string} et le nom {string}
> Vérifie qu'un élément Html n'existe pas avec le [rôle accessible](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles#aria_role_types) et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

### je ne dois pas voir un élément ayant pour aria-label {string}
> Vérifie qu'un élément Html n'existe pas avec l'attribut aria-label spécifié

### je dois consommer le bouchon nommé {string}
> Vérifie qu'un bouchon nommé ait bien été consommé

### j'attends {int} ms
> Attends un nombre de millisecondes

### je ne dois pas avoir de problèmes d'accessibilité
> Vérifie que sur la page courante il n'y a aucune [erreur d'accessibilité](https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md)

## Par rôle
### alert
#### je vais à l'intérieur de alerte nommé(e) {string}
> Sélectionne l'élément ayant le rôle alert et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) alerte nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle alert et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) alerte nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle alert et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) alerte nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle alert, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) alerte nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle alert, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) alerte nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle alert, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### alertdialog
#### je vais à l'intérieur de dialogue d'alerte nommé(e) {string}
> Sélectionne l'élément ayant le rôle alertdialog et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) dialogue d'alerte nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle alertdialog et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) dialogue d'alerte nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle alertdialog et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) dialogue d'alerte nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle alertdialog, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) dialogue d'alerte nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle alertdialog, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) dialogue d'alerte nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle alertdialog, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### application
#### je vais à l'intérieur de application nommé(e) {string}
> Sélectionne l'élément ayant le rôle application et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) application nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle application et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) application nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle application et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) application nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle application, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) application nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle application, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) application nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle application, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### article
#### je vais à l'intérieur de article nommé(e) {string}
> Sélectionne l'élément ayant le rôle article et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) article nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle article et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) article nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle article et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) article nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle article, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) article nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle article, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) article nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle article, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### banner
#### je vais à l'intérieur de bannière nommé(e) {string}
> Sélectionne l'élément ayant le rôle banner et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) bannière nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle banner et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) bannière nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle banner et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) bannière nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle banner, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) bannière nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle banner, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) bannière nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle banner, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### button
#### je vais à l'intérieur de bouton nommé(e) {string}
> Sélectionne l'élément ayant le rôle button et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) bouton nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle button et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) bouton nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle button et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) bouton nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle button, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) bouton nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle button, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) bouton nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle button, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### cell
#### je vais à l'intérieur de cellule nommé(e) {string}
> Sélectionne l'élément ayant le rôle cell et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) cellule nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle cell et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) cellule nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle cell et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) cellule nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle cell, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) cellule nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle cell, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) cellule nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle cell, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### checkbox
#### je vais à l'intérieur de case à cocher nommé(e) {string}
> Sélectionne l'élément ayant le rôle checkbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) case à cocher nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle checkbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) case à cocher nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle checkbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) case à cocher nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle checkbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) case à cocher nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle checkbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) case à cocher nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle checkbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### columnheader
#### je vais à l'intérieur de en-tête de colonne nommé(e) {string}
> Sélectionne l'élément ayant le rôle columnheader et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) en-tête de colonne nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle columnheader et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) en-tête de colonne nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle columnheader et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) en-tête de colonne nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle columnheader, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) en-tête de colonne nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle columnheader, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) en-tête de colonne nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle columnheader, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### combobox
#### je vais à l'intérieur de boîte à choix nommé(e) {string}
> Sélectionne l'élément ayant le rôle combobox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) boîte à choix nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle combobox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) boîte à choix nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle combobox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) boîte à choix nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle combobox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) boîte à choix nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle combobox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) boîte à choix nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle combobox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### command
#### je vais à l'intérieur de commande nommé(e) {string}
> Sélectionne l'élément ayant le rôle command et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) commande nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle command et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) commande nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle command et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) commande nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle command, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) commande nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle command, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) commande nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle command, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### comment
#### je vais à l'intérieur de commentaire nommé(e) {string}
> Sélectionne l'élément ayant le rôle comment et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) commentaire nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle comment et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) commentaire nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle comment et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) commentaire nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle comment, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) commentaire nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle comment, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) commentaire nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle comment, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### complementary
#### je vais à l'intérieur de complémentaire nommé(e) {string}
> Sélectionne l'élément ayant le rôle complementary et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) complémentaire nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle complementary et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) complémentaire nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle complementary et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) complémentaire nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle complementary, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) complémentaire nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle complementary, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) complémentaire nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle complementary, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### composite
#### je vais à l'intérieur de composite nommé(e) {string}
> Sélectionne l'élément ayant le rôle composite et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) composite nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle composite et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) composite nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle composite et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) composite nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle composite, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) composite nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle composite, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) composite nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle composite, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### contentinfo
#### je vais à l'intérieur de contentinfo nommé(e) {string}
> Sélectionne l'élément ayant le rôle contentinfo et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) contentinfo nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle contentinfo et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) contentinfo nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle contentinfo et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) contentinfo nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle contentinfo, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) contentinfo nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle contentinfo, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) contentinfo nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle contentinfo, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### definition
#### je vais à l'intérieur de définition nommé(e) {string}
> Sélectionne l'élément ayant le rôle definition et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) définition nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle definition et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) définition nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle definition et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) définition nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle definition, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) définition nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle definition, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) définition nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle definition, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### dialog
#### je vais à l'intérieur de dialogue nommé(e) {string}
> Sélectionne l'élément ayant le rôle dialog et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) dialogue nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle dialog et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) dialogue nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle dialog et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) dialogue nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle dialog, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) dialogue nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle dialog, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) dialogue nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle dialog, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### directory
#### je vais à l'intérieur de répertoire nommé(e) {string}
> Sélectionne l'élément ayant le rôle directory et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) répertoire nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle directory et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) répertoire nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle directory et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) répertoire nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle directory, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) répertoire nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle directory, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) répertoire nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle directory, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### document
#### je vais à l'intérieur de document nommé(e) {string}
> Sélectionne l'élément ayant le rôle document et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) document nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle document et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) document nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle document et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) document nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle document, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) document nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle document, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) document nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle document, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### feed
#### je vais à l'intérieur de flux nommé(e) {string}
> Sélectionne l'élément ayant le rôle feed et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) flux nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle feed et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) flux nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle feed et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) flux nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle feed, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) flux nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle feed, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) flux nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle feed, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### figure
#### je vais à l'intérieur de figure nommé(e) {string}
> Sélectionne l'élément ayant le rôle figure et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) figure nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle figure et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) figure nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle figure et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) figure nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle figure, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) figure nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle figure, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) figure nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle figure, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### form
#### je vais à l'intérieur de formulaire nommé(e) {string}
> Sélectionne l'élément ayant le rôle form et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) formulaire nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle form et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) formulaire nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle form et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) formulaire nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle form, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) formulaire nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle form, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) formulaire nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle form, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### generic
#### je vais à l'intérieur de générique nommé(e) {string}
> Sélectionne l'élément ayant le rôle generic et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) générique nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle generic et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) générique nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle generic et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) générique nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle generic, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) générique nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle generic, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) générique nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle generic, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### grid
#### je vais à l'intérieur de grille nommé(e) {string}
> Sélectionne l'élément ayant le rôle grid et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) grille nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle grid et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) grille nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle grid et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) grille nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle grid, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) grille nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle grid, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) grille nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle grid, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### gridcell
#### je vais à l'intérieur de cellule de grille nommé(e) {string}
> Sélectionne l'élément ayant le rôle gridcell et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) cellule de grille nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle gridcell et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) cellule de grille nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle gridcell et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) cellule de grille nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle gridcell, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) cellule de grille nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle gridcell, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) cellule de grille nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle gridcell, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### group
#### je vais à l'intérieur de groupe nommé(e) {string}
> Sélectionne l'élément ayant le rôle group et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) groupe nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle group et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) groupe nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle group et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) groupe nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle group, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) groupe nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle group, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) groupe nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle group, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### heading
#### je vais à l'intérieur de titre nommé(e) {string}
> Sélectionne l'élément ayant le rôle heading et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) titre nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle heading et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) titre nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle heading et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) titre nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle heading, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) titre nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle heading, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) titre nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle heading, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### img
#### je vais à l'intérieur de image nommé(e) {string}
> Sélectionne l'élément ayant le rôle img et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) image nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle img et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) image nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle img et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) image nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle img, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) image nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle img, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) image nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle img, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### input
#### je vais à l'intérieur de entrée nommé(e) {string}
> Sélectionne l'élément ayant le rôle input et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) entrée nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle input et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) entrée nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle input et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) entrée nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle input, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) entrée nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle input, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) entrée nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle input, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### landmark
#### je vais à l'intérieur de point de repère nommé(e) {string}
> Sélectionne l'élément ayant le rôle landmark et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) point de repère nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle landmark et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) point de repère nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle landmark et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) point de repère nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle landmark, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) point de repère nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle landmark, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) point de repère nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle landmark, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### link
#### je vais à l'intérieur de lien nommé(e) {string}
> Sélectionne l'élément ayant le rôle link et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) lien nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle link et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) lien nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle link et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) lien nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle link, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) lien nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle link, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) lien nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle link, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### list
#### je vais à l'intérieur de liste nommé(e) {string}
> Sélectionne l'élément ayant le rôle list et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) liste nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle list et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) liste nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle list et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) liste nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle list, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) liste nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle list, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) liste nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle list, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### listbox
#### je vais à l'intérieur de boîte à liste nommé(e) {string}
> Sélectionne l'élément ayant le rôle listbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) boîte à liste nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle listbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) boîte à liste nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle listbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) boîte à liste nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle listbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) boîte à liste nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle listbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) boîte à liste nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle listbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### listitem
#### je vais à l'intérieur de élément de liste nommé(e) {string}
> Sélectionne l'élément ayant le rôle listitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) élément de liste nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle listitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) élément de liste nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle listitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) élément de liste nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle listitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) élément de liste nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle listitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) élément de liste nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle listitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### log
#### je vais à l'intérieur de log nommé(e) {string}
> Sélectionne l'élément ayant le rôle log et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) log nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle log et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) log nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle log et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) log nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle log, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) log nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle log, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) log nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle log, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### main
#### je vais à l'intérieur de principal nommé(e) {string}
> Sélectionne l'élément ayant le rôle main et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) principal nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle main et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) principal nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle main et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) principal nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle main, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) principal nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle main, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) principal nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle main, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### mark
#### je vais à l'intérieur de marque nommé(e) {string}
> Sélectionne l'élément ayant le rôle mark et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) marque nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle mark et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) marque nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle mark et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) marque nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle mark, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) marque nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle mark, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) marque nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle mark, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### math
#### je vais à l'intérieur de mathématique nommé(e) {string}
> Sélectionne l'élément ayant le rôle math et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) mathématique nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle math et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) mathématique nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle math et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) mathématique nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle math, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) mathématique nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle math, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) mathématique nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle math, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### menu
#### je vais à l'intérieur de menu nommé(e) {string}
> Sélectionne l'élément ayant le rôle menu et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) menu nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle menu et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) menu nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle menu et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) menu nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle menu, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) menu nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle menu, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) menu nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle menu, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### menubar
#### je vais à l'intérieur de menubar nommé(e) {string}
> Sélectionne l'élément ayant le rôle menubar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) menubar nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle menubar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) menubar nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle menubar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) menubar nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle menubar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) menubar nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle menubar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) menubar nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle menubar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### menuitem
#### je vais à l'intérieur de menuitem nommé(e) {string}
> Sélectionne l'élément ayant le rôle menuitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) menuitem nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle menuitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) menuitem nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle menuitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) menuitem nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle menuitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) menuitem nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle menuitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) menuitem nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle menuitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### menuitemcheckbox
#### je vais à l'intérieur de menu d'élément de boîte à choix nommé(e) {string}
> Sélectionne l'élément ayant le rôle menuitemcheckbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) menu d'élément de boîte à choix nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle menuitemcheckbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) menu d'élément de boîte à choix nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle menuitemcheckbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) menu d'élément de boîte à choix nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle menuitemcheckbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) menu d'élément de boîte à choix nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle menuitemcheckbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) menu d'élément de boîte à choix nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle menuitemcheckbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### menuitemradio
#### je vais à l'intérieur de menu d'élement de bouton radio nommé(e) {string}
> Sélectionne l'élément ayant le rôle menuitemradio et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) menu d'élement de bouton radio nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle menuitemradio et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) menu d'élement de bouton radio nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle menuitemradio et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) menu d'élement de bouton radio nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle menuitemradio, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) menu d'élement de bouton radio nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle menuitemradio, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) menu d'élement de bouton radio nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle menuitemradio, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### meter
#### je vais à l'intérieur de compteur nommé(e) {string}
> Sélectionne l'élément ayant le rôle meter et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) compteur nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle meter et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) compteur nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle meter et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) compteur nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle meter, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) compteur nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle meter, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) compteur nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle meter, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### navigation
#### je vais à l'intérieur de navigation nommé(e) {string}
> Sélectionne l'élément ayant le rôle navigation et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) navigation nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle navigation et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) navigation nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle navigation et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) navigation nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle navigation, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) navigation nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle navigation, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) navigation nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle navigation, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### none
#### je vais à l'intérieur de aucun nommé(e) {string}
> Sélectionne l'élément ayant le rôle none et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) aucun nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle none et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) aucun nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle none et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) aucun nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle none, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) aucun nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle none, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) aucun nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle none, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### note
#### je vais à l'intérieur de note nommé(e) {string}
> Sélectionne l'élément ayant le rôle note et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) note nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle note et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) note nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle note et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) note nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle note, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) note nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle note, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) note nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle note, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### option
#### je vais à l'intérieur de option nommé(e) {string}
> Sélectionne l'élément ayant le rôle option et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) option nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle option et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) option nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle option et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) option nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle option, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) option nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle option, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) option nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle option, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### presentation
#### je vais à l'intérieur de présentation nommé(e) {string}
> Sélectionne l'élément ayant le rôle presentation et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) présentation nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle presentation et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) présentation nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle presentation et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) présentation nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle presentation, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) présentation nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle presentation, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) présentation nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle presentation, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### progressbar
#### je vais à l'intérieur de barre de progression nommé(e) {string}
> Sélectionne l'élément ayant le rôle progressbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) barre de progression nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle progressbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) barre de progression nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle progressbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) barre de progression nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle progressbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) barre de progression nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle progressbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) barre de progression nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle progressbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### radio
#### je vais à l'intérieur de radio nommé(e) {string}
> Sélectionne l'élément ayant le rôle radio et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) radio nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle radio et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) radio nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle radio et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) radio nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle radio, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) radio nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle radio, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) radio nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle radio, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### radiogroup
#### je vais à l'intérieur de groupe de radios nommé(e) {string}
> Sélectionne l'élément ayant le rôle radiogroup et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) groupe de radios nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle radiogroup et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) groupe de radios nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle radiogroup et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) groupe de radios nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle radiogroup, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) groupe de radios nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle radiogroup, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) groupe de radios nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle radiogroup, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### range
#### je vais à l'intérieur de plage nommé(e) {string}
> Sélectionne l'élément ayant le rôle range et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) plage nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle range et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) plage nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle range et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) plage nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle range, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) plage nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle range, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) plage nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle range, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### region
#### je vais à l'intérieur de région nommé(e) {string}
> Sélectionne l'élément ayant le rôle region et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) région nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle region et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) région nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle region et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) région nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle region, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) région nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle region, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) région nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle region, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### roletype
#### je vais à l'intérieur de type de rôle nommé(e) {string}
> Sélectionne l'élément ayant le rôle roletype et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) type de rôle nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle roletype et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) type de rôle nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle roletype et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) type de rôle nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle roletype, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) type de rôle nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle roletype, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) type de rôle nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle roletype, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### row
#### je vais à l'intérieur de rangée nommé(e) {string}
> Sélectionne l'élément ayant le rôle row et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) rangée nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle row et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) rangée nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle row et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) rangée nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle row, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) rangée nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle row, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) rangée nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle row, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### rowgroup
#### je vais à l'intérieur de groupe de rangs nommé(e) {string}
> Sélectionne l'élément ayant le rôle rowgroup et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) groupe de rangs nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle rowgroup et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) groupe de rangs nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle rowgroup et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) groupe de rangs nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle rowgroup, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) groupe de rangs nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle rowgroup, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) groupe de rangs nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle rowgroup, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### rowheader
#### je vais à l'intérieur de en-tête de ligne nommé(e) {string}
> Sélectionne l'élément ayant le rôle rowheader et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) en-tête de ligne nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle rowheader et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) en-tête de ligne nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle rowheader et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) en-tête de ligne nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle rowheader, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) en-tête de ligne nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle rowheader, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) en-tête de ligne nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle rowheader, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### scrollbar
#### je vais à l'intérieur de barre de défilement nommé(e) {string}
> Sélectionne l'élément ayant le rôle scrollbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) barre de défilement nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle scrollbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) barre de défilement nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle scrollbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) barre de défilement nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle scrollbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) barre de défilement nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle scrollbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) barre de défilement nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle scrollbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### search
#### je vais à l'intérieur de recherche nommé(e) {string}
> Sélectionne l'élément ayant le rôle search et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) recherche nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle search et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) recherche nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle search et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) recherche nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle search, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) recherche nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle search, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) recherche nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle search, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### searchbox
#### je vais à l'intérieur de boîte de recherche nommé(e) {string}
> Sélectionne l'élément ayant le rôle searchbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) boîte de recherche nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle searchbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) boîte de recherche nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle searchbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) boîte de recherche nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle searchbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) boîte de recherche nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle searchbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) boîte de recherche nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle searchbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### section
#### je vais à l'intérieur de section nommé(e) {string}
> Sélectionne l'élément ayant le rôle section et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) section nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle section et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) section nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle section et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) section nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle section, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) section nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle section, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) section nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle section, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### sectionhead
#### je vais à l'intérieur de tête de section nommé(e) {string}
> Sélectionne l'élément ayant le rôle sectionhead et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) tête de section nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle sectionhead et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) tête de section nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle sectionhead et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) tête de section nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle sectionhead, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) tête de section nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle sectionhead, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) tête de section nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle sectionhead, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### select
#### je vais à l'intérieur de sélectionner nommé(e) {string}
> Sélectionne l'élément ayant le rôle select et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) sélectionner nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle select et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) sélectionner nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle select et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) sélectionner nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle select, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) sélectionner nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle select, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) sélectionner nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle select, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### separator
#### je vais à l'intérieur de séparateur nommé(e) {string}
> Sélectionne l'élément ayant le rôle separator et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) séparateur nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle separator et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) séparateur nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle separator et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) séparateur nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle separator, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) séparateur nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle separator, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) séparateur nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle separator, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### slider
#### je vais à l'intérieur de curseur nommé(e) {string}
> Sélectionne l'élément ayant le rôle slider et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) curseur nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle slider et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) curseur nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle slider et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) curseur nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle slider, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) curseur nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle slider, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) curseur nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle slider, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### spinbutton
#### je vais à l'intérieur de bouton rotatif nommé(e) {string}
> Sélectionne l'élément ayant le rôle spinbutton et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) bouton rotatif nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle spinbutton et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) bouton rotatif nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle spinbutton et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) bouton rotatif nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle spinbutton, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) bouton rotatif nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle spinbutton, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) bouton rotatif nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle spinbutton, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### status
#### je vais à l'intérieur de statut nommé(e) {string}
> Sélectionne l'élément ayant le rôle status et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) statut nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle status et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) statut nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle status et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) statut nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle status, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) statut nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle status, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) statut nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle status, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### structure
#### je vais à l'intérieur de structure nommé(e) {string}
> Sélectionne l'élément ayant le rôle structure et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) structure nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle structure et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) structure nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle structure et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) structure nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle structure, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) structure nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle structure, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) structure nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle structure, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### suggestion
#### je vais à l'intérieur de suggestion nommé(e) {string}
> Sélectionne l'élément ayant le rôle suggestion et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) suggestion nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle suggestion et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) suggestion nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle suggestion et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) suggestion nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle suggestion, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) suggestion nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle suggestion, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) suggestion nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle suggestion, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### switch
#### je vais à l'intérieur de interrupteur nommé(e) {string}
> Sélectionne l'élément ayant le rôle switch et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) interrupteur nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle switch et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) interrupteur nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle switch et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) interrupteur nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle switch, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) interrupteur nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle switch, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) interrupteur nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle switch, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### tab
#### je vais à l'intérieur de onglet nommé(e) {string}
> Sélectionne l'élément ayant le rôle tab et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) onglet nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle tab et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) onglet nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle tab et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) onglet nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle tab, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) onglet nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle tab, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) onglet nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle tab, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### table
#### je vais à l'intérieur de tableau nommé(e) {string}
> Sélectionne l'élément ayant le rôle table et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) tableau nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle table et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) tableau nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle table et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) tableau nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle table, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) tableau nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle table, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) tableau nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle table, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### tablist
#### je vais à l'intérieur de tablist nommé(e) {string}
> Sélectionne l'élément ayant le rôle tablist et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) tablist nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle tablist et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) tablist nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle tablist et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) tablist nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle tablist, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) tablist nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle tablist, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) tablist nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle tablist, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### tabpanel
#### je vais à l'intérieur de tabpanel nommé(e) {string}
> Sélectionne l'élément ayant le rôle tabpanel et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) tabpanel nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle tabpanel et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) tabpanel nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle tabpanel et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) tabpanel nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle tabpanel, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) tabpanel nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle tabpanel, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) tabpanel nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle tabpanel, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### term
#### je vais à l'intérieur de terme nommé(e) {string}
> Sélectionne l'élément ayant le rôle term et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) terme nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle term et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) terme nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle term et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) terme nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle term, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) terme nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle term, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) terme nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle term, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### textbox
#### je vais à l'intérieur de boîte à texte nommé(e) {string}
> Sélectionne l'élément ayant le rôle textbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) boîte à texte nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle textbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) boîte à texte nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle textbox et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) boîte à texte nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle textbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) boîte à texte nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle textbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) boîte à texte nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle textbox, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### timer
#### je vais à l'intérieur de minuterie nommé(e) {string}
> Sélectionne l'élément ayant le rôle timer et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) minuterie nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle timer et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) minuterie nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle timer et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) minuterie nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle timer, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) minuterie nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle timer, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) minuterie nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle timer, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### toolbar
#### je vais à l'intérieur de barre d'outils nommé(e) {string}
> Sélectionne l'élément ayant le rôle toolbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) barre d'outils nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle toolbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) barre d'outils nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle toolbar et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) barre d'outils nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle toolbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) barre d'outils nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle toolbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) barre d'outils nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle toolbar, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### tooltip
#### je vais à l'intérieur de infobulle nommé(e) {string}
> Sélectionne l'élément ayant le rôle tooltip et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) infobulle nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle tooltip et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) infobulle nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle tooltip et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) infobulle nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle tooltip, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) infobulle nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle tooltip, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) infobulle nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle tooltip, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### tree
#### je vais à l'intérieur de arbre nommé(e) {string}
> Sélectionne l'élément ayant le rôle tree et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) arbre nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle tree et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) arbre nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle tree et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) arbre nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle tree, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) arbre nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle tree, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) arbre nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle tree, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### treegrid
#### je vais à l'intérieur de grille d'arbre nommé(e) {string}
> Sélectionne l'élément ayant le rôle treegrid et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) grille d'arbre nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle treegrid et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) grille d'arbre nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle treegrid et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) grille d'arbre nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle treegrid, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) grille d'arbre nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle treegrid, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) grille d'arbre nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle treegrid, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### treeitem
#### je vais à l'intérieur de élément d'arbre nommé(e) {string}
> Sélectionne l'élément ayant le rôle treeitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) élément d'arbre nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle treeitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) élément d'arbre nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle treeitem et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) élément d'arbre nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle treeitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) élément d'arbre nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle treeitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) élément d'arbre nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle treeitem, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### widget
#### je vais à l'intérieur de widget nommé(e) {string}
> Sélectionne l'élément ayant le rôle widget et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) widget nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle widget et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) widget nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle widget et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) widget nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle widget, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) widget nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle widget, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) widget nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle widget, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true

### window
#### je vais à l'intérieur de fenêtre nommé(e) {string}
> Sélectionne l'élément ayant le rôle window et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) sont spécifiés

#### je dois voir un(e) fenêtre nommé(e) {string}
> Vérifie l'existence d'un élément Html ayant le rôle window et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je ne dois pas voir un(e) fenêtre nommé(e) {string}
> Vérifie l'inexistence d'un élément Html ayant le rôle window et le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) spécifiés

#### je dois voir un(e) fenêtre nommé(e) {string} et contenant {string}
> Vérifie l'existence d'un élément Html ayant le rôle window, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/) et le contenu spécifiés

#### je dois voir un(e) fenêtre nommé(e) {string} et contenant {string} inactif
> Vérifie l'existence d'un élément Html ayant le rôle window, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à false

#### je dois voir un(e) fenêtre nommé(e) {string} et contenant {string} actif
> Vérifie l'existence d'un élément Html ayant le rôle window, le [nom accessible](https://russmaxdesign.github.io/html-elements-names/), le contenu spécifiés et avec l'attribut disabled à true
