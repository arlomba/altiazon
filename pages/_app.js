import Layout from '../components/Layout'
import { useRequest } from '../hooks/useRequest'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const { data, error } = useRequest()

  if (error) return <p>Error fetching data</p>
  if (!data) return <p>Loading...</p>

  return (
    <Layout data={data}>
      <Component {...pageProps} data={data} />
    </Layout>
  )
}

export default MyApp
