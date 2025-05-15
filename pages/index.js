import { useState } from 'react';

export default function Home() {
  const [content, setContent] = useState({
    intro: "이곳은 김애옹의 본거지이며, 누구나 고양이처럼 느긋하게 쉬어갈 수 있는 공간입니다.\n지금은 관리자 수동 편집이 필요하지만, 앞으로는 사이트 내에서 직접 글을 수정하거나 관리할 수 있는 기능도 고려 중이에요.",
    plan: ["사진첩 기능 추가 예정", "방명록 및 AI 보조 댓글 기능 준비 중", "사용자 프로필 기능 구상 중"]
  });
  const [editing, setEditing] = useState(false);
  const [draft, setDraft] = useState(content);

  const saveChanges = () => {
    setContent(draft);
    setEditing(false);
  };

  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">김애옹 본거지</h1>
          <nav className="space-x-4 text-sm text-gray-700 font-medium">
            <a href="#" className="hover:text-pink-600">홈</a>
            <a href="#" className="hover:text-pink-600">소개</a>
            <a href="#" className="hover:text-pink-600">사진첩</a>
            <a href="#" className="hover:text-pink-600">방명록</a>
          </nav>
        </div>
      </header>

      <section className="max-w-3xl mx-auto p-6 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md relative">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">🎀 사이트 소개</h2>
          {editing ? (
            <textarea
              className="w-full border rounded p-2 text-sm"
              rows={4}
              value={draft.intro}
              onChange={(e) => setDraft({ ...draft, intro: e.target.value })}
            />
          ) : (
            <p className="whitespace-pre-line">{content.intro}</p>
          )}
          <button
            onClick={() => editing ? saveChanges() : setEditing(true)}
            className="absolute top-4 right-4 text-xs text-pink-500 border border-pink-400 px-2 py-1 rounded hover:bg-pink-50"
          >
            {editing ? "저장" : "✏️ 수정"}
          </button>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md relative">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📌 향후 계획</h2>
          {editing ? (
            <textarea
              className="w-full border rounded p-2 text-sm"
              rows={4}
              value={draft.plan.join("\n")}
              onChange={(e) => setDraft({ ...draft, plan: e.target.value.split("\n") })}
            />
          ) : (
            <ul className="list-disc ml-6 space-y-1">
              {content.plan.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}
