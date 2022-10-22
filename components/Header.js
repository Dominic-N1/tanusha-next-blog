import Link from "next/link";
import Image from "next/image";
import Canvas from "./Canvas";

export default function Header() {
  return (
    <header className="bg-gradient-to-br from-gray-900 via-gray-500 to-gray-900 text-fuchsia-300 font-bold shadow w-full">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/">
          <a className="flex flex-nowrap hover:opacity-60 md:w-1/5 title-font font-medium items-center md:justify-start mb-4 md:mb-0">
            <Canvas width="60" height="60">
              <Image src="/leaf-heart.svg" width={40} height={40} alt="logo" />
            </Canvas>
            <span className="ml-3 text-xl whitespace-nowrap">
              Leaf of Kindness
            </span>
          </a>
        </Link>
        <nav className="flex flex-wrap md:w-4/5 items-center justify-end text-base md:ml-auto">
          <Link href="/blog" title="blog">
            <a className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900">
              Blog
            </a>
          </Link>
          <Link href="/about" title="about">
            <a className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900">
              About
            </a>
          </Link>
          <Link
            title="instagram"
            href="https://www.instagram.com/ivanovatanya2508/"
          >
            <a className="mx-5 cursor-pointer uppercase hover:text-fuchsia-900">
              Instagram
            </a>
          </Link>
        </nav>
      </div>
    </header>
  );
}
