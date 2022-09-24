import React, { FC, useEffect, useRef } from 'react';
import { useParams } from 'react-router';
import { useWebRTC } from '@pages/Room/hooks/useWebRTC';

export const RoomContainer: FC = () => {
  const { roomId } = useParams();
  const { clients, provideMediaRef } = useWebRTC(roomId || '');
  console.log(clients);
  return (
    <div>
      {roomId}
      {JSON.stringify(clients)}
      {clients.map((clientId) => {
        return (
          <div>
            <video
              ref={(node) => provideMediaRef(clientId, node)}
              autoPlay
              playsInline
            />
          </div>
        );
      })}
    </div>
  );
};
