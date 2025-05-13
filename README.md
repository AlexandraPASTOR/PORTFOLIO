<<<<<<< HEAD
# 🌟 Portfolio – Alexandra PASTOR

Bienvenue sur mon portfolio de développeuse web !  
Ce projet met en lumière mon parcours, mes compétences, mes projets et les valeurs humaines qui me guident.

## 🎯 Objectif

Présenter mes réalisations, ma personnalité et mon évolution vers le développement web. Ce portfolio me sert également de vitrine professionnelle pour postuler à des alternances et opportunités dans le domaine du développement web (front-end et full-stack).

---

## 🛠️ Technologies utilisées

- **React** – librairie JavaScript pour construire l'interface
- **Tailwind CSS** – framework CSS pour un design responsive et moderne
- **React Router** – navigation entre les pages
- **Node.js** – environnement d'exécution JavaScript pour le développement local
- **EmailJS** – envoi de messages via le formulaire de contact
- **Vite** – pour un développement rapide et léger

---

## 📁 Structure du site

- **Accueil** : Présentation rapide, accès aux sections clés
- **Histoire** : Mon parcours, mes valeurs, reconversion pro
- **Compétences** : Hard & soft skills
- **Projets** : Sélection de projets avec description, techno, objectifs
- **Contact** : Formulaire pour me joindre facilement

---

## 💡 Particularités

- Design épuré et moderne
- Responsive (mobile / tablette / desktop)
- Expérience utilisateur fluide
- Code structuré et commenté

---

## 👩‍💻 À propos de moi

Ancienne puéricultrice, reconvertie avec passion en développeuse web.  
Je suis rigoureuse, empathique et toujours en quête de sens dans mes projets.  
Maman, entraîneure de gymnastique rythmique, et développeuse… je construis des ponts entre les mondes humains et numériques 🌐🤝
=======
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
>>>>>>> 47a8252 (create repo)
