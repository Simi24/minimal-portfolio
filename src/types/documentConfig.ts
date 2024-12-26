import { DocumentType } from "./documentTypes";

export interface DocumentConfig {
  id: string;
  title: string;
  filename: string;
  description: string;
  type: DocumentType;
  date: string;
  pages: number;
  size: string;
  path: string;
  degree: string;
  year: string;
  course: string;
}