'use server'

import { streamText } from 'ai';
import { openai } from '@ai-sdk/openai';
import { createStreamableValue } from 'ai/rsc';


export async function generate(input: string) {
    const stream = createStreamableValue<string>('');

(async () => {   
    const { textStream } = await streamText({
        model: openai('gpt-4o'),
        prompt: input,
    });

    for await (const delta of textStream) {
        stream.update(delta)
    }
    stream.done();
})();


    return { output: stream.value};
}

