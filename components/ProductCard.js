import Image from 'next/image'
import StarRating from './StarRating'

export default function ProductCard({ product }) {
  const {
    title,
    image,
    price,
    rating: { rate, count },
  } = product

  return (
    <article className="flex flex-col justify-between items-center rounded shadow border hover:border-blue-500 h-full p-4">
      <header className="w-full">
        <figure className="flex flex-col items-center justify-between">
          <div className="relative w-48 h-48">
            <Image src={image} alt={title} layout="fill" objectFit="contain" />
          </div>
          <p className="font-bold text-center text-sm overflow-hidden whitespace-nowrap inline-block text-ellipsis w-80 mt-2">
            {title}
          </p>
        </figure>
      </header>

      <footer className="flex justify-between items-end w-full mt-4">
        <div className="flex items-end">
          <StarRating rate={rate} />
          <p className="text-sm ml-1 text-blue-500">{count}</p>
        </div>

        <p className="text-gray-600 text-xl">
          {price.toFixed(2)}
          <span className="text-base">€</span>
        </p>
      </footer>
    </article>
  )
}
