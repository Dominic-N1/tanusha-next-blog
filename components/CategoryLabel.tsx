import Link from "next/link";

export default function CategoryLabel({ children }: { children: string }) {
  const colorKey = {
    Совет:
      "bg-gradient-to-t from-gray-900 via-gray-500 to-gray-900 hover:bg-gradient-to-t hover:from-gray-500 hover:via-gray-900 hover:to-gray-500",
    Книга:
      "bg-gradient-to-t from-gray-800 via-gray-400 to-gray-800 hover:bg-gradient-to-t hover:from-gray-400 hover:via-gray-800 hover:to-gray-400",
    Фильм:
      "bg-gradient-to-t from-gray-300 via-gray-700 to-gray-300 hover:bg-gradient-to-t hover:from-gray-700 hover:via-gray-300 hover:to-gray-700",
    Пост: "bg-gradient-to-t from-gray-500 via-gray-900 to-gray-500 hover:bg-gradient-to-t hover:from-gray-900 hover:via-gray-500 hover:to-gray-900",
  };
  let category: string;

  switch (children) {
    case "Совет":
      category = colorKey["Совет"];
      break;
    case "Книга":
      category = colorKey["Книга"];
      break;
    case "Фильм":
      category = colorKey["Фильм"];
      break;
    case "Пост":
      category = colorKey["Пост"];
      break;
    default:
      category = colorKey["Пост"];
      break;
  }

  return (
    <button className={`px-2 py-1 ${category} text-gray-100 font-bold rounded`}>
      <Link href={`/blog/category/${children.toLowerCase()}`}>{children}</Link>
    </button>
  );
}
