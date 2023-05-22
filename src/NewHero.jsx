import laptop from './images/laptop.jpg';

function NewHero() {
  return (
    <section className="Hero align-items-stretch" id='hero'>
        <div className="Hero-container animate__animated animate__fadeInUp">
            <img src={laptop} alt="working space setup" />
            <h1>Ernesto Lopez</h1>
            <h3>I&apos;m a Full-Stack JavaScript Junior Developer</h3>
        </div>
    </section>
  )
}

export default NewHero;