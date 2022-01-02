import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar({ products }) {
  const [filteredProducts, setFilteredProducts] = useState([])
  const searchProducts = (value) => {
    const dataFiltered = products.filter((p) =>
      p.title.toLowerCase().includes(value.toLowerCase())
    )

    value !== '' ? setFilteredProducts(dataFiltered) : setFilteredProducts([])
  }

  return (
    <header className="shadow">
      <nav className="flex justify-between items-center p-3">
        <ul className="">
          <li className="">
            <Link href="/" as="/">
              <a className="font-bold">Altiazon</a>
            </Link>
          </li>
        </ul>

        <div className="relative">
          <div className="">
            <input
              className="p-2 border rounded w-96"
              type="text"
              placeholder="Search for products..."
              onChange={(e) => searchProducts(e.target.value)}
            />

            <div className="absolute top-0 bottom-0 right-0 flex items-center pr-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 24 24"
              >
                <path d="M 9 2 C 5.1458514 2 2 5.1458514 2 9 C 2 12.854149 5.1458514 16 9 16 C 10.747998 16 12.345009 15.348024 13.574219 14.28125 L 14 14.707031 L 14 16 L 20 22 L 22 20 L 16 14 L 14.707031 14 L 14.28125 13.574219 C 15.348024 12.345009 16 10.747998 16 9 C 16 5.1458514 12.854149 2 9 2 z M 9 4 C 11.773268 4 14 6.2267316 14 9 C 14 11.773268 11.773268 14 9 14 C 6.2267316 14 4 11.773268 4 9 C 4 6.2267316 6.2267316 4 9 4 z"></path>
              </svg>
            </div>
          </div>

          {filteredProducts.length !== 0 && (
            <div className="absolute flex flex-col w-96 mt-1 bg-white border rounded shadow z-50">
              {filteredProducts.slice(0, 5).map((p, i) => (
                <Link key={i} href={`/product/${p.id}`} as={`/product/${p.id}`}>
                  <a>
                    <div
                      className="flex items-center p-4 hover:bg-gray-100"
                      title={p.title}
                    >
                      <div className="relative w-8 h-8">
                        <Image
                          src={p.image}
                          alt={p.title}
                          layout="fill"
                          objectFit="contain"
                        />
                      </div>

                      <p className="overflow-hidden text-ellipsis inline-block whitespace-nowrap w-80 ml-2 text-gray-600">
                        {p.title}
                      </p>
                    </div>
                  </a>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            viewBox="0 0 24 24"
          >
            <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z" />
          </svg>
        </div>
      </nav>
    </header>
  )
}
