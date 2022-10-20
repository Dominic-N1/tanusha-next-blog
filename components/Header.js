import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-600 to-gray-900 text-fuchsia-300 font-bold shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Image src="/leaf-heart.svg" width={40} height={40} alt="logo" />
            <span className="ml-3 text-xl hover:text-fuchsia-900">
              Leaf of Kindness
            </span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/blog">
            <a className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900">
              Blog
            </a>
          </Link>
          <Link href="/about">
            <a className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900">
              About
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
