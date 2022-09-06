import { User } from './types'
import { UserListItem } from './UserListItem'

export const UserList = ({ users }: { users: User[] }) =>
  !users.length ? null : (
    <table className='table w-full'>
      <thead>
        <tr>
          <th>Name</th>
          <th>Gender</th>
          <th>Email</th>
        </tr>
      </thead>

      <tbody>
        {users.map((u) => (
          <UserListItem {...u} key={u.email}></UserListItem>
        ))}
      </tbody>
    </table>
  )
