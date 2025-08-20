import { observer } from 'mobx-react-lite';
import { BrowserRouter } from 'react-router-dom';

import { appState } from './state';
import { PrivateRoutes } from './routes/PrivateRoutes';
import { PublicRoutes } from './routes/PublicRoutes';

export const Router = observer(() => {
  return (
    <BrowserRouter>
        {appState.isUserAuthenticated ? <PrivateRoutes /> : <PublicRoutes />}
    </BrowserRouter>
  );
});
