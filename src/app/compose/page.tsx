import Link from "next/link";
export default function ComposePage() {
  return (
    <div className="min-h-screen p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">정리 화면 Composer</h1>
        <nav className="space-x-3 text-sm">
          <Link className="underline" href="/chat">Chat</Link>
          <Link className="underline" href="/cards">카드</Link>
        </nav>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        {/* 좌: Q/A */}
        <section className="rounded-lg border p-4 space-y-3">
          <h2 className="font-medium">Q/A</h2>
          <textarea className="w-full rounded-md border p-2 h-20" placeholder="질문 원문" />
          <textarea className="w-full rounded-md border p-2 h-32" placeholder="AI 답변" />
          <button className="rounded-md border px-3 py-2 text-sm">대화에서 가져오기</button>
        </section>

        {/* 중앙: 정리 */}
        <section className="rounded-lg border p-4 space-y-3">
          <h2 className="font-medium">정리</h2>
          <input className="w-full rounded-md border p-2" placeholder="Claim (주장 1문장)" />
          <textarea className="w-full rounded-md border p-2 h-32" placeholder="Summary (3–5문장)" />
          <input className="w-full rounded-md border p-2" placeholder="태그(,로 구분)" />
          <div className="flex items-center gap-2 text-sm">
            <input id="public" type="checkbox" className="scale-110" />
            <label htmlFor="public">게시 시 공개</label>
          </div>
        </section>

        {/* 우: Evidence & 체크리스트 */}
        <section className="rounded-lg border p-4 space-y-3">
          <h2 className="font-medium">근거 & 체크리스트</h2>
          <input className="w-full rounded-md border p-2" placeholder="링크(URL)" />
          <textarea className="w-full rounded-md border p-2 h-20" placeholder="스니펫" />
          <select className="w-full rounded-md border p-2 text-sm">
            <option>신뢰도: UNSET</option>
            <option>AUTHORITY</option>
            <option>PRIMARY</option>
            <option>SECONDARY</option>
            <option>BLOG</option>
            <option>FORUM</option>
          </select>
          <div className="grid gap-2 text-sm">
            <label className="flex items-center gap-2"><input type="checkbox" className="scale-110" /> 사실성</label>
            <label className="flex items-center gap-2"><input type="checkbox" className="scale-110" /> 근거 일치</label>
            <label className="flex items-center gap-2"><input type="checkbox" className="scale-110" /> 안전/PII</label>
          </div>
          <button className="rounded-md bg-black text-white px-3 py-2 text-sm">게시하기</button>
        </section>
      </div>
    </div>
  );
}
