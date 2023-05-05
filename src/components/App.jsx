import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import { useDispatch } from 'react-redux';

import Layout from './Layout/Layout';
import { getCurrentUser } from 'redux/servises/authentification';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const Registration = lazy(() => import('pages/Registration'));
const Authorization = lazy(() => import('pages/Authorization'));

export const App = () => {

  const dispatch = useDispatch();
 useEffect(() => {
   dispatch(getCurrentUser());

 }, [dispatch])
 
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="phonebook"
          element={
            <PrivateRoute>
              <Phonebook />
            </PrivateRoute>
          }
        />
        <Route
          path="login"
          element={
            <Suspense>
              <PublicRoute>
                <Authorization />
              </PublicRoute>
            </Suspense>
          }
        />
        <Route path="signup" element={<Registration />} />
      </Route>
      <Route path="*" element={<Layout />} />
    </Routes>
  );
};
