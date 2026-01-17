import { api } from './api';
import { cookies } from 'next/headers';
import { FetchNotesParams, Note } from '../../types/note';
import { User } from '../../types/user';

const getAuthHeaders = async () => {
  const cookieStore = await cookies();
  return {
    headers: {
      Cookie: cookieStore.toString(),
    },
  };
};

export const fetchNotes = async (params: FetchNotesParams) => {
  const headers = await getAuthHeaders();
  const response = await api.get('/notes', { ...headers, params });
  return response.data;
};

export const fetchNoteById = async (id: string) => {
  const headers = await getAuthHeaders();
  const response = await api.get<Note>(`/notes/${id}`, headers);
  return response.data;
};

export const getMe = async () => {
  const headers = await getAuthHeaders();
  const response = await api.get<User>('/users/me', headers);
  return response.data;
};

export const checkSession = async () => {
  try {
    const headers = await getAuthHeaders();
    const response = await api.get<User | null>('/auth/session', headers);
    return response.data;
  } catch {
    return null;
  }
};
