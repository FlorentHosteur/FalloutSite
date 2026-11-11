# Fallout — site officiel

Site statique d'une seule page (FR/EN) pour Fallout, post nuclear death metal, Aix-en-Provence.
Aucune dépendance, aucun build : HTML, CSS et JavaScript.

## Aperçu local

```sh
python3 -m http.server 8765 --bind 127.0.0.1
# puis http://127.0.0.1:8765/
```

(Ouvrir `index.html` directement ne suffit pas : le navigateur bloque les polices et le logo en `file://`.)

## Structure

- `index.html` — tout le contenu, en français
- `js/site.js` — textes anglais (`EN`), liste des concerts (`SHOWS`), galerie (`PHOTOS`), animations
- `css/site.css` — styles
- `media/` — images optimisées, affiches, miniatures vidéo, polices auto-hébergées
- `archive/2023-bandsite/` — l'ancien site, conservé tel quel

## Ajouter un concert

Dans `js/site.js`, ajouter une ligne à `SHOWS` :

```js
{ date: "2027-03-14", name: "Nom de la salle ou du festival", city: "Ville", country: { fr: "France", en: "France" }, url: "https://…", poster: "media/posters/fichier.webp" },
```

Une date future s'affiche sous « Prochaines dates » ; une fois passée, elle rejoint les dates passées toute seule.

## Langue

Français par défaut pour les navigateurs francophones, anglais sinon. Le choix du visiteur est mémorisé.
`?lang=en` ou `?lang=fr` force la langue.
