'use client';

import { useState } from 'react';
import { generate } from './actions';
import { readStreamableValue } from 'ai/rsc';

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

interface Notification {
  name: string;
  message: string;
  minutesAgo: number;
}

export default function Home() {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  return (
    <div className="p-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4"
        onClick={async () => {
          const { object } = await generate('Messages during finals week.');

          for await (const partialObject of readStreamableValue(object)) {
            if (partialObject && partialObject.notifications) {
              setNotifications(partialObject.notifications);
            }
          }
        }}
      >
        Ask
      </button>

      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4">
            <h3 className="font-bold text-lg">{notification.name}</h3>
            <p className="text-gray-600">{notification.message}</p>
            <p className="text-sm text-gray-500 mt-2">{notification.minutesAgo} minutes ago</p>
          </div>
        ))}
      </div>
    </div>
  );
}