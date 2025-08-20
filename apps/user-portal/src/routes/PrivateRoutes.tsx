import { Navigate, Route, Routes } from 'react-router-dom';
import { PrivateRoute } from '../pages/PrivateRoute';
import { NavigationRoutes } from '../common/constant';
import { Dashboard } from '../pages/Dashboard';
import { Users } from '../pages/Users/Users';
import { Templates } from '../pages/Templates/Templates';
import { Settings } from '../pages/Settings';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to={NavigationRoutes.Home} />} />
      <Route path={NavigationRoutes.Home} element={<PrivateRoute />}>
        <Route path={NavigationRoutes.Dashboard} element={<Dashboard />} />
        <Route path={NavigationRoutes.Users} element={<Users />} />
        <Route path={NavigationRoutes.Templates} element={<Templates />} />
        <Route path={NavigationRoutes.Settings} element={<Settings />} />
        <Route
          path="/"
          element={<Navigate to={NavigationRoutes.Dashboard} />}
        />
      </Route>
    </Routes>
  );
};
