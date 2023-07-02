import About from "./About";
import Expirience from "./Expirience";
import Footer from "./Footer";
import NewHero from "./NewHero";
import Projectos from "./Projectos";

export default function HomePage() {
  return (
    <>
        <NewHero />
        <About />
        <Projectos />
        <Expirience />
        <Footer />
    </>
  )
}
