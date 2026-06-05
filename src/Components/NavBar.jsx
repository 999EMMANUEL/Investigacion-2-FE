import { useContext } from 'react'
import { Link, useNavigate } from '@tanstack/react-router'
import { AuthContext } from '../Context/AuthContext'

const ROLE_CLAIM = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

const NavBar = () => {
  const { user, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate({ to: '/login' })
  }

  const role = user?.[ROLE_CLAIM] || user?.role

  return (
    <nav className="bg-gray-800 text-white px-6 py-4 flex justify-between items-center shadow">
      <Link to="/" className="text-lg font-medium hover:text-gray-300">
        Home
      </Link>
      {role === 'admin' && (
        <Link to="/users" className="text-lg font-medium hover:text-gray-300">
          Users
        </Link>
      )}
      {user ? (
        <button
          onClick={handleLogout}
          className="text-lg font-medium hover:text-gray-300"
        >
          Logout ({user.email})
        </button>
      ) : (
        <Link to="/login" className="text-lg font-medium hover:text-gray-300">
          Login
        </Link>
      )}
    </nav>
  )
}

export default NavBar
