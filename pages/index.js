import Link from 'next/link'
import ProductCard from '../components/ProductCard'
import { useRequest } from '../hooks/useRequest'
import data from '../data/data.json'

export default function Home() {
  // const { data, error } = useRequest()

  // if (error) <p>Error fetching data</p>
  // if (!data) <p>Loading...</p>

  return (
    <>
      <section className="grid md:grid-cols-4 grid-cols-1 gap-6">
        {data?.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            as={`/product/${product.id}`}
          >
            <a>
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </section>
    </>
  )
}
