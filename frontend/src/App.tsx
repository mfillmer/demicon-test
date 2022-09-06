import { useState } from 'react'
import { CountrySelector } from './CountrySelector'
import { LoadDataButton } from './LoadDataButton'
import { BackendResponse } from './types'
import { UserList } from './UserList'

export const App = () => {
  const [data, setData] = useState<BackendResponse>({ countries: [] })
  const [country, setCountry] = useState('')
  const usersInCountry =
    data.countries.find((c) => c.name === country)?.users || []

  return (
    <div>
      <LoadDataButton callback={setData} />
      <CountrySelector
        value={country}
        setValue={setCountry}
        items={data.countries.map((c) => c.name)}
      />
      <UserList users={usersInCountry} />
    </div>
  )
}

export default App
