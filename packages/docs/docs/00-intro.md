# Concepts

La librairie `@nobelisation/uuv` (User centric Usecases Validator) est un écosystème qui simplifie l'écriture de tests
End to End dans une approche BDD et du point de vue d'utilisateur final.

## Le problème

La mise en place de tests de logiciels automatisés est une pratique de plus en plus répandue. Cela ajoute un meilleur
niveau de qualité sur le code d’une application par la vérification de la non-regression ou encore la validation des
scénarios d'utilisation.

La typologie de `test End to End` (de bout en bout) est une technique utilisée pour vérifier si une application (web,
mobile...) se comporte comme prévu, du début à la fin. Elle consiste à vérifier que l’utilisateur final puisse achever
les principaux scénarios d’utilisation de l’application.

Contrairement au `test unitaire` qui a pour seul but de verifier le comportement d’une fonction, ou
au `test d'intégration` qui consiste à faire interagir plusieurs modules de l’application entre eux afin de voir leur
bonne coopération, Le `test End to End` permet de vérifier depuis un navigateur (par exemple pour les applications web)
le comportement de votre application d'après un ensemble de scénarios d'utilisation.

> Lors des `test E2E`, les validations consistent la plupart du temps à vérifier les éléments restitués à l'utilisateur
> via le navigateur web ([DOM](https://developer.mozilla.org/fr/docs/Web/API/Document_Object_Model))

Dès lors, plusieurs questions complémentaires se posent :

- **Comment exprimer clairement des scénarios d'utilisation ?**
- **Pour les applications omnicanales, comment faire pour vérifier votre application sur différents navigateurs et
  terminaux ?**
- **Comment effectuer des vérifications de DOM pertinents en gardant un point de vue utilisateur ?**

## Notre solution

Pour répondre aux problématiques ci-dessus et bien d'autres, notre solution est de mettre en place un écosystème
cohérent s'appuyant sur des outils qui sont des références dans leur domaine.

Ainsi, l'expression des scénarios d'utilisation se fait dans un langage compréhensible par l'utilisateur grâce
à `Cucumber`. Nous avons également inclus l'outil `Cypress` comme moteur exécution pour sa facilité de mise en œuvre, sa
prise en charge de multiples environnements d'exécution. Pour finir, les vérifications dans le DOM seront effectués en
s'appuyant sur les [rôles et attributs accessibles](https://www.w3.org/TR/accname-1.1/) de vos composants, cela est
rendu possible grâce au framework `Testing Library`.

## Ecosystème

Les outils majeurs embarqués sont les suivants :<br/>

- ### [Cypress](https://www.cypress.io/)
  > *Cypress est un framework JS de tests End to End. C’est un outil open source permettant de mettre facilement en
  place ces tests d’applications utilisant React ou des frameworks JavaScript comme Vue, Angular, Elm et bien
  d’autres.*<br/>
- ### [Cucumber](https://cucumber.io/)
  > *Cucumber est un framework pour l’implémentation de scénarios de type BDD (Behavior-Driven-Development).*<br/>
- ### [Testing Library](https://testing-library.com/docs/)
  > *Testing Library est un framework JS qui permet d'effectuer des tests d'interface web d'un point de vue utilisateur
  en s'appuyant sur le visuel et [l'accessibilité](https://russmaxdesign.github.io/html-elements-names/).*
- ### [Axe Core](https://github.com/dequelabs/axe-core)
  > *Axe est un moteur de test d'accessibilité pour les sites Web et autres interfaces utilisateur HTML. Rapide, sécurisé, et léger,
  > il a été conçu pour s'intégrer de manière transparente à tout environnement de test existant afin d'automatiser les tests d'accessibilité parallèlement aux tests fonctionnels réguliers.*
