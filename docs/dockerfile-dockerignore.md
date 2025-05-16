# Le fichier `.dockerignore`

Le fichier `.dockerignore` permet d’exclure certains fichiers ou dossiers lors de la construction d’une image Docker.  
Il fonctionne de manière similaire à un fichier `.gitignore`.

Cela permet de :

- Réduire la taille de l’image
- Accélérer le build
- Éviter de copier des fichiers sensibles ou inutiles (comme des fichiers temporaires, logs, `.git`, etc.)

## Exemple de `.dockerignore`

```
node_modules
.git
.env
*.log
dist
Dockerfile
docker-compose.yml
```

Dans cet exemple :

- `node_modules` : évite de copier les dépendances locales (elles seront réinstallées dans l’image avec `RUN npm install`)
- `.git` : pas utile dans l’image
- `.env` : peut contenir des informations sensibles
- `*.log` : fichiers journaux inutiles dans un conteneur
- `dist` : si on veut tout reconstruire dans le conteneur
- `Dockerfile`, `docker-compose.yml` : pas nécessaires à l’intérieur de l’image

## Où placer le fichier

Le fichier `.dockerignore` doit être placé **à la racine du contexte de build**, c’est-à-dire **au même niveau que le Dockerfile**.

## Astuce

Un `.dockerignore` mal configuré peut faire grossir une image inutilement ou inclure des fichiers sensibles. Il est recommandé de le maintenir à jour dès que de nouveaux fichiers apparaissent dans un projet.
