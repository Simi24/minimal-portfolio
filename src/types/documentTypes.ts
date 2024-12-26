// Definiamo un type per i possibili tipi di documento
export type DocumentType = 'teoria' | 'esercizi' | 'esame' | 'slide';

// Definiamo un'interfaccia per la configurazione del tipo di documento
export interface DocumentTypeConfig {
  label: string;
  color: string;
  icon?: string; // Opzionale: aggiunta di icone
}

// Mappa che associa ogni tipo di documento alla sua configurazione
export const documentTypesConfig: Record<DocumentType, DocumentTypeConfig> = {
  teoria: {
    label: 'Teoria',
    color: 'bg-blue-500',
    icon: 'book' // Esempio di icona
  },
  esercizi: {
    label: 'Esercizi',
    color: 'bg-green-500',
    icon: 'pencil'
  },
  esame: {
    label: 'Esame',
    color: 'bg-red-500',
    icon: 'exam' // Potrebbe essere un'icona di un orologio o calendario
  },
  slide: {
    label: 'Slide',
    color: 'bg-yellow-500',
    icon: 'presentation'
  }
};

// Esportiamo anche un array con i tipi, utile per iterazioni
export const documentTypes = Object.keys(documentTypesConfig) as DocumentType[];