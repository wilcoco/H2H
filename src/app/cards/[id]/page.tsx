import Link from "next/link";
type Props = { params: Promise<{ id: string }> };

export default async function CardDetailPage({ params }: Props) {
  const { id } = await params;
  return (
    <div className="min-h-screen p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">카드 상세</h1>
        <nav className="space-x-3 text-sm">
          <Link className="underline" href="/cards">목록</Link>
          <Link className="underline" href="/compose">정리하기</Link>
        </nav>
      </header>

      <section className="rounded-lg border p-4 space-y-2">
        <div className="text-sm opacity-80">ID: {id}</div>
        <div className="text-lg font-medium">제목(예시)</div>
        <div className="text-sm opacity-80">Claim(예시)</div>
      </section>

      <section className="rounded-lg border p-4 space-y-2">
        <h2 className="font-medium">평가</h2>
        <div className="grid gap-2 text-sm">
          <label className="flex items-center gap-2"><input type="checkbox" className="scale-110" /> 사실성</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="scale-110" /> 근거 일치</label>
          <label className="flex items-center gap-2"><input type="checkbox" className="scale-110" /> 안전/PII</label>
        </div>
        <textarea className="w-full rounded-md border p-2 h-20" placeholder="코멘트" />
        <div className="flex gap-2">
          <button className="rounded-md border px-3 py-2 text-sm">평가 제출</button>
          <button className="rounded-md border px-3 py-2 text-sm">도전(Challenge)</button>
        </div>
      </section>
    </div>
  );
}
