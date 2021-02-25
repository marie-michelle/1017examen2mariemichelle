# examen2vue

## Description

Examen2vue est une application de type _OnePage_ ayant pour objectif l'apprentissage académique des pratiques du développement web soit la documentation, les tests et la mise en production d'un projet. Le projet est structuré grâce au _Framework_ Vue2. L'examen2Vue est structuré à l'aide de plusieurs composants dont 6 _Views_ représentant les pages, et 6 _components_ qui composent les vues.

Le projet simule un portfolio, qui intègre un accueil, une page utilisateur détaillant le profil d'une personne, une page projet, et un formulaire contact. L'application comporte également un lien vers le portfolio officiel ainsi qu'une licence en pied de page.

# Besoins fonctionnels

On simule la connexion d'un usager avec une fonction booleenne, qui applique un changement au routing.

On propose également un mixin qui traduit les libellés du site en langue anglaise.

Un fomulaire de contact est intégré, avec une gestion basique des erreurs. Le formulaire ne soumet rien.

La navigation se fait _sans post back_, c'est à dire que le navigateur ne recharge pas chaque fois les pages du site.

### Capture écran du projet

![Image text](/src/assets/img/projet-entete.png)

## Imstallation du projet

```
npm install
```

### Pour compiler et lancer le projet:

```
npm run serve
```

### Pour compiler et minimifier pour mettre en production

```
npm run build
```

### Analyse et réparation des fichiers

```
npm run lint
```

### Configuration

Voir [Référence pour la configuration](https://cli.vuejs.org/config/).
