export interface BookCategory {
  id?: number;
  category: string;
  publisher?: string;
  publicationYear?: number;
  authorsName?: string;
  books?: Book[];
}
export interface Book {
  id?: number;
  isbn?: string;
  status?: string;
  title?:string;
}