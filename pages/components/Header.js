import Link from 'next/link';

export default function Header({ isAdmin, onLogout }) {
  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-5xl mx-auto px-4 py-3 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-pink-500">김애옹 본거지</h1>
          <p className="text-sm text-pink-600">쉼터 방문자와 함께</p>
        </div>
        <div className="text-sm">
          {isAdmin ? (
            <button onClick={onLogout} className="text-gray-600 hover:text-pink-600">로그아웃</button>
          ) : (
            <Link href="/admin" className="hover:text-pink-600">로그인</Link>
          )}
        </div>
      </div>
      <nav className="max-w-5xl mx-auto flex border-t border-b divide-x text-sm text-gray-700 font-medium">
        {["/", "/about", "/gallery", "/guestbook", "/admin"].map((path, idx) => (
          <Link href={path} key={path} className="flex-1 text-center py-2 hover:bg-pink-50">
            {["HOME", "소개", "사진첩", "방명록", "관리"][idx]}
          </Link>
        ))}
      </nav>
    </header>
);
}
