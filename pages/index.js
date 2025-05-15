import { useEffect, useState } from 'react';
import Header from './components/Header';

export default function Home() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [editing, setEditing] = useState(false);
  const [text, setText] = useState("이곳은 김애옹의 본거지이며, 누구나 고양이처럼 느긋하게 쉬어갈 수 있는 공간입니다.");

  useEffect(() => {
    if (localStorage.getItem("isAdmin") === "true") setIsAdmin(true);
  }, []);

  const save = () => {
    setEditing(false);
    localStorage.setItem("homeText", text);
  };

  useEffect(() => {
    const saved = localStorage.getItem("homeText");
    if (saved) setText(saved);
  }, []);

  const logout = () => {
    localStorage.removeItem("isAdmin");
    location.reload();
  };

  return (
    <main className="min-h-screen bg-pink-50">
      <Header isAdmin={isAdmin} onLogout={logout} />
      <section className="max-w-3xl mx-auto p-6">
        <div className="bg-white p-6 rounded-xl shadow">
          <h2 className="text-lg font-bold text-pink-500 mb-2">🎀 사이트 소개</h2>
          {editing ? (
            <textarea value={text} onChange={e => setText(e.target.value)} className="w-full border p-2" rows={4} />
          ) : (
            <p>{text}</p>
          )}
          {isAdmin && (
            <button onClick={editing ? save : () => setEditing(true)} className="mt-3 text-sm text-pink-600 border px-2 py-1 rounded">
              {editing ? "저장" : "✏️ 수정"}
            </button>
          )}
        </div>
      </section>
    </main>
  );
}
