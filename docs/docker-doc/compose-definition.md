# Définition

Docker Compose est un outil qui permet de **décrire et lancer plusieurs conteneurs Docker** en même temps à l’aide d’un seul fichier de configuration : `docker-compose.yml`.

C’est particulièrement utile pour les applications composées de plusieurs services (ex : une API + une base de données + un front).

## Pourquoi l’utiliser ?

- Regrouper plusieurs conteneurs dans une seule configuration
- Lancer facilement l’ensemble de la stack de développement
- Automatiser la configuration (réseaux, volumes, variables)
- Reproduire la même configuration sur toutes les machines

## Exemples typiques d’utilisation

- Développement local avec une stack complète (ex : Node.js + MongoDB)
- Architecture en microservices (plusieurs API avec bases de données séparées)
- Déploiement simplifié d’une application multi-composants
