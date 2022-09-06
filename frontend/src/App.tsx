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
    <form
      className='form-control max-w-[80ch] mx-auto'
      onSubmit={(e) => e.preventDefault()}>
      <header className='flex p-1 border-b border-gray-200 space-x-2'>
        <LoadDataButton callback={setData} />
        <CountrySelector
          value={country}
          setValue={setCountry}
          items={data.countries.map((c) => c.name)}
        />
      </header>
      <main>
        <h1 className='my-2 text-lg'>Demicon Test App</h1>
        <UserList users={usersInCountry} />
      </main>
    </form>
  )
}

export default App
