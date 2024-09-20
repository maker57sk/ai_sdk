// Generate text
'use client'

import { useState } from 'react';
import { getNotifications } from './actions';

export const maxDuration = 30;


export default function Home() {
  const [generation, setGeneration] = useState<string>('')

  return (
    <div>
      <button onClick={async () => {
        const { notifications } = await getNotifications(
          'Messages during finals week.'
        );
        setGeneration(JSON.stringify(notifications, null, 2));
      }}>
        view notifications
        </button>
      <p>{generation}</p>
    </div>
  )
}