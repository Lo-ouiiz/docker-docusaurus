# Structure

Le `Dockerfile` est un fichier texte qui décrit comment construire une image Docker. C’est une recette pour créer un environnement de travail reproductible, sur n’importe quelle machine.

## Exemple simple

```Dockerfile
FROM node:18
WORKDIR /app
COPY . .
RUN npm install
EXPOSE 3000
CMD ["npm", "start"]
```

Décomposons chaque instruction.

## FROM

```Dockerfile
FROM node:18
```

Indique l’image de base utilisée. Elle contient déjà un système d’exploitation et certains outils installés.

- `node:18` signifie une image officielle avec Node.js version 18.
- On peut aussi utiliser des variantes comme `alpine` (très légère) ou `latest` (dernière version disponible).
- Ces images sont généralement récupérées depuis [Docker Hub](https://hub.docker.com), le registre officiel d’images Docker. On peut y chercher des images par technologie, éditeur, ou version.

## WORKDIR

```Dockerfile
WORKDIR /app
```

Définit le dossier de travail dans l’image. Il sera créé s’il n’existe pas. Toutes les commandes suivantes (`COPY`, `RUN`, etc.) s’exécuteront dans ce dossier.

## COPY

```Dockerfile
COPY . .
```

Copie les fichiers du projet local dans le conteneur.

- Le premier `.` correspond au dossier local actuel.
- Le deuxième `.` correspond au dossier de travail défini plus haut.

## RUN

```Dockerfile
RUN npm install
```

Exécute une commande lors de la construction de l’image. Typiquement utilisé pour installer les dépendances ou compiler le projet.

## EXPOSE

```Dockerfile
EXPOSE 3000
```

Indique le port utilisé par l’application à l’intérieur du conteneur. Cela n’ouvre pas réellement le port, c’est une information déclarative utile pour d’autres outils (comme Docker Compose).

## CMD

```Dockerfile
CMD ["npm", "start"]
```

Définit la commande à lancer quand un conteneur est démarré à partir de cette image. Une seule instruction `CMD` est gardée (la dernière si plusieurs sont présentes). Il est recommandé d’utiliser la syntaxe sous forme de tableau.

## Résumé

```
Dockerfile
│
├── FROM       # Image de base
├── WORKDIR    # Dossier de travail
├── COPY       # Copie des fichiers
├── RUN        # Commandes d'installation
├── EXPOSE     # Port utilisé
└── CMD        # Lancement de l'app
```

Ce fichier suffit à décrire complètement l’environnement d’exécution d’une application. Il est auto-documentant et peut être partagé pour garantir que tout le monde utilise la même configuration.
