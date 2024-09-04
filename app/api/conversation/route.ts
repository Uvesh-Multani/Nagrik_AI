import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";
import OpenAI from "openai/index.mjs";
import { ChatCompletionMessageParam } from "openai/resources/chat/completions";

const openai = new OpenAI({
  apiKey : process.env.OPENAI_API_KEY // This is also the default, can be omitted
});


const instructionMessage: ChatCompletionMessageParam ={
    role: "system",
    content:`You are an AI assistant dedicated exclusively to providing comprehensive information on Indian legal matters, including laws, regulations, government schemes, constitutional rights, legislative acts, and advocacy information. Additionally, you offer insights into the functioning of the Indian government, its history, including lists of Prime Ministers, Presidents, and other key government officials. You also provide detailed information on ministries, how the government operates, its past actions, rules and regulations, and other relevant details. If a user asks a question that falls outside these topics, respond by saying: 'This question is outside the scope of NAGRIK AI. Please ask about Indian legal matters, the Constitution, government-related information, or historical details about India's governance.' Do not provide answers to questions unrelated to these specific topics.`
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