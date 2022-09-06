import { useState } from 'react'
import { BackendResponse, User } from './types'

export const fetchData = async () => {
  const URL = process.env.REACT_APP_BACKEND_URL || '127.0.0.1:5000/users/'

  const res = await fetch(URL)
  const data = await res.json()

  return data
}

export const UserListItem = ({ email, gender, name }: User) => (
  <div className='space-x-2'>
    <span>
      {name.title} {name.first} {name.last}
    </span>
    <span>{gender}</span>
    <span>{email}</span>
  </div>
)

export const App = () => {
  const [data, setData] = useState<BackendResponse>({ countries: [] })
  const [country, setCountry] = useState('')
  const loadData = async () => {
    const d = await fetchData()
    setData(d)
  }

  const usersInCountry =
    data.countries.find((c) => c.name === country)?.users || []

  return (
    <div>
      <div className='btn btn-primary' onClick={loadData}>
        load data
      </div>
      <select
        value={country}
        onChange={(e) => setCountry(e.currentTarget.value)}
        name='country'>
        <option value='' disabled>
          Choose a Country
        </option>
        {data.countries.map((c) => (
          <option key={c.name}>{c.name}</option>
        ))}
      </select>
      <div>
        {usersInCountry.map((u) => (
          <UserListItem {...u} key={u.email}></UserListItem>
        ))}
      </div>
    </div>
  )
}

export default App
