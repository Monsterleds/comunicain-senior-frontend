/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_SWAPI_BASE_URL: string;
  readonly VITE_STORAGE_KEY_NAME: string;
  readonly VITE_MODE: 'production' | 'development' | 'test' ;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
