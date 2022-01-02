export default function StarRating({ rate }) {
  const MAX_STAR_RATING = 5

  return (
    <>
      {[...Array(MAX_STAR_RATING)].map((el, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          className={`w-6 h-6 stroke-yellow-600 ${
            Math.round(rate) > i ? 'fill-yellow-300' : 'fill-white'
          }`}
          viewBox="0 0 24 24"
        >
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
        </svg>
      ))}
    </>
  )
}
