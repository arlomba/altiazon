import { useRouter } from 'next/router'
import { useRequest } from '../../hooks/useRequest'
import Image from 'next/image'
import StarRating from '../../components/StarRating'
import data from '../../data/data.json'

export default function ProductPage() {
  const {
    query: { id },
  } = useRouter()
  // const { data, error } = useRequest(query.id)

  // if (error) <p>Error fetching data</p>
  // if (!data) <p>Loading...</p>

  const foundProduct = data.find((p) => Number(p.id) === Number(id))

  return (
    <>
      <section className="flex justify-between max-w-5xl mx-auto">
        <div className="flex relative w-96 h-96">
          <Image
            src={foundProduct?.image}
            alt={foundProduct?.title}
            layout="fill"
            objectFit="contain"
          />
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold text-2xl">{foundProduct?.title}</p>
          <div className="flex justify-between mb-4">
            <div className="flex items-end">
              <StarRating rate={foundProduct?.rating.rate} />
              <p className="text-sm ml-1 text-blue-500">
                {foundProduct?.rating.count}
              </p>
            </div>

            <div className="flex">
              <p className="text-xl">{foundProduct?.price.toFixed(2)}€</p>
            </div>
          </div>
          <p className="text-gray-500">{foundProduct?.description}</p>
        </div>
      </section>
    </>
  )
}
