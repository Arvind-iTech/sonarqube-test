import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';

import { appState } from './state';
import { PublicRoutes } from './routes/PublicRoutes';
import { PrivateRoutes } from './routes/PrivateRoutes';

export const Router = observer(() => {
  return (
    <BrowserRouter>
      {appState.isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
});
