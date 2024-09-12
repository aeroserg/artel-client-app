import { useState, useEffect } from 'react'
import axios from 'axios'

export default function useGetData(url: string) {
  const [data, setData] = useState<any>(null)
  const [loading, setLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url)
        setData(response.data)
      } catch (err) {
        if (axios.isAxiosError(err)) {
          setError(`Axios error: ${err?.response?.data}`)
        } else {
          setError(`Standard error: ${(err as Error).message}`)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [url])

  return { data, loading, error }
}
