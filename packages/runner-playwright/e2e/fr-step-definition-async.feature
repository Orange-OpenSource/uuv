#language: fr
@Playwright
Fonctionnalité: French Test Step Definition

  Contexte:
    Etant donné que je simule une requête GET sur l'url "http://localhost:9001/tests/uuvFixture.png" nommée "uuvFixture" avec le fichier suivant mockUuv.jpg
    Etant donné que je simule une requête GET sur l'url "http://localhost:9001/tests/uuvBody.png" nommée "uuvBody" avec le contenu suivant "je suis le contenu"
    Etant donné que je simule une requête GET sur l'url "http://localhost:9001/tests/uuvStatus.png" nommée "uuvStatus" avec le code http 500
    Etant donné que je visite l'Url "/tests/test-app"

#  Scénario: key.when.mock.withFixture & key.then.mock.consume
#    Alors je dois consommer le bouchon nommé "uuvFixture"
#
#  Scénario: key.when.mock.withBody & key.then.mock.consume
#    Alors je dois consommer le bouchon nommé "uuvBody"
#
#  Scénario: key.when.mock.withStatusCode & key.then.mock.consume
#    Alors je dois consommer le bouchon nommé "uuvStatus"