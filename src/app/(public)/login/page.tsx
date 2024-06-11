'use client';

import { MouseEvent, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { signIn, useSession } from 'next-auth/react';
import { Login } from '@/components/login/Login';

export default function LoginPage() {
  const router = useRouter();
  const { data: session } = useSession();

  const usernameRef = useRef(null);
  const passwordRef = useRef(null);

  const onLogin = async (e: MouseEvent) => {
    e.preventDefault();

    const response = await signIn('credentials', {
      username: usernameRef.current,
      password: passwordRef.current,
      redirect: true,
      callbackUrl: '/',
    });

    if (response?.error) {
      alert(response.error);
    }
  };

  if (session && session.user) {
    router.replace('/');
  }

  return (
    <Login
      usernameRef={usernameRef}
      passwordRef={passwordRef}
      onLogin={onLogin}
    />
  );
}
