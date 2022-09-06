import { useState } from 'react'

export const fetchData = async () => {
  const URL = process.env.REACT_APP_BACKEND_URL || '127.0.0.1:5000/users'

  const res = await fetch(URL)
  const data = await res.json()

  return data
}

export const App = () => {
  const [data, setData] = useState({})

  const loadData = async () => {
    const d = await fetchData()
    console.log(d)
    setData(d)
  }

  return (
    <div>
      <div className='btn' onClick={loadData}>
        load data
      </div>
      <div>{JSON.stringify(data)}</div>
    </div>
  )
}

export default App
