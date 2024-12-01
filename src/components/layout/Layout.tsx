import { Outlet } from 'react-router'
import NavBar from './navBar/NavBar'

const Layout = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Outlet />
    </div>
  )
}
export default Layout
