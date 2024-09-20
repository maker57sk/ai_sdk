// Generate text

'use client'

import { useState } from 'react';
import { generate } from './actions';
import { readStreamableValue } from 'ai/rsc';

export const maxDuration = 30;

export default function Home() {
  const [generation, setGeneration] = useState<string>('')

  return (
    <div>
      <button onClick={async () => {
        const { output } = await generate('What is the meaning of life?');

        for await (const delta of readStreamableValue(output)) {
        setGeneration(currentGeneration => `${currentGeneration}${delta}`);
        }
      }}>
        Answer
        </button>
      <p>{generation}</p>
    </div>
  )
}