# Docker vs Machine Virtuelle

Comme dit dans l'[introduction](./introduction.md), avant Docker, on utilisait souvent des **machines virtuelles (VM)** pour simuler des environnements complets de développement ou de production. C’était une bonne solution, mais qui avait ses limites.

Docker est une alternative plus moderne, plus légère et plus rapide. Voici les principales différences :

## La machine virtuelle

Une VM fonctionne comme un vrai ordinateur à l’intérieur de ton ordinateur. Elle contient :

- Une couche **matérielle virtuelle** (RAM, disque dur, processeur simulés),
- Un **système d’exploitation complet** (Windows, Linux, etc.),
- Et enfin, les applications.

### Inconvénients :

- **Lourd** : chaque VM prend beaucoup d’espace disque et consomme beaucoup de RAM.
- **Lent** : le démarrage prend du temps.
- **Complexe** : configurer plusieurs VMs pour qu’elles communiquent entre elles peut être difficile.
- **Performances réduites** : les ressources sont partagées et parfois mal utilisées.

## Docker, plus simple, plus léger

Docker ne simule pas un système complet. Il utilise le noyau du système hôte (ton propre OS) et isole seulement l’application et ses dépendances dans ce qu’on appelle un **conteneur**.

### Avantages :

- **Beaucoup plus léger** : pas besoin d’un OS complet, juste l’essentiel.
- **Rapide** : les conteneurs démarrent en quelques secondes.
- **Portable** : on peut l’utiliser sur n’importe quelle machine (avec Docker installé).
- **Idéal pour la mise en production** : plus facile à déployer, à reproduire et à scaler.

## En résumé

|             | Machine Virtuelle    | Docker           |
| ----------- | -------------------- | ---------------- |
| Taille      | Lourde               | Légère           |
| Démarrage   | Lent                 | Très rapide      |
| Ressources  | Beaucoup             | Peu              |
| Isolation   | Complète (OS séparé) | Processus isolés |
| Portabilité | Moyenne              | Excellente       |
| Complexité  | Élevée               | Faible           |
| Performance | Moins bonne          | Meilleure        |

### Conclusion

Docker ne remplace pas toujours une VM (par exemple pour tester un OS complet), mais dans la majorité des cas — développement, tests, déploiement — Docker est **plus rapide, plus simple et plus efficace**.
