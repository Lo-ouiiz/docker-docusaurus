# Structure d’un fichier `docker-compose.yml`

Le fichier `docker-compose.yml` permet de décrire les services Docker d’une application.  
Chaque **service** correspond à un **conteneur**.

## Exemple simple

```yaml
version: "3"
services:
  web:
    build: .
    ports:
      - "3000:3000"
  db:
    image: postgres:14
    environment:
      POSTGRES_PASSWORD: exemple
```

## Éléments clés

### `services`

Définit tous les conteneurs que Compose va gérer.

### `build`

Construit une image à partir d’un Dockerfile.

### `image`

Utilise une image déjà existante (ex : `postgres:14`).

### `ports`

Permet d’ouvrir des ports (`host:conteneur`).

### `volumes`

Partage de dossiers entre l’hôte et le conteneur, ou entre conteneurs.

```yaml
volumes:
  - ./data:/var/lib/postgresql/data
```

### `environment`

Définit des variables d’environnement accessibles dans le conteneur.

```yaml
environment:
  - POSTGRES_PASSWORD=exemple
```

### `depends_on`

Indique les dépendances entre services.

```yaml
depends_on:
  - db
```

## Réseau par défaut

Tous les services définis sont automatiquement connectés à un **réseau Docker commun**, ce qui permet à un conteneur d’en contacter un autre via son **nom de service**.

Par exemple, l’API peut accéder à la base avec `db:5432`.
