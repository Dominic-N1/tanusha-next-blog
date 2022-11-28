export default function handler(req, res) {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/xml");

  // Instructing the Vercel edge to cache the file
  res.setHeader("Cache-control", "stale-while-revalidate, s-maxage=3600");

  // generate sitemap here
  const xml = `https://www.psychology.beauty/ 2022-11-28T14:36:54+00:00 1.00 https://www.psychology.beauty/blog 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/about 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/category/sovet 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/difficult-age 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/toxic-people 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/category/post 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/mother-in-law-relationship 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/easy-breaking-up 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/be-young-inside 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/love-your-partner 2022-11-28T14:36:54+00:00 0.80 https://www.psychology.beauty/blog/page/1 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/page/2 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/page/3 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/category/kniga 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/category/film 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/life-is-beautiful 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/advice-psychologist 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/five-advices 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/dont-be-afrade 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/sharp-corners 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/attack-stop 2022-11-28T14:36:54+00:00 0.64 https://www.psychology.beauty/blog/books-speak 2022-11-28T14:36:54+00:00 0.51 https://www.psychology.beauty/blog/the-pursuit-of-happyness 2022-11-28T14:36:54+00:00 0.51 https://www.psychology.beauty/blog/books-understand 2022-11-28T14:36:54+00:00 0.51 https://www.psychology.beauty/blog/books-good-relationship 2022-11-28T14:36:54+00:00 0.51`;

  res.end(xml);
}
