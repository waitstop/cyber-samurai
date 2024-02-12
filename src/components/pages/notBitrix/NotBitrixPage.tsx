import MainLayout from "@components/layouts/MainLayout.tsx";
import NotBitrixSlider from "@pages/notBitrix/NotBitrixSlider.tsx";
import ContactForm from "@components/ContactForm/ContactForm.tsx";

const NotBitrixPage = () => {
  return (
    <MainLayout className={"bg-violet-accent"}>
      <section className={"container relative md:pt-24 lg:pt-32"}>
        <img
          className={
            "right-0 top-1/2 z-10 h-auto w-full object-cover md:absolute md:w-1/2 md:-translate-y-1/2"
          }
          src="images/october_laravel.png"
          alt="october_laravel"
        />
        <h1
          className={
            "relative z-20 py-5 text-4xl uppercase text-white md:text-6xl"
          }
        >
          Почему
          <br />
          Laravel +<br />
          Winter/
          <br />
          October CMS
        </h1>
      </section>
      <section className={"md:py-10"}>
        <NotBitrixSlider />
      </section>
      <section className={"bg-zinc-800"}>
        <div className="container pt-10 text-white">
          <ContactForm />
        </div>
      </section>
    </MainLayout>
  );
};

export default NotBitrixPage;
