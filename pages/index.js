import Link from 'next/link'
import ProductCard from '../components/ProductCard'

export default function Home({ data }) {
  return (
    <>
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-4 justify-items-center mx-8 lg:mx-0">
        {data?.map((product) => (
          <Link
            key={product.id}
            href={`/product/${product.id}`}
            as={`/product/${product.id}`}
          >
            <a className="w-full">
              <ProductCard product={product} />
            </a>
          </Link>
        ))}
      </section>
    </>
  )
}
