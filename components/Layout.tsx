import Head from "next/head";
import { BaseHead } from "./BaseHead";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";

interface LayoutInt {
  title: string;
  keywords?: string;
  description?: string;
  children: React.ReactNode;
}

export default function Layout({
  title = "ПсихологИНЯ | Psychology | Beauty",
  children,
}: LayoutInt): JSX.Element {
  return (
    <>
      <BaseHead title={title} />
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
      <Footer className="" />
    </>
  );
}
