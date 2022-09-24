import { PageRoute } from '@pages/interfaces';
import { P2PCallContainer } from '@containers/P2PCallContainer';

/** Страница видеозвонка пользователя */
const rootRoute: PageRoute = {
  path: 'p2pCall',
  element: <P2PCallContainer />,
  baseLinkName: 'p2p call',
  private: false,
};

export default rootRoute;
