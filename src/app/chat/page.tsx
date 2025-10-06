"use client";
import Link from "next/link";
import { useState } from "react";

export default function ChatPage() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function handleAsk() {
    setLoading(true);
    setError(null);
    setAnswer(null);
    try {
      const res = await fetch("/api/ai/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data?.error || "요청 실패");
      setAnswer(data.answer || "");
    } catch (e: any) {
      setError(e?.message || "오류가 발생했습니다");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen p-6 space-y-6">
      <header className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Chat</h1>
        <nav className="space-x-3 text-sm">
          <Link className="underline" href="/compose">정리하기</Link>
          <Link className="underline" href="/cards">카드</Link>
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
        <textarea
          className="w-full rounded-md border p-3 h-28"
          placeholder="무엇을 알고 싶으신가요?"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <div className="flex gap-2 items-center">
          <button
            onClick={handleAsk}
            disabled={loading || question.trim().length === 0}
            className="rounded-md bg-black text-white px-4 py-2 text-sm disabled:opacity-60"
          >
            {loading ? "질문 중..." : "질문하기"}
          </button>
          <Link href="/compose" className="rounded-md border px-4 py-2 text-sm">정리하기</Link>
        </div>
        {error && (
          <div className="text-sm text-red-600">{error}</div>
        )}
        {answer && (
          <div className="rounded-md border p-3 text-sm whitespace-pre-wrap">
            {answer}
          </div>
        )}
      </section>
    </div>
  );
}
