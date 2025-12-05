export default function Rating({ value = 5 }) {
  const roundedValue = Math.round(value)
  return (
    <>
      {Array.from({ length: 5 }).map((_, index) => (
        <svg
          className={`w-3.5 h-3.5 ${
            index < roundedValue ? "fill-shop-orange" : "fill-[#CED5D8]"
          }`}
          viewBox="0 0 14 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          key={index}
        >
          <path d="M7 0L9.4687 3.60213L13.6574 4.83688L10.9944 8.29787L11.1145 12.6631L7 11.2L2.8855 12.6631L3.00556 8.29787L0.342604 4.83688L4.5313 3.60213L7 0Z" />
        </svg>
      ))}
    </>
  );
} 
