import { NavLink } from 'react-router-dom'
import { IoMdTimer, IoMdClock } from 'react-icons/io'

const NavBar = () => {
  return (
    <nav className="w-full flex justify-center items-center h-12 bg-black font-degital">
      <ul className="w-4/5 flex items-center gap-5">
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex justify-center items-center gap-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            to={'/'}
          >
            <IoMdTimer className="text-2xl" />
            <span>타이머</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              `flex justify-center items-center gap-2 ${isActive ? 'text-white' : 'text-gray-400'}`
            }
            to={'/live-clock'}
          >
            <IoMdClock className="text-2xl" />
            <span>시계</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
