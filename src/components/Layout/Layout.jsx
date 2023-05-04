import { Suspense, useState } from 'react';
import { Outlet } from 'react-router-dom';

// import { nanoid } from 'nanoid';
import { Header } from 'components/Header/Header';
// import { AuthorizationForm } from 'components/AuthorizationForm/AuthorizationForm';

const Layout = () => {
  return (
    <div>
      <Header />
      <Suspense fallback={<h1>Loading...</h1>}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default Layout;