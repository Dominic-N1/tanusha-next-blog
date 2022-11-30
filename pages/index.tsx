import Link from "next/link";
import Layout from "../components/Layout";
import Post, { PostsInt } from "../components/Post";
import { getPosts } from "../lib/posts";
import { POSTS_PER_PAGE } from "../config/index";

export default function HomePage({ posts }: { posts: PostsInt[] }) {
  return (
    <Layout>
      <h1 className="text-5xl border-b-4 p-5 font-bold">Последние Посты</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.map((post, index) => (
          <Post key={index} post={post} compact={false} />
        ))}
      </div>
      <Link
        href="/blog"
        className="block text-center border border-gray-500 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-gray-900 focus:outline-none focus:shadow-outline w-full"
      >
        Все посты
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, POSTS_PER_PAGE),
    },
  };
}
