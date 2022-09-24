import { PageRoute } from '@pages/interfaces';
import { RoomsContainer } from '@containers/RoomsContainer';
import { VideoCallsContainer } from '@containers/VideoCallsContainer';
import { RoomContainer } from '@containers/RoomContainer';

/** Страница регистрации и логина */
const rootRoute: PageRoute = {
  path: 'rooms/*',
  element: <VideoCallsContainer />,
  private: false,
  baseLinkName: 'Rooms',
  children: [
    {
      index: true,
      element: <RoomsContainer />,
      baseLinkName: 'Rooms',
      private: false,
    },
    {
      path: ':roomId',
      element: <RoomContainer />,
      baseLinkName: '',
      private: false,
    },
  ],
};

export default rootRoute;
