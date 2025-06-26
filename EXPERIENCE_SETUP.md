# Configuration de la section Expériences - Wellia

## 📱 Personnalisation de l'application Wellia

### 1. Ajouter les images de l'application

Placez vos captures d'écran de Wellia dans le dossier `public/img/` :
- `wellia-app.png` - Image principale de l'application
- `wellia-screenshot-1.png` - Capture d'écran 1 (optionnel)
- `wellia-screenshot-2.png` - Capture d'écran 2 (optionnel)

### 2. Mettre à jour les liens

Dans le fichier `src/Experience.js`, modifiez les liens aux lignes 29-33 :

```javascript
links: {
  appStore: "VOTRE_LIEN_APP_STORE", // Remplacez par le vrai lien App Store
  website: "VOTRE_LIEN_SITE_WEB", // Remplacez par le lien du site de présentation
  googlePlay: "VOTRE_LIEN_GOOGLE_PLAY" // À activer quand disponible
}
```

### 3. Personnaliser la description

Vous pouvez modifier la description de l'expérience ligne 14 dans `src/Experience.js` :

```javascript
description: "Votre description personnalisée de l'application Wellia..."
```

### 4. Ajouter plus d'expériences

Pour ajouter d'autres expériences, ajoutez simplement un nouvel objet dans le tableau `experiences` :

```javascript
{
  id: 2,
  title: "Nouveau Projet",
  company: "Nom de l'entreprise",
  period: "2024 - En cours",
  type: "Type de projet",
  description: "Description du projet...",
  technologies: [
    { name: "Technology", logo: "URL_du_logo" }
  ],
  achievements: [
    "Réalisation 1",
    "Réalisation 2"
  ],
  links: {
    website: "#",
    github: "#"
  },
  status: "development", // "live", "development", "coming-soon"
  image: "/img/projet.png"
}
```

### 5. Logos des technologies

Les logos utilisés actuellement :
- **React Native** : Wikipedia Commons
- **Expo GO** : GitHub officiel
- **Google Cloud** : Wikipedia Commons  
- **Supabase** : Seeklogo

Si vous avez des logos personnalisés, placez-les dans `public/img/logos/` et mettez à jour les URLs.

### 6. Statuts disponibles

- `"live"` - Projet en ligne (badge vert "EN LIGNE")
- `"development"` - En développement (badge orange "EN DÉVELOPPEMENT")
- `"coming-soon"` - Bientôt disponible (badge bleu "BIENTÔT")

### 7. Responsive Design

La section est entièrement responsive :
- Sur mobile : Disposition en colonne
- Sur desktop : Disposition en grille 2 colonnes
- Les images s'adaptent automatiquement

## 🎨 Personnalisation du design

Le composant utilise les classes CSS futuristes déjà définies dans votre portfolio :
- `.btn-futuristic` pour les boutons
- `.hologram-text` pour les titres
- Animations et effets de glow cohérents

Toutes les couleurs suivent votre palette teal/cyan existante. 