import { Outlet } from 'react-router'
import NavBar from './navBar/NavBar'

const Layout = () => {
  return (
    <div className="w-full flex flex-col items-center">
      <NavBar />
      <Outlet />
    </div>
  )
}
export default Layout
