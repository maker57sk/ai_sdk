'use server'

import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';


export async function getNotifications(input: string) {

    'use server'

    const { object: notifications } = await generateObject({
        model: openai('gpt-4o'),
        system: 'You generate three notifications for a messages app.',
        prompt: input,
        schema: z.object({
            notifications: z.array(
                z.object({
                    name: z.string().describe('The name of the person sending the notification'),
                    message: z.string().describe('The message of the notification'),
                    minutesAgo: z.number()
                }),
            ),
        }),
    })

    return { notifications}
}

