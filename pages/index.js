export default function Home() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <header className="bg-white shadow-md sticky top-0 z-10">
        <nav className="max-w-4xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">김애옹 본거지</h1>
          <ul className="flex space-x-4 text-gray-700 font-medium">
            <li><a href="#" className="hover:text-pink-600">홈</a></li>
            <li><a href="#" className="hover:text-pink-600">소개</a></li>
            <li><a href="#" className="hover:text-pink-600">사진첩</a></li>
            <li><a href="#" className="hover:text-pink-600">방명록</a></li>
          </ul>
        </nav>
      </header>

      <section className="max-w-3xl mx-auto p-6 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">🎀 사이트 소개</h2>
          <p>
            이곳은 김애옹의 본거지이며, 누구나 고양이처럼 느긋하게 쉬어갈 수 있는 공간입니다.<br/>
            지금은 관리자 수동 편집이 필요하지만, 앞으로는 사이트 내에서 직접 글을 수정하거나 관리할 수 있는 기능도 고려 중이에요.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold mb-2 text-pink-600">📌 향후 계획</h2>
          <ul className="list-disc ml-6 space-y-1">
            <li>사진첩 기능 추가 예정</li>
            <li>방명록 및 AI 보조 댓글 기능 준비 중</li>
            <li>사용자 프로필 기능 구상 중</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
