export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 text-gray-800 font-sans p-6">
      <div className="max-w-3xl mx-auto">
        <header className="mb-10">
          <h1 className="text-4xl font-bold mb-2">김애옹 쉼터</h1>
          <p className="text-lg text-gray-600">고양이처럼 느긋하게, 우리만의 공간.</p>
        </header>

        <section className="space-y-6">
          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2">📌 사이트 소개</h2>
            <p>
              김애옹 쉼터는 아늑한 커뮤니티를 준비하는 공간입니다. <br/>
              지금은 정적 사이트로 운영되지만, 앞으로는 회원제 소셜 기능, 실시간 채팅, 자료 공유도 도입할 예정이에요.
            </p>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2">🧭 로드맵</h2>
            <ul className="list-disc ml-5 space-y-1">
              <li>1단계: 사이트 소개 및 커뮤니티 방향 공유</li>
              <li>2단계: 글쓰기 / 댓글 기능 도입</li>
              <li>3단계: 그룹별 채팅 / AI 보조 도입</li>
              <li>4단계: 프로필 / 좋아요 / 업로드 등 소셜 기능</li>
            </ul>
          </div>

          <div className="bg-white p-5 rounded-2xl shadow">
            <h2 className="text-2xl font-semibold mb-2">📬 연락</h2>
            <p>
              운영자에게 문의하고 싶으시다면 <code className="bg-gray-100 px-1">kimaeong@yourdomain.com</code> 으로 연락 주세요.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
