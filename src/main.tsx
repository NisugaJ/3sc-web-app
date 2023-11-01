import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import HomePage from './elements/pages/HomePage.tsx';
import './index.css'
import AppErrorPage from './elements/pages/AppErrorPage.tsx';
import AppSubmitNominationPage from './elements/pages/submit-nomination/AppSubmitNominationPage.tsx';
import AppNominationsPage from './elements/pages/nominations/AppNominationsPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    errorElement: <AppErrorPage />,
  },
  {
    path: "/submit-nomination",
    element: <AppSubmitNominationPage />,
  },
  {
    path: "/nominations",
    element: <AppNominationsPage />,
  }
]);

const queryClient: QueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="h-screen mx-0 my-0">
        <RouterProvider router={router} />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
