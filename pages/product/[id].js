import Image from 'next/image'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useSWR from 'swr'
import StarRating from '../../components/StarRating'
import { useRequest } from '../../hooks/use-request'

export default function ProductPage() {
  const { query } = useRouter()
  const { data, error } = useRequest(query.id)

  if (error) <p>Error fetching data</p>
  if (!data) <p>Loading...</p>

  return (
    <>
      <section className="flex justify-between max-w-5xl mx-auto">
        <div className="flex relative w-96 h-96">
          {data?.image && (
            <Image
              src={data?.image}
              alt={data?.title}
              layout="fill"
              objectFit="contain"
            />
          )}
        </div>

        <div className="flex flex-col w-1/2">
          <p className="font-bold text-2xl">{data?.title}</p>
          <div className="flex justify-between mb-4">
            <div className="flex items-end">
              <StarRating rate={data?.rating.rate} />
              <p className="text-sm ml-1 text-blue-500">{data?.rating.count}</p>
            </div>

            <div className="flex">
              <p className="text-xl">{data?.price.toFixed(2)}€</p>
            </div>
          </div>
          <p className="text-gray-500">{data?.description}</p>
        </div>
      </section>
    </>
  )
}
