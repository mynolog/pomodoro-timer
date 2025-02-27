import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../components/layout/Layout'
import Home from '../pages/home/Home'
import LiveClock from '../pages/liveClock/LiveTime'
import Stopwatch from '../pages/stopwatch/Stopwatch'
import NotFound from '../pages/error/NotFound'

const routes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: '/live-clock',
        element: <LiveClock />,
      },
      {
        path: '/stopwatch',
        element: <Stopwatch />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]

const Router = () => {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default Router
