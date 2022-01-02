import useSWR from 'swr'

const FAKE_STORE_API_URL = 'https://fakestoreapi.com/products'

export const useRequest = (id = '') => {
  const fetcher = (url) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR(`${FAKE_STORE_API_URL}/${id}`, fetcher)

  return { data, error }
}
