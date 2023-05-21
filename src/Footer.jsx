import { Github, Google, Twitter, Whatsapp } from "react-bootstrap-icons"

function Footer() {
  return (
    <section className="Footer">
    <h2>LET&apos;S TALK</h2>
        <div className="Footer-container">
            <a href=""><Github size={40}/></a>
            <a href=""><Twitter size={40}/></a>
            <a href=""><Whatsapp size={40}/></a>
            <a href=""><Google size={40}/></a>                
        </div>
        <h6>Ernesto Lopez 2023 &#169;. Derechos Reservados</h6>
    </section>
  )
}

export default Footer