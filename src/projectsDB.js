import colorFlipper from './images/color-flipper.png'
import drumMachine from './images/drum-machine.png'
import Ecommerce from './images/sushi-store.png'
import calculatorReact from './images/calculator-react.png'
import portafolio from './images/portafolio.png'
import pomodoroClock from './images/pomodoro-clock.png'
import privateRoutes from './images/rutas-privadas2.png';
import crudTareas from './images/shop-list2.png';
import crudProductos from './images/fantasy-store.png'





const projects = [
    {
        id: 0,
        name:'Color Flipper',
        description: 'Proyecto para generar colores hex aleatorios usando HTML, CSS y javaScript. Todo con un simple click.',
        imageUrl: `${colorFlipper}`,
        url: 'https://hex-color-generator-el.netlify.app/',
    },
    {
        id: 1,
        name:'Drum Machine',
        description: 'Proyecto para recrear una bateria. Una pequeña pantalla muestra el sonido reproducido.',
        imageUrl: `${drumMachine}`,
        url: 'https://super-torte-46389c.netlify.app/',
    },
    {
        id: 2,
        name:'E-commerce',
        description: 'Proyecto creado con React. Usando un context API para manejar el estado global de la aplicacion.',
        imageUrl: `${Ecommerce}`,
        url: 'https://jocular-crumble-48888e.netlify.app/',
    },
    {
        id: 3,
        name:'javaScript Calculator',
        description: 'Proyecto creado con React y bootstrap para los estilos. Una simple pero muy eficiente calculadora.',
        imageUrl: `${calculatorReact}`,
        url: 'https://new-calculator-elopez.netlify.app/',
    },
    {
        id: 4,
        name:'Portafolio',
        description: 'Vite.js, React-router, React-bootstrap, React-lazy-load son algunos de los paquetes que se usaron para su construccion.',
        imageUrl: `${portafolio}`,
        url: 'https://ernesto-lopez-portfolio.netlify.app/',
    },
    {
        id: 5,
        name:'Pomodoro Clock',
        description: 'Reloj de cuenta regresiva desarrollado con javaScript. Simula un reloj para descansar despues de un periodo de trabajo determinado.',
        imageUrl: `${pomodoroClock}`,
        url: 'https://bucolic-mooncake-46cb13.netlify.app/',
    },
    {
        id: 6,
        name:'Private Routes-JWT',
        description: 'Las tecnologias usadas en este proyecto fueron: React, React-Router, JWT, Mongoose, MongoDB, Bcrypt, Express,Bootstrap, Axios & Fetch.',
        imageUrl: `${privateRoutes}`,
        url: 'https://super-crostata-0b6c03.netlify.app',
    },
    {
        id: 7,
        name:'CRUD de Tareas',
        description: 'En este proyecto usamos el patron de diseño MVC (modelo vista controlador), Nodejs, Mongoose, MongoDB, Express, Bootstrap.',
        imageUrl: `${crudTareas}`,
        url: 'https://crudtareas.onrender.com',
    },
    {
        id: 8,
        name:'CRUD de Productos',
        description: 'This is my very last project.',
        imageUrl: `${crudProductos}`,
        url: 'https://fantasys-esther.netlify.app/',
    },
    

]

export default projects