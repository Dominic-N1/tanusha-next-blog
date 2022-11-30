import { writeFileSync } from "fs";
import { globby } from "globby";
import prettier from "prettier";

const POSTS_PER_PAGE = 6; // needs change to be dependent
const category = ["sovet", "kniga", "film", "post"]; // needs change to be dependent

async function generate() {
  const prettierConfig = await prettier.resolveConfig("./.prettierrc.js");
  const pages = await globby([
    "pages/*.tsx",
    "pages/blog/index.tsx",
    "pages/blog/category/*.tsx",
    "pages/blog/page/*.tsx",
    "posts/**/*.md",
    "!pages/_*.tsx",
    "!pages/api",
    "!pages/404.tsx",
    "pages/about.tsx",
  ]);

  const pagesNum = Math.ceil(
    pages.filter((el) => el.startsWith("posts/")).length / POSTS_PER_PAGE
  );
  pages.splice(pages.indexOf("pages/blog/page/[pageIndex].tsx"), 1);
  pages.splice(pages.indexOf("pages/blog/category/[category_name].tsx"), 1);
  for (let i = 1; i <= pagesNum; ++i) {
    pages.push(`/blog/page/${i}`);
  }
  for (let i = 0; i < category.length; ++i) {
    pages.push(`/blog/category/${category[i]}`);
  }
  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${pages
          .map((page) => {
            const path = page
              .replace("pages", "")
              .replace("!pages/404.tsx", "404")
              .replace("!pages/about", "about")
              .replace("posts", "/blog")
              .replace(".tsx", "")
              .replace(".md", "");
            const route =
              path === "/index" ? "/" : path === "/blog/index" ? "/blog" : path;
            console.log(route);
            return `
              <url>
                  <loc>${`https://www.psychology.beauty${route}`}</loc>
                  <lastmod>${new Date().toISOString()}</lastmod>
                  <priority>${
                    route === "/"
                      ? 1.0
                      : route === "/blog"
                      ? 0.9
                      : route.includes("/page/")
                      ? 0.64
                      : 0.8
                  }</priority>
              </url>
            `;
          })
          .join("")}
    </urlset>
    `;

  const formatted = prettier.format(sitemap, {
    ...prettierConfig,
    parser: "html",
  });

  // eslint-disable-next-line no-sync
  writeFileSync("public/sitemap.xml", formatted);
}

generate();
