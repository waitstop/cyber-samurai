import Header from "@components/header/Header.tsx";


const HomePage = () => {
    return (
        <main className={"bg-purple-accent text-white min-h-screen"}>
            <Header/>
            <section className={"container"}>
                <img className={"my-2.5 w-full h-auto"} src="assests/images/october_laravel.png" alt="october_laravel"/>
                <h1 className={"font-druk uppercase font-bold text-3xl"}>Почему laravel + winter/october CMS</h1>
            </section>
        </main>
    );
};

export default HomePage;