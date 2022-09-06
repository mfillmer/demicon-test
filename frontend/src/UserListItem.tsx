import { User } from './types'

export const UserListItem = ({ email, gender, name }: User) => (
  <tr>
    <td>
      {name.title} {name.first} {name.last}
    </td>
    <td>{gender}</td>
    <td>
      <a className='link' href={`mailto:${email}`}>
        {email}
      </a>
    </td>
  </tr>
)
