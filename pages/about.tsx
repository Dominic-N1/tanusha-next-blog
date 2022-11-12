import Layout from "../components/Layout";
import Image from "next/image";

export default function AboutPage() {
  return (
    <Layout title="Обо мне">
      <Image
        src="/images/posts/undraw_powerful_re_frhr.svg"
        alt="Powerful Girl"
        width={1500}
        height={1100}
        className="w-full rounded"
      />
      <h1 className="text-5xl border-b-4 pb-5 font-bold px-10 text-gray-600">
        Давайте знакомиться
      </h1>

      <div className="bg-white shadow-md rounded-lg px-10 py-6 mt-6">
        <h3 className="text-2xl mb-5 text-gray-700">Leaf of Kindness Блог</h3>

        <p className="mb-3 text-justify indent-6 text-gray-800">
          Меня зовут <strong>Иванова Татьяна</strong>. Я Социальный Психолог.
          Посвятила 5 лет учебe в университе на факультете <em>Психология</em>.
          Поняв, что я хочу знать о психологии еще больше, прошла обучение у
          известного зарубежного психолога <strong>Kain Ramsay</strong>. И вот
          уже много лет я лечу человеческие души и сердца. Я работаю под девизом{" "}
          <strong>Здоровый дух - счастливая жизнь.</strong>
        </p>
      </div>
    </Layout>
  );
}
