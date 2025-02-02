import OpenAI from "openai"
import { OpenAIStream, StreamingTextResponse } from "ai"

export const runtime = "edge"

export async function POST(req: Request) {
  const { messages, apiKey, character } = await req.json()

  const openai = new OpenAI({
    apiKey: apiKey,
  })

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    stream: true,
    messages: [{ role: "system", content: character.prompt }, ...messages],
  })

  const stream = OpenAIStream(response)
  return new StreamingTextResponse(stream)
}

