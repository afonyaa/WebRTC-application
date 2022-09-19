import { PageRoute } from '@pages/interfaces';
import { VideoCallContainer } from '@containers/VideoCallContainer';

/** Страница видеозвонка пользователя */
const rootRoute: PageRoute = {
  path: 'videoCall',
  element: <VideoCallContainer />,
  baseLinkName: 'videoCall',
  private: false,
};

export default rootRoute;
