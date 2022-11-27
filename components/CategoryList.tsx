import Link from "next/link";

export default function CategoryList({ categories }: { categories: string[] }) {
  const newCategories = categories.map((category) => {
    let category_en: string;
    let category_ru: string;
    switch (category.toLowerCase()) {
      case "sovet":
        category_en = "sovet";
        category_ru = "Совет";
        break;
      case "kniga":
        category_en = "kniga";
        category_ru = "Книга";
        break;
      case "film":
        category_en = "film";
        category_ru = "Фильм";
        break;
      case "post":
        category_en = "post";
        category_ru = "Пост";
        break;
      default:
        category_en = "sovet";
        category_ru = "Совет";
        break;
    }

    return { category_ru: category_ru, category_en: category_en.toLowerCase() };
  });

  return (
    <div className="w-11/12 p-5 bg-white rounded-lg shadow-md mt-6 mx-auto">
      <h3 className="text-2xl bg-gray-400 text-white p-3 rounded">
        Блог по Категориям
      </h3>
      <ul className="divide-y divide-gray-300">
        {newCategories.map((category, index) => (
          <Link key={index} href={`/blog/category/${category.category_en}`}>
            <li className="p-4 cursor-pointer hover:bg-gray-50">
              {category.category_ru}
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
}
