import Link from 'next/link';

export default function About() {
  return (
    <main className="min-h-screen bg-pink-50 text-gray-800 font-sans">
      <header className="bg-white shadow sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-pink-500">김애옹 본거지</h1>
          <nav className="space-x-4 text-sm text-gray-700 font-medium">
            <Link href="/">홈</Link>
            <Link href="/about">소개</Link>
            <Link href="#">사진첩</Link>
            <Link href="#">방명록</Link>
          </nav>
        </div>
      </header>

      <section className="max-w-3xl mx-auto p-6 space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-pink-600">😺 김애옹 소개</h2>
          <p className="mt-2">
            김애옹은 인터넷 속의 고양이형 정령이자 이 공간의 수호자입니다. 언제나 조용히, 귀엽게, 은근히 세상을 관찰하며, 방명록에 나타날 수도 있어요.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-pink-600">📚 운영 목적</h2>
          <p className="mt-2">
            이 공간은 마음의 안정을 위한 디지털 쉼터를 지향합니다. 방문자들이 서로의 이야기를 남기고, 김애옹과 조용히 교류하며, 사진첩으로 추억을 공유할 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}
