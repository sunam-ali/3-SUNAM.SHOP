import { useState } from "react";
import { useProduct } from "../../context";
import SearchProducts from "../Product/SearchProducts";

export default function Header() {
  const [open, setOpen] = useState(false);
  const { state } = useProduct();

  return (
    <header className="flex border-b border-gray-300 bg-white tracking-wide relative z-50">
      <div className="py-3 w-full flex items-center px-4 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-4 w-full container mx-auto">
          {/* Logo */}
          <a href="#" className="sm:text-2xl text-xl font-bold">
            SUNAM.<span className="text-shop-orange">SHOP</span>
          </a>

          {/* MENU */}
          <div
            className={`${open ? "max-lg:block" : "max-lg:hidden"} lg:block`}
          >
            {/* Close Button (Mobile) */}
            <button
              onClick={() => setOpen(false)}
              className="lg:hidden fixed cursor-pointer top-2 right-2 z-50 rounded-full bg-white w-9 h-9 flex items-center justify-center border border-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-x-icon lucide-x"
              >
                <path d="M18 6 6 18" />
                <path d="m6 6 12 12" />
              </svg>
            </button>

            <ul
              className={`lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-40`}
            >
              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 cursor-pointer">
                <a className="text-[15px]  text-shop-orange block">Home</a>
              </li>

              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 cursor-pointer">
                <a className="text-[15px]  hover:text-shop-orange block">
                  Shop
                </a>
              </li>

              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 cursor-pointer">
                <a className="text-[15px]  hover:text-shop-orange block">
                  Deals
                </a>
              </li>

              <li className="max-lg:border-b max-lg:border-gray-300 max-lg:py-3 cursor-pointer">
                <a className="text-[15px]  hover:text-shop-orange block">
                  New Arrivals
                </a>
              </li>
            </ul>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center space-x-6 sm:space-x-8 max-lg:ml-auto">
            <SearchProducts />

            {/* Wishlist (icon color unchanged!) */}
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                className="cursor-pointer fill-[#333] inline"
                viewBox="0 0 64 64"
              >
                <path
                  d="M45.5 4A18.53 18.53 0 0 0 32 9.86 18.5 18.5 0 0 0 0 22.5C0 40.92 29.71 59 31 59.71a2 2 0 0 0 2.06 0C34.29 59 64 40.92 64 22.5A18.52 18.52 0 0 0 45.5 4ZM32 55.64C26.83 52.34 4 36.92 4 22.5a14.5 14.5 0 0 1 26.36-8.33 2 2 0 0 0 3.27 0A14.5 14.5 0 0 1 60 22.5c0 14.41-22.83 29.83-28 33.14Z"
                  data-original="#000000"
                />
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-shop-orange px-1 py-0 text-xs text-white">
                {state.wishListProducts.length}
              </span>
            </span>

            {/* Cart (icon color unchanged!) */}
            <span className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                className="cursor-pointer fill-[#333] inline"
                viewBox="0 0 512 512"
              >
                <path
                  d="M164.96 300.004h.024c.02 0 .04-.004.059-.004H437a15.003 15.003 0 0 0 14.422-10.879l60-210a15.003 15.003 0 0 0-2.445-13.152A15.006 15.006 0 0 0 497 60H130.367l-10.722-48.254A15.003 15.003 0 0 0 105 0H15C6.715 0 0 6.715 0 15s6.715 15 15 15h77.969c1.898 8.55 51.312 230.918 54.156 243.71C131.184 280.64 120 296.536 120 315c0 24.812 20.188 45 45 45h272c8.285 0 15-6.715 15-15s-6.715-15-15-15H165c-8.27 0-15-6.73-15-15 0-8.258 6.707-14.977 14.96-14.996zM477.114 90l-51.43 180H177.032l-40-180zM150 405c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm167 15c0 24.813 20.188 45 45 45s45-20.188 45-45-20.188-45-45-45-45 20.188-45 45zm45-15c8.27 0 15 6.73 15 15s-6.73 15-15 15-15-6.73-15-15 6.73-15 15-15zm0 0"
                  data-original="#000000"
                ></path>
              </svg>
              <span className="absolute left-auto -ml-1 top-0 rounded-full bg-shop-orange px-1 py-0 text-xs text-white">
                {state.cartedProducts.length}
              </span>
            </span>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setOpen(true)}
              className="lg:hidden cursor-pointer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu-icon lucide-menu"
              >
                <path d="M4 5h16" />
                <path d="M4 12h16" />
                <path d="M4 19h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
