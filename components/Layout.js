import { useState } from 'react'
import Head from 'next/head'
import Navbar from './Navbar'
import { useRequest } from '../hooks/useRequest'
import localData from '../data/data.json'

export default function Layout({ children }) {
  // const { data, error } = useRequest()

  // if (error) <p>Error fetching data</p>
  // if (!data) <p>Loading...</p>

  // Local data for testing
  const [products, setProducts] = useState(localData)

  return (
    <>
      <Head>
        <title>Altiazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar products={products} />
      <main className="container mx-auto py-12">{children}</main>
    </>
  )
}
