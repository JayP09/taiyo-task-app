import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './routes/root';
import ErrorPage from './error-page';
import Contact from './routes/contact';
import ContactForm from './routes/contactform';
import RootProvider from './provider';
import Dashboard from './routes/dashboard';

// router setup
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Contact />,
      },
      {
        path: '/create',
        element: <ContactForm />,
      },
      {
        path: '/edit/:contactId',
        element: <ContactForm />,
      },
      {
        path: '/dashboard',
        element: <Dashboard />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
root.render(
  <React.StrictMode>
    <RootProvider>
      <RouterProvider router={router} />
    </RootProvider>
  </React.StrictMode>,
);
