import Link from "next/link";
import Image from "next/image";
import Canvas from "./Canvas";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-500 to-gray-900 text-fuchsia-300 font-bold shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          href="/"
          className="flex flex-nowrap hover:opacity-60 md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0"
        >
          <Image src="/logoti.svg" width={60} height={60} alt="logo" />
          {/* <Canvas width="60" height="60">
          </Canvas> */}
          <span className="ml-3 text-xl whitespace-nowrap">Психологиня</span>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link
            href="/blog"
            title="blog"
            className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900"
          >
            Блог
          </Link>
          <Link
            href="/about"
            title="about"
            className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900 whitespace-nowrap"
          >
            Обо мне
          </Link>
        </nav>
      </div>
    </header>
  );
}
