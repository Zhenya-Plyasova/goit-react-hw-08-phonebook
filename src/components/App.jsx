import { Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import PublicRoute from './PublicRoute/PublicRoute';
import PrivateRoute from './PrivateRoute/PrivateRoute';
// import HomePage from 'pages/HomePage/HomePage';
// import { Phonebook } from 'pages/Phonebook';
import Layout from './Layout/Layout';
// import { Authorization } from 'pages/Authorization';
// import { Registration } from 'pages/Registration';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const Phonebook = lazy(() => import('pages/Phonebook'));
const Registration = lazy(() => import('pages/Registration'));
const Authorization = lazy(() => import('pages/Authorization'));

export const App = () => {
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
    </Routes>
  );
};
