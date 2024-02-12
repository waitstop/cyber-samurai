import MainLayout from "@components/layouts/MainLayout.tsx";

const RafflePage = () => {
  return (
    <MainLayout className={"bg-violet-accent"}>
      <section className={"container relative overflow-visible pb-64 pt-10"}>
        <div className={"relative"}>
          <img
            alt={"cover_1"}
            className={"h-auto w-full"}
            src={"images/raffle/cover_1.svg"}
          />
          <p className={"fon t-bold mt-2 font-inter leading-snug text-white"}>
            Уникальный продукт CyberSamurai Викторины – представляет собой
            комплексный продукт по проведению интерактивных викторин.
          </p>
          <img
            className={
              "absolute -bottom-16 left-0 right-0 mx-auto translate-y-full"
            }
            src="images/raffle/phone.svg"
            alt="phone"
          />
        </div>
      </section>
      <section className={"bg-zinc-800 py-64"}>
        <h1>
          Это способ интерактивного взаимодействия со зрителями с экранов:
        </h1>
      </section>
    </MainLayout>
  );
};

export default RafflePage;
