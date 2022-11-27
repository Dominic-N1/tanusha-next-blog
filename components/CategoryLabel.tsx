import Link from "next/link";

export default function CategoryLabel({ children }: { children: string }) {
  const colorKey = {
    Sovet:
      "bg-gradient-to-t from-gray-900 via-gray-500 to-gray-900 hover:bg-gradient-to-t hover:from-gray-500 hover:via-gray-900 hover:to-gray-500",
    Kniga:
      "bg-gradient-to-t from-gray-800 via-gray-400 to-gray-800 hover:bg-gradient-to-t hover:from-gray-400 hover:via-gray-800 hover:to-gray-400",
    Film: "bg-gradient-to-t from-gray-300 via-gray-700 to-gray-300 hover:bg-gradient-to-t hover:from-gray-700 hover:via-gray-300 hover:to-gray-700",
    Post: "bg-gradient-to-t from-gray-500 via-gray-900 to-gray-500 hover:bg-gradient-to-t hover:from-gray-900 hover:via-gray-500 hover:to-gray-900",
  };
  let category: string;
  let category_ru: string;
  let link: string;
  switch (children.toLowerCase()) {
    case "sovet":
      category = colorKey.Sovet;
      category_ru = "Совет";
      link = "sovet";
      break;
    case "kniga":
      category = colorKey.Kniga;
      category_ru = "Книга";
      link = "book";
      break;
    case "film":
      category = colorKey.Film;
      category_ru = "Фильм";
      link = "film";
      break;
    case "post":
      category = colorKey.Post;
      category_ru = "Пост";
      link = "post";
      break;
    default:
      category = colorKey.Sovet;
      category_ru = "Совет";
      link = "sovet";
      break;
  }
  return (
    <button className={`px-2 py-1 ${category} text-gray-100 font-bold rounded`}>
      <Link href={`/blog/category/${link}`}>{category_ru}</Link>
    </button>
  );
}
