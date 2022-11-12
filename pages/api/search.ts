import fs from "fs";
import path from "path";
import matter from "gray-matter";
import dateFormatter from "../../utils/dateFormatter";
import type { NextApiRequest, NextApiResponse } from "next";
import { PostsInt } from "../../components/Post";

type Data = {
  results: string[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  let posts;
  if (process.env.NODE_ENV === "production") {
    posts = require("../../cache/data").posts;
  } else {
    const files = fs.readdirSync(path.join("posts"));

    posts = files.map((filename) => {
      const slug = filename.replace(".md", "");

      const markdownWithMeta = fs.readFileSync(
        path.join("posts", filename),
        "utf-8"
      );

      const { data: data, content } = matter(markdownWithMeta);
      const frontmatter = {
        ...data,
        date: dateFormatter.format(new Date(data.date)),
      };

      return {
        slug,
        frontmatter,
        content,
      };
    });
  }
  const results = posts.filter(
    ({
      frontmatter: { title, excerpt, category },
      content,
    }: {
      frontmatter: { title: string; excerpt: string; category: string };
      content: string;
    }) => {
      if (!req.query.q) return -1;
      else {
        const q = req.query.q as string;
        title.toLowerCase().indexOf(q) != -1 ||
          excerpt.toLowerCase().indexOf(q) != -1 ||
          category.toLowerCase().indexOf(q) != -1 ||
          content.toLowerCase().indexOf(q) != -1;
      }
    }
  );
  if (process.env.NODE_ENV === "production") {
    res.status(200).json({ results });
  } else {
    res.status(200).json({ results });
  }
}
