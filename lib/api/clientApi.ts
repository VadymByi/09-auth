import { api } from './api';
import { FetchNotesParams, Note } from '../../types/note';
import { User } from '../../types/user';

export interface AuthPayload {
  email: string;
  password: string;
}

export interface UpdateUserPayload {
  username?: string;
  avatar?: string;
}

export const register = async (data: AuthPayload) => {
  const response = await api.post<User>('/auth/register', data);
  return response.data;
};

export const login = async (data: AuthPayload) => {
  const response = await api.post<User>('/auth/login', data);
  return response.data;
};

export const logout = async () => {
  await api.post('/auth/logout');
};

export const checkSession = async () => {
  const response = await api.get<{ success: boolean; user?: User } | null>('/auth/session');
  return response.data;
};

export const getMe = async () => {
  const response = await api.get<User>('/users/me');
  return response.data;
};

export const updateMe = async (data: UpdateUserPayload) => {
  const response = await api.patch<User>('/users/me', data);
  return response.data;
};

export const fetchNotes = async (params: FetchNotesParams) => {
  const response = await api.get('/notes', { params });
  return response.data;
};

export const fetchNoteById = async (id: string) => {
  const response = await api.get<Note>(`/notes/${id}`);
  return response.data;
};

export const createNote = async (note: Omit<Note, 'id' | 'createdAt' | 'updatedAt' | 'userId'>) => {
  const response = await api.post<Note>('/notes', note);
  return response.data;
};

export const deleteNote = async (id: string) => {
  const response = await api.delete<Note>(`/notes/${id}`);
  return response.data;
};
