#language: fr
Fonctionnalité: Dictionnaire français de phrases de base utilisant playwright
  Contexte:
    Etant donné que je visite l'Url "http://localhost:9002/tests/test-app"

  Scénario: key.given.within.selector
    Alors je vais à l'intérieur de l'élément ayant pour sélecteur '[data-testid="fieldset"]'
    Alors je vais à l'intérieur de l'élément ayant pour sélecteur '#fname'
    Et je dois voir un élément qui contient "John"
#    Et je dois voir les attributs avec valeurs suivantes
#      | class | fname-class |
    Et je reinitialise le contexte