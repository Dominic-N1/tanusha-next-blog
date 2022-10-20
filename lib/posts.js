import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { sortByDate } from "@/utils/sort";
import dateFormatter from "@/utils/dateFormatter";

const files = fs.readdirSync(path.join("posts"));

export function getPosts() {
  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");

    const markdownWithMeta = fs.readFileSync(
      path.join("posts", filename),
      "utf-8"
    );

    const { data: data } = matter(markdownWithMeta);
    const frontmatter = {
      ...data,
      date: dateFormatter.format(new Date(data.date)),
    };

    return {
      slug,
      frontmatter,
    };
  });

  return posts.sort(sortByDate);
}
