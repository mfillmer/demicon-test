import { User } from './types'
import { UserListItem } from './UserListItem'

export const UserList = ({ users }: { users: User[] }) => (
  <div>
    {users.map((u) => (
      <UserListItem {...u} key={u.email}></UserListItem>
    ))}
  </div>
)
