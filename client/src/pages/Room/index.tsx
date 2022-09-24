import { PageRoute } from '@pages/interfaces';
import { RoomContainer } from '@containers/RoomContainer';

/** Страница видеозвонка пользователя */
const rootRoute: PageRoute = {
  path: 'room',
  element: <RoomContainer />,
  baseLinkName: 'room',
  private: false,
};

export default rootRoute;
