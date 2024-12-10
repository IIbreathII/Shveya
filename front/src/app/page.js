"use client"; // Указывает, что этот компонент работает на клиенте

import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  const navigateToLogin = () => {
    router.push('/login'); // Переход на страницу входа
  };

  return (
    <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Страница входа</h1>
      <button onClick={navigateToLogin}>Go to Login</button>
    </div>
  );
}
