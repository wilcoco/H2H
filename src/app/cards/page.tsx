export default function CardsPage() {
  const mock = [
    { id: "1", title: "카드 A", claim: "주장 A", confidence: 0.82 },
    { id: "2", title: "카드 B", claim: "주장 B", confidence: 0.74 },
  ];

  return (
    <div className="min-h-screen p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">지식카드</h1>
        <nav className="space-x-3 text-sm">
          <a className="underline" href="/chat">Chat</a>
          <a className="underline" href="/compose">정리하기</a>
        </nav>
      </header>

      <ul className="grid gap-3 md:grid-cols-2">
        {mock.map((c) => (
          <li key={c.id} className="rounded-md border p-4">
            <a className="block" href={`/cards/${c.id}`}>
              <div className="text-sm opacity-80">신뢰도 {(c.confidence * 100).toFixed(0)}</div>
              <div className="mt-1 text-lg font-medium">{c.title}</div>
              <div className="text-sm opacity-80">{c.claim}</div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
