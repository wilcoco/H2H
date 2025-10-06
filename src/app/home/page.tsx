import Link from "next/link";

export default function HomeLanding() {
  return (
    <div className="min-h-screen p-8 sm:p-12 space-y-10">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-semibold">H2H 지식 네트워크</h1>
        <nav className="space-x-4 text-sm">
          <Link className="underline" href="/chat">Chat</Link>
          <Link className="underline" href="/compose">정리하기</Link>
          <Link className="underline" href="/cards">카드</Link>
        </nav>
      </header>

      <section className="grid gap-4 sm:grid-cols-3">
        <Link href="/chat" className="rounded-lg border p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
          <div className="text-lg font-medium">질문하기 (Chat)</div>
          <p className="text-sm opacity-80 mt-1">AI 답변 + 검증 카드 추천</p>
        </Link>
        <Link href="/compose" className="rounded-lg border p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
          <div className="text-lg font-medium">정리 화면 (Composer)</div>
          <p className="text-sm opacity-80 mt-1">Q/A + 근거로 지식카드 만들기</p>
        </Link>
        <Link href="/cards" className="rounded-lg border p-5 hover:bg-black/5 dark:hover:bg-white/5 transition">
          <div className="text-lg font-medium">지식카드</div>
          <p className="text-sm opacity-80 mt-1">공유·평가·투자되는 정리</p>
        </Link>
      </section>

      <section className="rounded-lg border p-6">
        <h2 className="text-xl font-medium">어떻게 작동하나요?</h2>
        <ol className="list-decimal list-inside text-sm mt-3 space-y-1 opacity-90">
          <li>Chat에서 질문 → 답변 확인</li>
          <li>정리 화면에서 주장·요약·근거를 채워 카드로 게시</li>
          <li>유사 질문에 카드가 노출되고 평가/투자를 받아 진실로 수렴</li>
        </ol>
      </section>
    </div>
  );
}
