import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from '../pages/home/Home'
import LiveClock from '../pages/liveClock/LiveTime'

const routes = [
  {
    path: '/',
    element: <Home />,
  },
  {
    path: '/live-clock',
    element: <LiveClock />,
  },
]

const Router = () => {
  const router = createBrowserRouter(routes)
  return <RouterProvider router={router} />
}

export default Router
