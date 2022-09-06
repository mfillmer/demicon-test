import { fetchData } from './fetchData'
import { BackendResponse } from './types'

export const LoadDataButton = ({
  callback,
}: {
  callback: (data: BackendResponse) => void
}) => {
  const loadData = async () => {
    const data = await fetchData()
    callback(data)
  }

  return (
    <button className='btn btn-primary' onClick={loadData}>
      load data
    </button>
  )
}
