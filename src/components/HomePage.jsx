import About from "../About";
import Expirience from "./Expirience";
import Footer from "./Footer";
import NewHero from "./NewHero";
import Projectos from "./Projectos";
/* import Services from "./Services"; */

//cuando tenga listo el componente se descomentara

export default function HomePage() {
  return (
    <>
        <NewHero />
        <About />
        <Projectos />
        <Expirience />
        {/* <Services /> */}
        <Footer />
    </>
  )
}
