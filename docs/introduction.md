# Introduction

Docker est un outil qui permet de créer des environnements de travail identiques sur toutes les machines. Que tu sois sous Windows, Linux ou macOS, tu peux lancer une application exactement de la même façon, sans te soucier de l'installation ou des différences entre les systèmes.

## Pourquoi utiliser Docker ?

Avant Docker, on utilisait souvent des **machines virtuelles** pour simuler un environnement. Mais une machine virtuelle, c’est lourd parce que :

- elle simule un ordinateur entier,
- elle consomme beaucoup de RAM et de puissance,
- et elle peut être lente à démarrer.

Docker, lui, est beaucoup plus **léger** et **rapide**. Il utilise le système de ton ordinateur (surtout efficace sous Linux), mais isole bien les applications comme s’il s’agissait de petits "mini-ordinateurs".  
Sous Windows, il faut juste activer **WSL** (Windows Subsystem for Linux) pour que ça fonctionne bien.

## Docker = console de jeu

On peut imaginer Docker comme une **console de jeu** :

- Une **image Docker**, c’est comme un **disque de jeu** : un fichier prêt à l’emploi.
- Un **conteneur**, c’est quand tu lances ce jeu dans la console.

Tu peux partager ce disque avec d’autres personnes, et elles pourront jouer exactement au même jeu, avec les mêmes réglages.

## Les avantages de Docker

- **Flexible** : tu peux tout transformer en conteneur, il n'y a pas de restriction.
- **Léger** : ça dépend de la personne qui crée le conteneur mais pas besoin d’un système complet à chaque fois.
- **Portable** : que ce soit sur son pc ou celui de quelqu’un d’autre ça fonctionne (c'est le point le plus important).
- **Auto suffisant** : chaque conteneur est indépendant, il ne casse rien sur ta machine.
- **Scalable** : sur la partie mise en production (avec Docker swarm, Kubernetes), possible de dupliquer le nombre de fois où on a notre app.
- **Sécurisé** : les processus sont bien isolés.
- **Auto documenté** : le `Dockerfile` est suffisant pour décrire l'app et ses dépendances.

## Et pour l’école ?

Dans un contexte scolaire, Docker est super pratique.  
Tout le monde utilise **exactement la même configuration**, donc plus de problème du genre "ça marche chez moi mais pas chez toi".  
Chaque étudiant a un environnement prêt à coder, avec les bons outils et les bonnes versions.
