import "./technologies.css";
import MainLayout from "@components/layouts/MainLayout.tsx";
import { Link } from "react-router-dom";
import ContactForm from "@components/ContactForm/ContactForm.tsx";
import { routesPaths } from "@providers/router/routesPaths.ts";

const TechnologiesPage = () => {
  return (
    <MainLayout className={"bg-red-500 text-white"}>
      <section className={"container gap-x-5 py-10 md:flex"}>
        <img
          className={
            "mx-auto mb-5 aspect-video h-auto w-full rounded-md object-cover md:hidden"
          }
          src="images/tech/cover_1.png"
          alt="cover_1"
        />
        <img
          className={"hidden h-1/3 w-1/3 rounded-2xl object-cover md:block"}
          src="images/tech/cover_1_desktop.png"
          alt="cover_1"
        />
        <div>
          <h1 className={"text-3xl uppercase"}>
            Про
            <br />
            технологии
          </h1>
          <img
            className={
              "mx-auto my-5 aspect-video w-full rounded-md object-cover md:hidden"
            }
            src="images/tech/cover_2.png"
            alt="cover_2"
          />
          <p>
            Мы топчем за наших заказчиков и поэтому ведём разработку с
            использованием самого современного, стабильного технологического
            стека, дающего гарантию работоспособности сайта на многие годы
            вперёд.
          </p>
          <br />
          <p>
            Живя в данной парадигме и основываясь на нашей экспертизе мы
            осознанно не используем конструкторы и модульные продукты для
            создания сайтов, тем самым избегая постоянной/периодической
            поддержки и обновлений установленных модулей и шаблонов, сохраняя
            нервы и деньги наших заказчиков.
          </p>
        </div>
      </section>
      <section className={"bg-black py-5"}>
        <div className={"container justify-between md:flex"}>
          <div>
            <h2 className={"mb-5 text-xl uppercase md:text-3xl"}>
              Наш
              <br className={"hidden md:block"} /> техностек
            </h2>
            <Link
              className={
                "mt-5 hidden w-fit rounded-md bg-purple-500 px-4 py-2.5 md:flex"
              }
              to={routesPaths.NOT_BITREX}
            >
              Почему не Битрикс24?
            </Link>
          </div>
          <div className={"stack-grid order-2"}>
            <div>
              <div>
                <img src="images/tech/vue.svg" alt="vue" />
                <span>Vue</span>
              </div>
              <div>
                <img src="images/tech/tailwindcss.svg" alt="vue" />
                <span>Tailwind</span>
              </div>
              <p>Фронтенд</p>
            </div>

            <div>
              <div>
                <img src="images/tech/laravel.svg" alt="vue" />
                <span>Laravel</span>
              </div>
              <div>
                <img src="images/tech/python.svg" alt="vue" />
                <span>Python</span>
              </div>
              <p>Бэкенд</p>
            </div>

            <div>
              <div>
                <img src="images/tech/kotlin.svg" alt="vue" />
                <span>Kotlin</span>
              </div>
              <div>
                <img src="images/tech/react.svg" alt="vue" />
                <span>React Native</span>
              </div>
              <div>
                <img src="images/tech/swift.svg" alt="vue" />
                <span>Swift</span>
              </div>
              <p>Мобайл</p>
            </div>

            <div>
              <div>
                <img src="images/tech/figma.svg" alt="vue" />
                <span>Figma</span>
              </div>
              <p>UX/UI</p>
            </div>
          </div>
          <Link
            className={
              "mt-5 block w-fit rounded-md bg-purple-500 px-4 py-2.5 md:hidden"
            }
            to={routesPaths.NOT_BITREX}
          >
            Почему не Битрикс24?
          </Link>
        </div>
      </section>
      <section className={"container bg-red-500 py-10"}>
        <h1 className={"font-bold uppercase leading-tight md:text-3xl"}>
          А еще мы собрали&nbsp;
          <span className={"text-black"}>Библиотеку Страданий</span>, в ней вы
          можете найти свою боль и наше решение
        </h1>
        <Link to={routesPaths.PAIN_SOLUTIONS}>
          <img
            className={"my-5 aspect-video w-full rounded-md object-cover"}
            src="images/tech/cover_3.png"
            alt="cover_3"
          />
        </Link>
        <Link
          className={"button w-fit bg-purple-500 md:mx-auto"}
          to={routesPaths.PAIN_SOLUTIONS}
        >
          Посочувствовать
        </Link>
      </section>
      <section className={"bg-zinc-800 pt-10"}>
        <div className={"container"}>
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default TechnologiesPage;
