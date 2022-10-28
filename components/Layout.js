import Head from "next/head";
import Header from "./Header";
import Search from "./Search";

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head lang="ru-RU">
        <title>{title}</title>
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <link
          rel="icon"
          href="/leaf-heart.svg"
          sizes="any"
          type="image/svg+xml"
        />
      </Head>

      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
    </div>
  );
}

Layout.defaultProps = {
  title: "Добро пожаловать, Leaf of kindness",
  keywords: "психология, помощь, доброта, беседа, разговор по душам",
  description: "Помощь в решении запутанных проблем",
};
