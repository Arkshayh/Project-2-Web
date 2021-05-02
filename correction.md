# Exécution du jeu
 * Quiz normal : bon fonctionnement, il aurait pu être utile d'uniformisé les images via CSS.
 * Quiz à réponses multiples : une alerte est déclenchée quand un mauvais nombre de réponses est coché, mais tu n'indiques pas quelles questions posent problème. Quand trop de réponses sont sélectionnées l'alerte dit quand même "pas assez de réponses".
   * Il aurait été utile de séparer les cas `>` et `<` dans ta méthode `checking`.
   * Tu aurais pu aussi à cet endroit-là ajouter des messages d'erreur dans la page directement via jQuery (en n'oubliant pas de les enlever lors de la vérification suivante !).
 * Problèmes sur le quiz WEBG2 : 
   * Tu as mis des checkbox pour toutes les questions, pas seulement celles qui ont plusieurs réponses à cocher.
   * Tu as utilisé plusieurs fois le même identifiant ; du coup certains de tes labels sont associés à la mauvaise question (par exemple pour les deux premières questions).
 * Correction de quiz OK

# Commentaire sur le code
## 4.1
 * Plutôt que de créer une méthode séparée pour les quiz à réponses multiples, il aurait été plus simple de se servir du nombre de bonnes réponses correctes pour chaque question et déterminer si on ajoute des `radiobutton` ou des `checkbox`.

# Défense
 * Souci d'images mal chargées
 * Incomplet mais bonne démarche ; tu as même résolu pour ce quiz-ci le point que j'ai soulevé ci-dessus pour le quiz WEBG2.

# Grille d'évaluation
| Critère           | Sur | Cote |
| :---------------- | :-: |:---: |
| 1.1 Mise en place |	1  |  1   |
| 1.2 Comprendre les données |	1  |  1   |
| 1.3 Formulaire choix de quiz |	2  |   2  |
| 2.1 Création de l'en-tête |	1  |  1   |
| 2.2 Création de compte à rebours |	2  |  2   |
| 3.1 Parcourir le quiz (console) |	1  |  1   |
| 3.2 Afficher le quiz |	3  |  2.5   |
| 3.3 Correction du quiz |	3  |  3   |
| 4.1 Réponses multiples |	3  |  2   |
| 4.2 Valider le quiz |	3  |  2   |
| Défense	     |    |  +0.5   |
| __Total__    | __20__ | __18__ |
