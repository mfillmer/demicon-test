export const fetchData = async () => {
  const URL = process.env.REACT_APP_BACKEND_URL || '127.0.0.1:5000/users/'

  const res = await fetch(URL)
  const data = await res.json()

  return data
}
