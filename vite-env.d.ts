/// <reference types="vite/client" />

interface ImportMetaEnv {
    VITE_API_URL: string; // Ajoutez ici d'autres variables d'environnement si nécessaire
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv;
  }