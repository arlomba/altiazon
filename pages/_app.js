import Layout from '../components/Layout'
import { useRequest } from '../hooks/useRequest'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { data, error } = useRequest()

  if (error) <p>Error fetching data</p>
  if (!data) <p>Loading...</p>

  return (
    <Layout data={data}>
      <Component {...pageProps} data={data} />
    </Layout>
  )
}

export default MyApp
