# Generator Random User API

## Roadmap

- [x] Génération aléatoire d'utilisateurs via python
- [x] API pour récupérer les utilisateurs générés
- [x] Déploiement sur Vercel
- [ ] API pour récupérer un utilisateur aléatoirement
- [ ] Documentation de l'API
- [ ] Tests unitaires
- [ ] Website


## Technologies

- Next.js
- React
- TypeScript
- TailwindCSS
- Vercel
- Python

## Installation

```bash
npm install
```

Usage
npm run dev
L'application sera disponible sur http://localhost:3000

### API
L'API est disponible sur /api/users/[id.user]

Exemple de réponse :
```json
[
{
"id": 1,
"name": "John Doe",
"email": "john@doe.com"
}
]
```

### Génération des utilisateurs
Pour générer des utilisateurs, il faut lancer le script python :
```bash
python3 script/Generator-user/main.py
```
Modifier les variables dans le fichier main.py pour générer le nombre d'utilisateurs souhaités.
Les utilisateurs sont générés automatiquement et ajoutés à l'API.