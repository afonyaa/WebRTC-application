import { PageRoute } from '@pages/interfaces';
import { DashboardContainer } from '@containers/DashboardContainer';

/** Страница дашборда пользователя */
const rootRoute: PageRoute = {
  path: 'dashboard',
  element: <DashboardContainer />,
  baseLinkName: 'Dashboard',
  private: false,
};

export default rootRoute;
