## Authentification
- Connexion
- Déconnexion
- Vérifier le rôle de l'utilisateur

## Quiz  
- Répondre à un Quiz 
    - Afficher une question 
    - Stocker le résultat du quiz 
    - Valider la réponse de l'utilisateur
    - Afficher la réponse si erreur
- Valider un quiz 
    - Envoyer le quiz à l'api
- Reprendre le quiz en fonction de la progression de l'utilisateur
- Revenir à une question précédente

## Dashboard
- Afficher les quiz répondus avec les réponses et les scores 
- Afficher le classement des joeurs

## Hooks 

### Quiz 
Créer un quiz pour gérer le quiz:
- la validation du quiz 
- la progression
- afficher le score 

### Authentification
Utiliser un hook pour gérer la connexion des utilisateurs  
- Connexion
1. Step 1: 
Saisir son nom d'utilisateur
2. Step 2: 
Saisir le code envoyer par e-mail / Saisir le mot de passe
3. Step 3: 
Stocker les infos de l'utilisateur dans un context

- Deconnexion: 
Effacer les infos de l'utilisateur qui sont stockées 

- Récuperer les données utilisateur 

- Vérifier le rôle de l'utilisateur
