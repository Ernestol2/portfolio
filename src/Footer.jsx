import { Github, Google, Twitter, Whatsapp } from "react-bootstrap-icons"


function Footer() {

  return (
    <section className="Footer" id="contact">
    <h2 className="pb-4">HABLEMOS</h2>
    <h6>Algun proyecto en mente?</h6>
    <h6>Chefernestolopez@gmail.com</h6>
        <div className="Footer-container">
            <a href="https://github.com/Ernestol2" target="_blank" rel="noopener noreferrer"><Github size={40}/></a>
            <a href="https://twitter.com/Ernestlopez2" target="_blank" rel="noopener noreferrer"><Twitter size={40}/></a>
            <a href="https://wa.me/+56951307891" target="_blank" rel="noopener noreferrer"><Whatsapp size={40}/></a>
            <a href="mailto:chefernestolopez@gmail.com" target="_blank" rel="noopener noreferrer"><Google size={40}/></a>                
        </div>
        <h6>Ernesto Lopez 2023 &#169;. Derechos Reservados</h6>
    </section>
  )
}

export default Footer;