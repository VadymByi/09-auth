export type NoteTag = 'Work' | 'Personal' | 'Meeting' | 'Shopping' | 'Todo';

export const TAGS: NoteTag[] = ['Work', 'Personal', 'Meeting', 'Shopping', 'Todo'];

export interface Note {
  id: string;
  title: string;
  content: string;
  tag: NoteTag;
  createdAt: string;
  updatedAt: string;
}

export type CreateNotePayload = Omit<Note, 'id' | 'createdAt' | 'updatedAt'>;

export interface FetchNotesParams {
  search?: string;
  page?: number;
  perPage?: number;
  tag?: NoteTag;
}

export interface NotesResponse {
  notes: Note[];
  total: number;
  pages: number;
}
