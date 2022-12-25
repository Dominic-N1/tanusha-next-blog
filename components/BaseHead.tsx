import * as React from "react";
import Head from "next/head";
import { withRouter, Router } from "next/router";
export interface BaseHeadProps {
  title: string;
  description?: string;
  keywords?: string;
  image?: string;
  children?: React.ReactNode;
}

export const BaseHead = withRouter(
  ({
    title,
    description = "Семейный психолог. Помощь при перегорании. Психолог семейных отношений, консультации. ⭐ от 2000 рублей/ч ⭐!  Индивидуальный подход, удобный график. ✅ Практика с 2016 года. ✅ Более 1 000 клиентов",
    keywords = "psychology | beauty, семейная психология, москва, цена, рейтинг, отзывы, психолог в москве, социальный психолог, семейный психолог, детский психолог, как общаться с ребенком, психолог для личностного роста, прием онлайн, психолог онлайн, психолог тайна, конфиденциальность, от 2000 рублей, более 1000 клиентов, психология, помощь, доброта, беседа, разговор по душам, неудовлетворенность в отношениях, частые конфликты, развод, мысли о разводе, мысли о расставании, проблема отцы и дети, частые недопонимания, каша в голове, перегорание, для себя",
    image = "/logoti.svg",
    router,
    children,
  }: BaseHeadProps & { router: Router }) => {
    return (
      <Head>
        {/* Global Metadata  */}
        {/* <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Primary Meta Tags  */}
        {title != null && <title key="title">{title}</title>}
        {description != null && (
          <meta name="description" key="description" content={description} />
        )}
        <meta httpEquiv="Content-Language" content="ru_RU" />
        <link rel="icon" href="favicon.ico" type="image/x-icon" />
        <meta name="revisit-after" content="30 days" />
        <meta name="author" content="Domscript" />
        {/* <meta name="generator" content={generator} /> */}
        <meta name="keywords" content={keywords} />
        <meta name="description" content={description} />
        <meta name="news_keywords" content={keywords} />
        <meta name="next-head-count" content="8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,Chrome=1" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <meta name="google" content="notranslate" />
        <link rel="canonical" href="https://psychology.beauty/" />
        <meta
          name="google-site-verification"
          content="NYz0IgL9fgIhWQHOrVMln-FXmyTPWM9n59gLTyodih8"
        />
        {/* OPEN GRAPH */}
        <meta property="og:type" key="og:type" content="website" />
        <meta
          property="og:url"
          key="og:url"
          // content={`https://psychology.beauty/${
          //   router.asPath.split(/[\?\#]/)[0]
          // }`}
          content={`https://psychology.beauty/`}
        />
        {title != null && (
          <meta property="og:title" content={title} key="og:title" />
        )}
        {description != null && (
          <meta
            property="og:description"
            key="og:description"
            content={description}
          />
        )}
        <meta
          property="og:image"
          key="og:image"
          content={`https://psychology.beauty/${image}`}
        />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="Психологиня" />
        <meta property="og:image" content={"https://psychology.beauty/"} />
        {/* TWITTER */}
        <meta
          name="twitter:card"
          key="twitter:card"
          content="summary_large_image"
        />
        <meta property="twitter:url" content="https://psychology.beauty/" />
        {title != null && (
          <meta name="twitter:title" key="twitter:title" content={title} />
        )}
        {description != null && (
          <meta
            name="twitter:description"
            key="twitter:description"
            content={description}
          />
        )}
        <meta
          name="twitter:image"
          key="twitter:image"
          content={`https://psychology.beauty/${image}`}
        />
        <meta name="twitter:site" key="twitter:site" content="@psychology" />
        <meta
          name="twitter:creator"
          key="twitter:creator"
          content="@psychology"
        />
        {children}
      </Head>
    );
  }
);
