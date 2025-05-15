# Utiliser Docker sous Windows

Docker fonctionne principalement sur Linux, car il utilise des fonctionnalités du noyau Linux. Sous Windows, Docker nécessite donc quelques adaptations pour fonctionner correctement.

## Virtualisation et WSL2

Pour faire tourner Docker sur Windows, il faut activer la virtualisation matérielle dans le BIOS de sa machine. Cette étape est indispensable pour utiliser Docker efficacement.

Depuis Windows 10, Docker utilise le **Windows Subsystem for Linux 2 (WSL2)**, une couche qui permet d’exécuter un vrai noyau Linux directement dans Windows. C’est grâce à WSL2 que Docker peut fonctionner presque nativement sur Windows.

## Installer Docker Desktop

La façon la plus simple d’utiliser Docker sous Windows est d’installer **Docker Desktop**. Ce logiciel inclut tout ce qu’il faut pour lancer Docker, et utilise WSL2 en arrière-plan.

Lors de l’installation, Docker Desktop demandera d’activer la virtualisation si ce n’est pas déjà fait. Il peut aussi aider à installer WSL2.

## Particularités et conseils

- Sur Windows, Docker ne fonctionne pas directement sur l’OS hôte comme sous Linux, mais via une machine virtuelle légère gérée par WSL2.
- Il est important que la virtualisation soit activée dans le BIOS (souvent appelée Intel VT-x ou AMD-V).
- Si on utilise une version de Windows antérieure à Windows 10, l’expérience Docker sera plus limitée.
- Pour utiliser Docker dans un terminal, il est recommandé d’utiliser une console WSL2 ou PowerShell avec Docker Desktop lancé.

## Conclusion

Docker sur Windows fonctionne très bien depuis l’arrivée de WSL2, mais nécessite de s’assurer que la virtualisation est activée et que Docker Desktop est installé. Cela permet d’avoir une expérience Docker proche de celle sous Linux.
