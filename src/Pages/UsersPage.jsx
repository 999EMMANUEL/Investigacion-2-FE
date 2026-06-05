import { useContext } from 'react'
import { Navigate } from '@tanstack/react-router'
import { AuthContext } from '../Context/AuthContext.jsx'
import UsersList from '../Components/UsersList'
import AddUserButton from '../Components/AddUserButton'

const ROLE_CLAIM = 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role'

const UsersPage = () => {
  const { user } = useContext(AuthContext)

  if (!user) return <Navigate to="/login" />

  const role = user[ROLE_CLAIM] || user.role
  if (role !== 'admin') return <Navigate to="/" />

  return (
    <div className="p-4">
      <AddUserButton />
      <UsersList />
    </div>
  )
}

export default UsersPage
