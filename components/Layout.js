import Head from 'next/head'
import Navbar from './Navbar'

export default function Layout({ children, data }) {
  return (
    <>
      <Head>
        <title>Altiazon</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar data={data} />

      <main className="container mx-auto py-12">{children}</main>
    </>
  )
}
