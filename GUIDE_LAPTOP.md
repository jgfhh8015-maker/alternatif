# 💻 GUIDE DE REPRISE SUR LAPTOP
**Projet :** Acces Alternatif  
**Date :** 18 Février 2026

---

## 🚀 ÉTAPE 1 : RÉCUPÉRER LE PROJET
Sur votre Laptop, ouvrez votre terminal (ou VS Code) et lancez ces commandes :

1.  **Cloner le dépôt (si c'est la première fois) :**
    ```bash
    git clone https://github.com/jgfhh8015-maker/alternatif.git
    cd alternatif
    ```

    *OU*

2.  **Mettre à jour le projet (si vous l'avez déjà) :**
    ```bash
    cd alternatif (ou le nom de votre dossier)
    git pull origin main
    ```

---

## 📦 ÉTAPE 2 : INSTALLER LES DÉPENDANCES
Une fois dans le dossier, installez tout ce qu'il faut (Next.js, React, etc.) :

```bash
npm install
```

*(Si vous voyez des "vulnerabilities", c'est normal, faites juste `audit fix` si demandé, ou ignorez).*

---

## ▶️ ÉTAPE 3 : LANCER LE SITE
Pour voir le site en local :

```bash
npm run dev
```
👉 Ouvrez votre navigateur sur : [http://localhost:3000](http://localhost:3000)

---

## 🔄 TRAVAILLER & SAUVEGARDER
Quand vous aurez fini vos modifs sur le Laptop :

1.  **Sauvegarder :**
    ```bash
    git add .
    git commit -m "Description de vos modifs"
    git push origin main
    ```

2.  **De retour sur l'IMAC :**
    N'oubliez pas de faire un `git pull` avant de recommencer à travailler ici !
