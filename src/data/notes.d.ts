import { DocumentConfig } from '@/types/documentConfig'; // Importa l'interfaccia

declare module '@/data/notes' {
  const documentsData: DocumentConfig[]; // Asserisci il tipo qui!
  export { documentsData };
}