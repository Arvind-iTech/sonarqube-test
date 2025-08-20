import { Navigate, Route, Routes } from 'react-router-dom';
import { NavigationRoutes } from '../common/constant';
import { Login } from '../pages/Register/Login';
import { Signup } from '../pages/Register/Signup';
import { ForgotPassword } from '../pages/Register/ForgotPassword';
import { SetPassword } from '../pages/Register/SetPassword';
import { Landing } from '../pages/Register/Landing';

export const PublicRoutes = () => {
  return (
    <Routes>
      = <Route path={NavigationRoutes.SignIn} element={<Login />} />
      <Route path={NavigationRoutes.SignUp} element={<Signup />} />
      <Route
        path={NavigationRoutes.ForgotPassword}
        element={<ForgotPassword />}
      />
      <Route path={NavigationRoutes.SetPassword} element={<SetPassword />} />
      <Route path={NavigationRoutes.Landing} element={<Landing />} />
      <Route path="*" element={<Navigate to={NavigationRoutes.Landing} />} />
    </Routes>
  );
};
