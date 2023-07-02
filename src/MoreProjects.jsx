import { Button } from 'react-bootstrap'
import { ConeStriped } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

export default function MoreProjects() {
  return (
    <section className='more'>
      <div className='more-container'>
        <h1>Esta pagina esta en construccion</h1>
        <ConeStriped size={50}/>
        <Link to='/' relative='path'>
          <Button className='m-4' variant='dark'>
            Volver
          </Button>
        </Link>
      </div>
    </section>
  )
}
