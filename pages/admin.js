import { useRouter } from 'next/router';
import { useState } from 'react';
import Header from './components/Header';

export default function Admin() {
  const [pin, setPin] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const login = () => {
    if (pin === "6974") {
      localStorage.setItem("isAdmin", "true");
      router.push("/");
    } else {
      setError("잘못된 PIN입니다.");
    }
  };

  return (
    <main className="min-h-screen bg-pink-50">
      <Header isAdmin={false} />
      <section className="max-w-md mx-auto mt-12 bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-bold text-pink-600 mb-4">🔐 관리자 로그인</h2>
        <input
          type="password"
          maxLength={4}
          className="w-full border p-2 mb-2 text-center"
          placeholder="PIN 입력"
          value={pin}
          onChange={(e) => setPin(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <button onClick={login} className="w-full bg-pink-500 text-white py-2 rounded hover:bg-pink-600">
          확인
        </button>
      </section>
    </main>
  );
}
