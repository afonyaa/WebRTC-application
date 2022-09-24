import { FC, useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import { ACTIONS } from '@containers/RoomsContainer/socket/constants';
import { Button } from '@components/Button';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

const options = {
  forceNew: true,
  timeout: 10000,
  transports: ['websocket'],
};

const SIGNALING_SERVER_ADDRESS = 'http://localhost:3001';

const socket = io(SIGNALING_SERVER_ADDRESS, options);
export const RoomsContainer: FC = () => {
  const [availableRoomsIds, setAvailableRoomsIds] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    socket.on(ACTIONS.SHARE_ROOMS, ({ roomsIds = [] } = {}) => {
      setAvailableRoomsIds(roomsIds);
    });
  }, []);

  const joinRoom = (roomId: string) => {
    navigate(`${roomId}`, { replace: true });
  };

  return (
    <div className={'pa-4'}>
      <h2 className={'text-slate-200 mb-8'}>
        Socket id =<span className={'font-extrabold'}> {socket.id}</span>
      </h2>
      <h1 className={'text-2xl text-slate-200'}>Available rooms:</h1>
      <div>
        {availableRoomsIds.map((roomId) => (
          <div key={roomId} className={'text-slate-400 pt-4'}>
            <Button
              title={roomId}
              onClick={() => {
                joinRoom(roomId);
              }}
            />
          </div>
        ))}
      </div>
      <div className={'pt-8'}>
        <Button
          title={'Create new room'}
          variant={'outlined'}
          onClick={() => {
            joinRoom(uuidv4());
          }}
        />
      </div>
    </div>
  );
};
