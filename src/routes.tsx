import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import { JoiningForm } from './containers/Landing/components/JoiningForm';

// Lazy load components for better performance
const Landing = lazy(() => import('./containers/Landing'));
const LandingLayout = lazy(() => import('./containers/Landing/layout'));

export const landingRoutes: RouteObject[] = [
  {
    path: '/',
    element: <LandingLayout />,
    children: [
      {
        path: '/',
        element: <Landing />
      },{
        path: '/join',
        element: <JoiningForm />
      },{
        path: '*',
        element: <Landing />
      }
    ]
  },
  
]; 