# Commandes essentielles

Voici un résumé des commandes Docker les plus utilisées pour construire, lancer et gérer des conteneurs.

---

## Construire une image

```bash
docker build . -t mon-utilisateur/mon-app
```

- `.` : indique le contexte de build (le dossier courant)
- `-t` : permet de nommer et taguer l’image (`mon-app` ici)

---

## Lancer un conteneur

```bash
docker run -p 3000:8080 -d mon-utilisateur/mon-app
```

- `-p` : mappe le port 8080 du conteneur vers le port 3000 de la machine hôte
- `-d` : exécute le conteneur en arrière-plan (mode détaché)

---

## Exécuter une commande dans un conteneur

```bash
docker exec -it <container_id> /bin/bash
```

- `-it` : ouvre un terminal interactif
- Permet d’entrer dans un conteneur en cours d’exécution

---

## Arrêter un conteneur

```bash
docker stop <container_id>
```

- Arrête proprement un conteneur actif

---

## Autres commandes utiles

**Lister les conteneurs actifs :**

```bash
docker ps
```

**Lister toutes les images :**

```bash
docker images
```

**Supprimer un conteneur :**

```bash
docker rm <container_id>
```

**Supprimer une image :**

```bash
docker rmi <image_id>
```
