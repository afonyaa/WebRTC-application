import { useRef, useEffect, useState, useCallback } from 'react';
import { io } from 'socket.io-client';
import { ACTIONS } from '@containers/RoomsContainer/socket/constants';

const LOCAL_VIDEO = 'LOCAL_VIDEO';

const options = {
  forceNew: true,
  timeout: 10000,
  transports: ['websocket'],
};

const SIGNALING_SERVER_ADDRESS = 'http://localhost:3001';

const socket = io(SIGNALING_SERVER_ADDRESS, options);

export const useWebRTC = (roomId: string) => {
  const [clients, setClients] = useState<string[]>([]);

  const peerConnections = useRef({});
  /** ссылка на локальный видеоэлемент */
  const localMediaStream = useRef(null);
  /** видео элементы на старнице */
  const peerMediaElements = useRef({
    LOCAL_VIDEO_ELEMENT: null,
  });

  const addNewClient = useCallback(
    (newClient: string) => {
      if (!clients.includes(newClient)) {
        setClients((oldVal) => [...oldVal, newClient]);
      }
    },
    [clients]
  );

  useEffect(() => {
    const startCapture = async () => {
      if (localMediaStream.current) {
        localMediaStream.current.srcObject =
          await navigator.mediaDevices.getUserMedia({
            audio: false,
            video: true,
          });

        addNewClient(LOCAL_VIDEO);
      }
    };
    startCapture().then(() => socket.emit(ACTIONS.JOIN, { room: roomId }));
  }, [addNewClient, roomId]);

  const provideMediaRef = useCallback((id, node) => {
    console.log(id, node);
  }, []);

  return { clients, provideMediaRef };
};
