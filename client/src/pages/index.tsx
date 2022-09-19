import AuthRoute from '@pages/Auth';
import DashboardRoute from '@pages/Dashboard';
import VideoCallRoute from '@pages/VideoCall';
import { FC } from 'react';
import { useRoutes } from 'react-router-dom';

const rootRoutes = [AuthRoute, DashboardRoute, VideoCallRoute];

const RouteHandler: FC = () => {
  return useRoutes(rootRoutes);
};
export default RouteHandler;

// const PrivateRoute = ({ children }) => {
//   const authed = isauth() // isauth() returns true or false based on localStorage
//
//   return authed ? children : <Navigate to="/Home" />;
// }
