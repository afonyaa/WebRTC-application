import { AuthContainer } from '@containers/AuthContainer';
import { PageRoute } from '@pages/interfaces';
import { SignInContainer } from '@containers/SignInContainer';
import { SignUpContainer } from '@containers/SignUpContainer';

/** Страница регистрации и логина */
const rootRoute: PageRoute = {
  path: 'auth/*',
  element: <AuthContainer />,
  private: false,
  baseLinkName: 'Authorization',
  children: [
    {
      index: true,
      element: <SignInContainer />,
      baseLinkName: 'Sign in',
      private: false,
    },
    {
      path: 'signUp',
      element: <SignUpContainer />,
      baseLinkName: 'Sign up',
      private: false,
    },
  ],
};

export default rootRoute;
