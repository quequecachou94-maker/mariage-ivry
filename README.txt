# Ivry Town – Escape Game (site statique)

## Contenu
- index.html : accueil + saisie nom d'équipe
- enigme-1.html : validation du mot-clé (papier)
- enigme-2.html : validation du code à 3 chiffres (mix)
- final.html : page finale (à personnaliser)
- organisateur.html : rappel & aperçu config
- config.json : TITRES + RÉPONSES ACCEPTÉES (à éditer)
- assets.css / app.js : style & logique

## Personnaliser les réponses
Ouvrez `config.json` et modifiez :
- `answers.puzzle1` (ex: ["PIZZA"])
- `answers.puzzle2` (ex: ["314"])

Les comparaisons ignorent les minuscules/majuscules et les accents.

## Hébergement
C'est un site 100% statique :
- GitHub Pages : déposer le dossier et activer Pages
- Netlify / Vercel : "deploy static"
- Hors-ligne : ouvrir index.html (certains navigateurs peuvent bloquer fetch de config.json en fichier local).
  -> Solution hors-ligne : lancer un mini serveur local (Python):
     python -m http.server 8000
  puis ouvrir http://localhost:8000

Bon jeu !
