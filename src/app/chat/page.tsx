export default function ChatPage() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Chat</h1>
        <nav className="space-x-3 text-sm">
          <a className="underline" href="/compose">정리하기</a>
          <a className="underline" href="/cards">카드</a>
        </nav>
      </header>

      <section className="rounded-lg border p-4">
        <div className="mb-3 text-sm opacity-80">관련 지식카드</div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-md border p-3 text-sm">(예시) 카드 A — 신뢰도 82 • 최근 갱신</div>
          <div className="rounded-md border p-3 text-sm">(예시) 카드 B — 신뢰도 74 • 최근 갱신</div>
        </div>
      </section>

      <section className="rounded-lg border p-4 space-y-4">
        <div className="text-sm opacity-80">질문</div>
        <textarea className="w-full rounded-md border p-3 h-28" placeholder="무엇을 알고 싶으신가요?" />
        <div className="flex gap-2">
          <button className="rounded-md bg-black text-white px-4 py-2 text-sm">질문하기</button>
          <a href="/compose" className="rounded-md border px-4 py-2 text-sm">정리하기</a>
        </div>
      </section>
    </div>
  );
}
