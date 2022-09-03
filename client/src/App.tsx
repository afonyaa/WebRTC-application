import { FC } from 'react';
import { BrowserRouter } from 'react-router-dom';
import RouteHandler from './pages';

export const App: FC = () => {
  return (
    <BrowserRouter>
      <RouteHandler />
    </BrowserRouter>
  );
};
