'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useAuthStore } from '@/lib/store/authStore';
import { updateMe } from '@/lib/api/clientApi';
import css from './EditProfilePage.module.css';

export default function EditProfilePage() {
  const { user, setUser } = useAuthStore();
  const [username, setUsername] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (user) {
      setUsername(user.username);
    }
  }, [user]);

  if (!user) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const updatedUser = await updateMe({ username });
      setUser(updatedUser);
      router.push('/profile');
    } catch (error) {
      console.error('Update failed:', error);
      alert('Failed to update profile');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className={css.mainContent}>
      <div className={css.profileCard}>
        <h1 className={css.formTitle}>Edit Profile</h1>

        {user.avatar && (
          <Image
            src={user.avatar}
            alt="User Avatar"
            width={120}
            height={120}
            className={css.avatar}
          />
        )}

        <form className={css.profileInfo} onSubmit={handleSubmit}>
          <div className={css.usernameWrapper}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              value={username || ''}
              onChange={e => setUsername(e.target.value)}
              className={css.input}
            />
          </div>

          <p>Email: {user.email}</p>

          <div className={css.actions}>
            <button type="submit" className={css.saveButton} disabled={isSubmitting}>
              {isSubmitting ? 'Saving...' : 'Save'}
            </button>
            <button
              type="button"
              className={css.cancelButton}
              onClick={() => router.push('/profile')}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
