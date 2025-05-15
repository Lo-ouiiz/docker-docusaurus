# Commandes utiles

Voici les principales commandes à connaître avec Docker Compose.
Elles permettent de gérer toute une stack multi-conteneurs sans devoir exécuter plusieurs `docker run` manuels.

---

## Démarrer les conteneurs

```bash
docker-compose up -d
```

- Démarre tous les services définis dans `docker-compose.yml`
- `-d` = mode détaché (en arrière-plan)

---

## Voir les conteneurs en cours

```bash
docker-compose ps
```

- Affiche l’état des services

---

## Arrêter les conteneurs

```bash
docker-compose stop
```

- Stoppe tous les services sans les supprimer

---

## Supprimer tous les conteneurs, réseaux et volumes

```bash
docker-compose down
```

- Nettoie complètement la stack

---

## Voir les logs

```bash
docker-compose logs -f --tail 5
```

- Affiche les logs de tous les services
- `--tail 5` = les 5 dernières lignes
- `-f` = suivre les logs en direct

---

## Vérifier la configuration

```bash
docker-compose config
```

- Valide la syntaxe et affiche le fichier YAML final interprété
