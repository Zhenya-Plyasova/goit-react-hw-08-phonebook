import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { user, isLoggedIn, isRefreshing } = useSelector(state => state.auth);
  const shouldRedirect = !isLoggedIn && !isRefreshing;
  const location = useLocation();
  return user ? children : <Navigate to="/login" state={location} />;
};

export default PrivateRoute;
