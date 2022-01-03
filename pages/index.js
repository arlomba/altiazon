import Link from 'next/link'
import ProductCard from '../components/ProductCard'

export default function Home({ data }) {
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
