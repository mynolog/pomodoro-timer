import { NavLink } from 'react-router-dom'
import navItems from './navItems.json'

const NavBar = () => {
  return (
    <nav className="w-full flex justify-center items-center h-12 bg-black font-degital text-xl">
      <ul className="w-4/5 flex items-center gap-8">
        {navItems
          .filter((item) => item.isVisible)
          .map((item) => (
            <li key={item.id}>
              <NavLink
                className={({ isActive }) =>
                  `flex justify-center items-center gap-2 ${isActive ? 'text-white' : 'text-gray-400'}`
                }
                to={`${item.path}`}
              >
                <span>{item.label}</span>
              </NavLink>
            </li>
          ))}
      </ul>
    </nav>
  )
}

export default NavBar
