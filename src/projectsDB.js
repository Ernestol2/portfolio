import colorFlipper from './images/color-flipper.png'
import drumMachine from './images/drum-machine.png'
import Ecommerce from './images/sushi-store.png'
import calculatorReact from './images/calculator-react.png'
import portafolio from './images/portafolio.png'
import pomodoroClock from './images/pomodoro-clock.png'
import privateRoutes from './images/rutas-privadas2.png';
import crudTareas from './images/shop-list2.png';
import crudProductos from './images/fantasy-store.png'
import solucioneseyf from './images/soluciones.png'
import pagination from './images/pagination.png'
import postgresql from './images/postgresql.png'

const projects = [
    {
        id: 9,
        name:'Landing Page',
        description: 'Proyecto para ofrecer servicios de ingenieria',
        details: ["React", "Bootstrap"],
        imageUrl: `${solucioneseyf}`,
        url: 'https://soluciones-eyf-ca.netlify.app',
    },
    {
        id: 10,
        name:'Pagination',
        description: 'Implementando pagination, filtrado por categorias, filtrado por busqueda',
        details: ["React", "Bootstrap", "Axios", "React-Router-dom", "MongoDB", "Node", "Express"],
        imageUrl: `${pagination}`,
        url: 'https://pagination-crud-mern.netlify.app',
    },
    {
        id: 8,
        name:'CRUD de Productos',
        description: 'Proyecto para una Chef Pastelera. Frontend credo con React. Backend creado con node puede actualizar sus productos con imagenes',
        details: ["Vite", "Bootstrap", "Nodejs", "MongoDB", "Express", "Multer", "JWT", "Bcrypt", "Dotenv", "uuid", "Axios", "Proptypes", "Universal-cookie"],
        imageUrl: `${crudProductos}`,
        url: 'https://fantasys-esther.netlify.app/',
    },
    {
        id: 6,
        name:'Private Routes-JWT',
        description: 'Las tecnologias usadas en este proyecto fueron: React, React-Router, JWT, Mongoose, MongoDB, Bcrypt, Express,Bootstrap, Axios & Fetch.',
        details: ["axios", "React-Router", "universal-cookie", "React", "Bootstrap"],
        imageUrl: `${privateRoutes}`,
        url: 'https://super-crostata-0b6c03.netlify.app',
    },
    {
        id: 0,
        name:'Color Flipper',
        description: 'Proyecto para generar colores hex aleatorios usando HTML, CSS y javaScript. Todo con un simple click.',
        details: ["DOM", "Math", "querySelector", "getElementById"],
        imageUrl: `${colorFlipper}`,
        url: 'https://hex-color-generator-el.netlify.app/',
    },
    {
        id: 1,
        name:'Drum Machine',
        description: 'Proyecto para recrear una bateria. Una pequeña pantalla muestra el sonido reproducido.',
        details: ["Vite", "React Hooks", "useEffect", "useState", "map"],
        imageUrl: `${drumMachine}`,
        url: 'https://super-torte-46389c.netlify.app/',
    },
    {
        id: 2,
        name:'E-commerce',
        description: 'Proyecto creado con React. Usando un context API para manejar el estado global de la aplicacion.',
        details: ["Firebase", "Bootstrap", "React-Router", "getElementById", "ContextAPI", "Reducer", "localStorage" ],
        imageUrl: `${Ecommerce}`,
        url: 'https://jocular-crumble-48888e.netlify.app/',
    },
    {
        id: 3,
        name:'javaScript Calculator',
        description: 'Proyecto creado con React y bootstrap para los estilos. Una simple pero muy eficiente calculadora.',
        details: ["React", "Math.js", "Bootstrap", "Grid", "React-Hooks",],
        imageUrl: `${calculatorReact}`,
        url: 'https://new-calculator-elopez.netlify.app/',
    },
    {
        id: 4,
        name:'Portafolio',
        description: 'Vite.js, React-router, React-bootstrap, React-lazy-load son algunos de los paquetes que se usaron para su construccion.',
        details: ["Vite", "React-hooks", "useParams", "Bootstrap", "CSS"],
        imageUrl: `${portafolio}`,
        url: 'https://ernesto-lopez-portfolio.netlify.app/',
    },
    {
        id: 5,
        name:'Pomodoro Clock',
        description: 'Reloj de cuenta regresiva desarrollado con javaScript. Simula un reloj para descansar despues de un periodo de trabajo determinado.',
        details: ["React", "React-hooks", "TimeFormatter", "setTimeout"],
        imageUrl: `${pomodoroClock}`,
        url: 'https://bucolic-mooncake-46cb13.netlify.app/',
    },
    {
        id: 7,
        name:'CRUD de Tareas',
        description: 'En este proyecto usamos el patron de diseño MVC (modelo vista controlador), Nodejs, Mongoose, MongoDB, Express, Bootstrap.',
        details: ["Node.js", "Express", "Handlebars", "mongoose", "MongoDB", "morgan", "nodemon", "Babel"],
        imageUrl: `${crudTareas}`,
        url: 'https://crudtareas.onrender.com',
    },
    {
        id: 11,
        name:'CRUD PostgreSQL',
        description: 'simple crud para crear, editar, eliminar empleados',
        details: ["Node", "ejs", "Express", "mysql2", "pg"],
        imageUrl: `${postgresql}`,
        url: 'https://node-mysql-crud.onrender.com/',
    }

]

export default projects