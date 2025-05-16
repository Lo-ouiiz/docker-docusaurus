# Image et Conteneur

Quand on découvre Docker, on entend souvent parler d'**images** et de **conteneurs**. Ces deux notions sont liées, mais bien différentes. Voici une explication simple.

## L'image Docker

Une **image Docker**, c’est un **modèle figé**, un peu comme une **photo d’un disque dur** contenant :

- un système de fichiers,
- et des instructions pour démarrer une app

On peut partager une image, la versionner, la stocker sur Docker Hub, et s’en servir pour créer un ou plusieurs conteneurs.

**On peut dire :**

> Une image, c’est le _template_, le modèle de base.

## Le conteneur Docker

Un **conteneur**, c’est **l’exécution d’une image**. Quand on "lance" une image, Docker crée un conteneur :

- il ajoute une couche en écriture au-dessus de l’image (pour les modifications),
- il isole l’application dans un environnement indépendant,
- il peut être arrêté, redémarré, supprimé sans toucher à l’image d’origine.

**On peut dire :**

> Un conteneur, c’est _l’image en train de tourner_.

## Analogie de la console

Pour bien visualiser, on peut penser à une **console de jeux vidéo** :

```
Image       = la cartouche de jeu (contenu figé, qu'on peut reproduire)
Conteneur   = la partie qu'on est en train de jouer (active, temporaire, qu'on peut modifier)
```

On peut prêter la cartouche à quelqu’un d’autre, il pourra lancer sa propre partie (conteneur) à partir de la même image.

## Résumé

|                    | Image                          | Conteneur                        |
| ------------------ | ------------------------------ | -------------------------------- |
| Nature             | Fichier figé                   | Instance active et modifiable    |
| Créée à partir de  | Dockerfile                     | Image                            |
| Peut être partagée | Oui                            | Non (lié à la machine locale)    |
| État               | Figé                           | Peut changer                     |
| Utilisation        | Modèle                         | Application en cours d'exécution |
| Nombre             | 1 image → plusieurs conteneurs |                                  |
