import { User } from './types'

export const UserListItem = ({ email, gender, name }: User) => (
  <div className='space-x-2'>
    <span>
      {name.title} {name.first} {name.last}
    </span>
    <span>{gender}</span>
    <span>{email}</span>
  </div>
)
