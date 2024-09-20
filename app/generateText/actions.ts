'use server'

import { generateText } from 'ai';
import { openai } from '@ai-sdk/openai';


export async function getanswer(question: string) {
    const { text, finishReason, usage } = await generateText({
        model: openai('gpt-4o'),
        prompt: question,
    })

    return { text, finishReason, usage }
}

