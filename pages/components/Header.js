import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Header({ isAdmin, onLogout }) {
  const router = useRouter();
  const currentPath = router.pathname;

  const tabs = [
    { href: '/', label: '홈' },
    { href: '/about', label: '소개' },
    { href: '/gallery', label: '사진첩' },
    { href: '/guestbook', label: '방명록' },
    { href: '/admin', label: '관리' },
  ];

  return (
    <header className="bg-white shadow sticky top-0 z-10">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-pink-500">김애옹 본거지</h1>
          <p className="text-xs text-gray-500">쉼터 방문자와 함께</p>
        </div>
        <div className="text-sm">
          {isAdmin ? (
            <button onClick={onLogout} className="text-gray-600 hover:text-pink-600">로그아웃</button>
          ) : (
            <Link href="/admin" className="hover:text-pink-600">로그인</Link>
          )}
        </div>
      </div>

      <nav className="flex justify-center bg-white border-t border-b">
        {tabs.map(tab => (
          <Link
            key={tab.href}
            href={tab.href}
            className={`py-3 px-5 text-sm font-medium transition-all ${
              currentPath === tab.href
                ? 'text-pink-600 border-b-2 border-pink-500'
                : 'text-gray-600 hover:text-pink-500'
            }`}
          >
            {tab.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
