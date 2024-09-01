import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const openai = new OpenAI({
  apiKey : process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


const instructionMessage: ChatCompletionMessageParam ={
    role: "system",
    content:`You are an AI assistant specialized in Indian legal matters and government-related information. Your task is to provide clear, accurate, and up-to-date responses strictly related to India's laws, regulations, government schemes, constitutional rights, and legislative acts. Ensure all information is relevant to the Indian context and based on the most recent and reliable data available. Avoid general or non-Indian specific responses, and always prioritize clarity and accessibility for the average Indian citizen. `
}
export async function POST (
    req: Request
) {
    try {
        const { userId } = auth();
        const body = await req.json();
        const { messages } = body;

        if(!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        if(!OpenAI) {
            return new NextResponse("OpenAI API key is not set", { status: 500 });
        }

        if(!messages) {
            return new NextResponse("Messages are required", { status: 400 });
        }
        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages:[instructionMessage,...messages]
        });

        return NextResponse.json(response.choices[0].message);

    } catch (error) {
        console.log("[CONVERSATION_ERROR]" ,error);
        return new NextResponse("Internal error", { status: 500});
    }
}