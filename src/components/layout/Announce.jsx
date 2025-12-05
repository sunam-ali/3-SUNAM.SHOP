export default function Announce() {
  return (
    <div className="bg-shop-black text-white py-2 px-4 text-center text-sm relative hidden sm:block">
      <p>
        Get 30% OFF on your first purchase.{" "}
        <a href="#" className="underline font-medium">
          Shop Now
        </a>
      </p>
      <button className="absolute right-4 top-2 text-white text-lg leading-none">
        ×
      </button>
    </div>
  );
}
