// Generate text

'use client'

import { useState } from 'react';
import { getanswer } from './actions';



export default function Home() {
  const [generation, setGeneration] = useState<string>('')

  return (
    <div>
      <button onClick={async () => {
        const { text } = await getanswer('What is the meaning of life?');
        setGeneration(text);
      }}>
        Answer
        </button>
      <p>{generation}</p>
    </div>
  )
}