import Link from "next/link";

export default function CategoryLabel({ children }) {
  const colorKey = {
    Совет: "bg-yellow-600",
    Книга: "bg-blue-600",
    HTML: "bg-green-600",
    Совет2: "bg-purple-600",
  };

  return (
    <button
      className={`px-2 py-1 ${colorKey[children]} text-gray-100 font-bold rounded`}
    >
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </button>
  );
}
