import ButtonGradient from "./assets/svg/ButtonGradient";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Services from "./components/Services";

const App = () => {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Services/>
        <Experience/>
        <Contact/>
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
};

export default App;
