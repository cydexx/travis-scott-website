import Link from "next/link"
import React from "react"

const SearchIcon = () => {
  return (
    <svg
      className="group "
      width="25"
      height="25"
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.4732 26.4975C21.0764 26.4975 26.4293 21.1446 26.4293 14.5414C26.4293 7.93825 21.0764 2.58533 14.4732 2.58533C7.87002 2.58533 2.51709 7.93825 2.51709 14.5414C2.51709 21.1446 7.87002 26.4975 14.4732 26.4975Z"
        stroke="#C43E1B"
        className="group-hover:stroke-white transition-all duration-300"
        stroke-width="1.8878"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M27.6878 27.7561L25.1708 25.239"
        stroke="#C43E1B"
        className="group-hover:stroke-white transition-all duration-300"
        stroke-width="1.8878"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
const MenuIcon = () => {
  return (
    <svg
      className="h-6 w-6 group group-hover:stroke-white transition-all duration-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="#C43E1B"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M4 6h16M4 12h16M4 18h16"
      />
    </svg>
  )
}
const Header = () => {
  return (
    <header
      aria-label="Site Header"
      className="bg-transparent fixed top-0 z-30 w-full font-salatiga"
    >
      <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between sm:px-6 lg:px-8">
        <div className="flex  items-center ">
          <button
            type="button"
            className="p-2 sm:mr-4  lg:hidden cursor-pointer group"
          >
            <MenuIcon />
          </button>

          <Link
            href="#"
            className="flex text-4xl text-main-color hover:text-white  hover:animate-shake transition-all duration-300 ease-in-out"
          >
            TRAVIS
          </Link>
        </div>

        <div className="flex flex-1 items-center justify-center  text-3xl ">
          <nav
            aria-label="Site Nav"
            className="hidden  lg:flex lg:gap-12 lg:text-md lg:tracking-widest "
          >
            <Link
              href="/"
              className="text-main-color leading-[4rem] hover:text-white transition-all duration-300 "
            >
              all
            </Link>
            <Link
              href="/"
              className="text-main-color leading-[4rem] hover:text-white transition-all duration-300"
            >
              footwear
            </Link>
            <Link
              href="/"
              className="text-main-color leading-[4rem] hover:text-white transition-all duration-300"
            >
              apparel
            </Link>

            <Link
              href="/"
              className="text-main-color leading-[4rem] hover:text-white transition-all duration-300"
            >
              basketball
            </Link>
            <Link
              href="/"
              className="text-main-color leading-[4rem] hover:text-white transition-all duration-300"
            >
              slides
            </Link>
          </nav>
        </div>

        <div className="block   ">
          <Link
            href="/"
            className="flex items-center  text-3xl  text-main-color gap-5 group hover:text-white transition-all duration-300"
          >
            <SearchIcon />
            Search
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
