import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './elements/pages/Home.tsx';
import './index.css'
import AppHeader from './elements/organisms/AppHeader.tsx';
import AppFooter from './elements/organisms/AppFooter.tsx';
import AppErrorPage from './elements/pages/AppErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement:<AppErrorPage />,
  },
]);

const queryClient: QueryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <div className="h-screen mx-0 my-0">
        <AppHeader />
          <div className='px-5 py-0'>
          <RouterProvider router={router}/>
          </div>
        <AppFooter />
      </div>
    </QueryClientProvider>
  </React.StrictMode>,
)
