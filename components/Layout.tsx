import Head from "next/head";
import BaseHead from "./BaseHead";
import Footer from "./Footer";
import Header from "./Header";
import Search from "./Search";

interface LayoutInt {
  title: string;
  keywords: string;
  description: string;
  siteName: string;
  siteUrl: string;
  children: React.ReactNode;
}

export default function Layout({
  title,
  keywords,
  description,
  siteName,
  siteUrl,
  children,
}: LayoutInt): JSX.Element {
  return (
    <div>
      <Head>
        <BaseHead
          title={title}
          keywords={keywords}
          description={description}
          siteName={siteName}
          siteUrl={siteUrl}
        />
      </Head>
      <Header />
      <Search />
      <main className="container mx-auto my-7">{children}</main>
      <Footer className="" />
    </div>
  );
}

Layout.defaultProps = {
  title: "ПсихологИНЯ",
  keywords:
    "семейная психология, москва, цена, рейтинг, отзывы, психолог в москве, социальный психолог, семейный психолог, детский психолог, как общаться с ребенком, психолог для личностного роста, прием онлайн, психолог онлайн, психолог тайна, конфиденциальность, от 2000 рублей, более 1000 клиентов, психология, помощь, доброта, беседа, разговор по душам, неудовлетворенность в отношениях, частые конфликты, развод, мысли о разводе, мысли о расставании, проблема отцы и дети, частые недопонимания, каша в голове, перегорание, для себя",
  description:
    "Семейный психолог в Москве. Помощь при перегорании. Психолог семейных отношений, консультации. ⭐ от 2000 рублей/ч ⭐!  Индивидуальный подход, удобный график. ✅ Практика с 2016 года. ✅ Более 1 000 клиентов",
  siteName: "Психологиня",
  siteUrl: "https://leaf-of-kindness.netlify.app/",
};
