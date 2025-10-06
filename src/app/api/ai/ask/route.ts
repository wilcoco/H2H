import OpenAI from "openai";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: "Missing OPENAI_API_KEY" },
        { status: 500 }
      );
    }

    const body = await req.json().catch(() => ({}));
    const question: unknown = body?.question;
    const system: unknown = body?.system;
    const context: unknown = body?.context;
    const temperature: unknown = body?.temperature;

    if (typeof question !== "string" || question.trim().length === 0) {
      return NextResponse.json(
        { error: "'question' is required as a non-empty string" },
        { status: 400 }
      );
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const client = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
      baseURL: process.env.OPENAI_BASE_URL,
    });

    const systemPrompt =
      (typeof system === "string" && system) ||
      "You are a helpful assistant. Answer in Korean when the user writes Korean.";

    const ctxList = Array.isArray(context)
      ? (context as unknown[]).filter((x) => typeof x === "string") as string[]
      : [];

    const composedUser =
      question + (ctxList.length ? "\n\n추가 컨텍스트:\n- " + ctxList.join("\n- ") : "");

    const t = typeof temperature === "number" ? temperature : 0.3;

    const completion = await client.chat.completions.create({
      model,
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: composedUser },
      ],
      temperature: t,
    });

    const answer = completion.choices?.[0]?.message?.content?.trim() || "";
    return NextResponse.json({ answer, model });
  } catch (err: any) {
    const msg = err?.message || "Unknown error";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({ ok: true, usage: "POST { question, system?, context?, temperature? }" });
}
