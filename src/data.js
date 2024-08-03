import { Link } from "react-router-dom"

export const equipos = [{
    id:1,
    name: "Club San Martin",
    image: "club1.webp",
    jugadores: "7",
    fechaRegistro: "14/07/2019",
    descripción: "El Club San Martin es conocido por su espíritu competitivo y su dedicación al deporte. Con una rica historia en el voleibol regional, el equipo se destaca por su disciplina y cohesión, lo que les ha permitido obtener numerosos títulos a lo largo de los años. Sus entrenamientos rigurosos y su enfoque en la técnica les han convertido en un rival formidable en cualquier torneo."
},{
    id:2,
    name: "Club Olimpyc",
    image: "club2.jpg",
    jugadores: "7",
    fechaRegistro: "25/07/2019",
    descripción: "Club Olimpyc se ha ganado una reputación por su enfoque innovador y dinámico en el voleibol. Integrado por jugadores jóvenes y talentosos, el equipo es conocido por su rapidez y agilidad en la cancha. Su estrategia de juego se basa en una combinación de ofensiva poderosa y defensa sólida, lo que les permite dominar a sus oponentes y mantener a sus fans al borde de sus asientos."
},{
    id:3,
    name: "Club vipers",
    image: "club3.jpg",
    jugadores: "7",
    fechaRegistro: "20/07/2019",
    descripción: "Los Vipers son reconocidos por su ferocidad y energía imparable en la cancha. Este equipo se distingue por su agresividad en el ataque y su capacidad para sorprender a sus adversarios con jugadas inesperadas. Con un enfoque en la formación física y mental, los Vipers están siempre listos para enfrentar cualquier desafío y superar las expectativas."
},{
    id:4,
    name: "Club fenix",
    image: "club4.jpg",
    jugadores: "7",
    fechaRegistro: "11/07/2019",
    descripción: "El Club Fenix es sinónimo de resurgimiento y determinación. Con una trayectoria marcada por la superación de obstáculos, este equipo ha demostrado que la perseverancia y el trabajo en equipo son claves para el éxito. Los jugadores del Fenix destacan por su resiliencia y capacidad para adaptarse, lo que les ha permitido alcanzar nuevos niveles de excelencia en cada temporada."
},{
    id:5,
    name: "Club Albert Einstein",
    image: "club1.webp",
    jugadores: "7",
    fechaRegistro: "04/12/2019",
    descripción: "Inspirado en la genialidad y la creatividad del científico, el Club Albert Einstein se caracteriza por su enfoque estratégico y su capacidad para innovar en el juego. Los jugadores de este equipo son conocidos por su inteligencia táctica y su habilidad para leer a los oponentes, convirtiendo cada partido en una demostración de ingenio y habilidad."
},{
    id:6,
    name: "Don Bosco",
    image: "club2.jpg",
    jugadores: "7",
    fechaRegistro: "10/01/2019",
    descripción: "Con una fuerte tradición y valores sólidos, el Club Don Bosco es respetado tanto dentro como fuera de la cancha. Este equipo enfatiza la importancia de la educación y el desarrollo personal de sus jugadores, lo que se refleja en su juego limpio y su espíritu deportivo. La combinación de talento y principios hace del Don Bosco un equipo ejemplar en la comunidad del voleibol."
},{
    id:7,
    name: "Club Vinto",
    image: "club3.jpg",
    jugadores: "7",
    fechaRegistro: "11/02/2019",
    descripción: "El Club Vinto es conocido por su pasión y dedicación al voleibol. Con una base de jugadores locales comprometidos, este equipo ha crecido y se ha fortalecido a lo largo de los años, convirtiéndose en un contendiente serio en los torneos regionales. Su enfoque en el desarrollo de habilidades y el trabajo en equipo ha forjado una identidad única y una conexión especial con sus seguidores."
},{
    id:8,
    name: "Club Panteras",
    image: "club2.jpg",
    jugadores: "7",
    fechaRegistro: "14/06/2019",
    descripción: "Las Panteras son un equipo que combina fuerza y elegancia en cada partido. Con una alineación de jugadores versátiles y talentosos, este club se destaca por su capacidad para adaptarse a diferentes estilos de juego y situaciones de partido. Su enfoque en la cohesión y la comunicación dentro del equipo les permite ejecutar estrategias complejas con precisión y eficacia, lo que los convierte en un adversario difícil de superar."
    
},
]

export const jugadores = [
    {
      id: 1,
      nombre: "Luis Fernández",
      fechaRegistro: "2024-01-15",
      carnetIdentidad: "1234567",
      numeroCelular: "+591 70234567",
      genero: "M",
      fechaNacimiento: "1995-03-12",
      posicion: "Acomodador",
      equipoId: 3,
      image: "foto perfiles/perfil 1.jpg"
    },
    {
      id: 2,
      nombre: "María Pérez",
      fechaRegistro: "2024-01-20",
      carnetIdentidad: "2345678",
      numeroCelular: "+591 70345678",
      genero: "F",
      fechaNacimiento: "1994-07-25",
      posicion: "Central",
      equipoId: 2,
      image: "foto perfiles/perfil 2.jpg"
    },
    {
      id: 3,
      nombre: "Carlos Gómez",
      fechaRegistro: "2024-02-05",
      carnetIdentidad: "3456789",
      numeroCelular: "+591 70456789",
      genero: "M",
      fechaNacimiento: "1992-11-15",
      posicion: "Receptor",
      equipoId: 1,
      image: "foto perfiles/perfil 3.png"
    },
    {
      id: 4,
      nombre: "Ana Torres",
      fechaRegistro: "2024-02-10",
      carnetIdentidad: "4567890",
      numeroCelular: "+591 70567890",
      genero: "F",
      fechaNacimiento: "1996-05-18",
      posicion: "Libero",
      equipoId: 4,
      image: "foto perfiles/perfil 4.jpg"
    },
    {
      id: 5,
      nombre: "Jorge Morales",
      fechaRegistro: "2024-03-01",
      carnetIdentidad: "5678901",
      numeroCelular: "+591 70678901",
      genero: "M",
      fechaNacimiento: "1993-08-22",
      posicion: "Acomodador",
      equipoId: 6,
      image: "foto perfiles/perfil 5.webp"
    },
    {
      id: 6,
      nombre: "Lucía Fernández",
      fechaRegistro: "2024-03-10",
      carnetIdentidad: "6789012",
      numeroCelular: "+591 70789012",
      genero: "F",
      fechaNacimiento: "1997-09-30",
      posicion: "Central",
      equipoId: 5,
      image: "foto perfiles/perfil 6.jpg"
    },
    {
      id: 7,
      nombre: "Pedro Silva",
      fechaRegistro: "2024-04-01",
      carnetIdentidad: "7890123",
      numeroCelular: "+591 70890123",
      genero: "M",
      fechaNacimiento: "1991-12-02",
      posicion: "Receptor",
      equipoId: 3,
      image: "foto perfiles/perfil 7.jpg"
    },
    {
      id: 8,
      nombre: "Sofia López",
      fechaRegistro: "2024-04-15",
      carnetIdentidad: "8901234",
      numeroCelular: "+591 70901234",
      genero: "F",
      fechaNacimiento: "1995-02-14",
      posicion: "Libero",
      equipoId: 7,
      image: "foto perfiles/perfil 8.webp"
    },
    {
      id: 9,
      nombre: "Ricardo Soto",
      fechaRegistro: "2024-05-01",
      carnetIdentidad: "9012345",
      numeroCelular: "+591 71012345",
      genero: "M",
      fechaNacimiento: "1994-04-19",
      posicion: "Acomodador",
      equipoId: 2,
      image: "foto perfiles/perfil 9.webp"
    },
    {
      id: 10,
      nombre: "Camila Rivas",
      fechaRegistro: "2024-05-10",
      carnetIdentidad: "0123456",
      numeroCelular: "+591 71123456",
      genero: "F",
      fechaNacimiento: "1996-06-21",
      posicion: "Central",
      equipoId: 8,
      image: "foto perfiles/perfil 10.jpg"
    },
    {
      id: 11,
      nombre: "Miguel Martínez",
      fechaRegistro: "2024-06-01",
      carnetIdentidad: "1234568",
      numeroCelular: "+591 71234567",
      genero: "M",
      fechaNacimiento: "1992-07-30",
      posicion: "Receptor",
      equipoId: 4,
      image: "foto perfiles/perfil 11.jpg"
    },
    {
      id: 12,
      nombre: "Laura Martínez",
      fechaRegistro: "2024-06-15",
      carnetIdentidad: "2345679",
      numeroCelular: "+591 71345678",
      genero: "F",
      fechaNacimiento: "1995-12-05",
      posicion: "Libero",
      equipoId: 1,
      image: "foto perfiles/perfil 12.jpg"
    },
    {
      id: 13,
      nombre: "Felipe Ortega",
      fechaRegistro: "2024-07-01",
      carnetIdentidad: "3456780",
      numeroCelular: "+591 71456789",
      genero: "M",
      fechaNacimiento: "1993-03-17",
      posicion: "Acomodador",
      equipoId: 6,
      image: "foto perfiles/perfil 13.jpg"
    },
    {
      id: 14,
      nombre: "Paola Sánchez",
      fechaRegistro: "2024-07-15",
      carnetIdentidad: "4567891",
      numeroCelular: "+591 71567890",
      genero: "F",
      fechaNacimiento: "1994-10-29",
      posicion: "Central",
      equipoId: 5,
      image: "foto perfiles/perfil 14.jpg"
    },
    {
      id: 15,
      nombre: "Oscar Gutiérrez",
      fechaRegistro: "2024-08-01",
      carnetIdentidad: "5678902",
      numeroCelular: "+591 71678901",
      genero: "M",
      fechaNacimiento: "1991-01-25",
      posicion: "Receptor",
      equipoId: 7,
      image: "foto perfiles/perfil 15.webp"
    },
    {
      id: 16,
      nombre: "Natalia Torres",
      fechaRegistro: "2024-08-15",
      carnetIdentidad: "6789013",
      numeroCelular: "+591 71789012",
      genero: "F",
      fechaNacimiento: "1995-08-09",
      posicion: "Libero",
      equipoId: 3,
      image: "foto perfiles/perfil 16.jpg"
    },
    {
      id: 17,
      nombre: "Andrés Ruiz",
      fechaRegistro: "2024-09-01",
      carnetIdentidad: "7890124",
      numeroCelular: "+591 71890123",
      genero: "M",
      fechaNacimiento: "1992-06-10",
      posicion: "Acomodador",
      equipoId: 2,
      image: "foto perfiles/perfil 17.png"
    },
    {
      id: 18,
      nombre: "Isabel Castillo",
      fechaRegistro: "2024-09-15",
      carnetIdentidad: "8901235",
      numeroCelular: "+591 71901234",
      genero: "F",
      fechaNacimiento: "1996-11-12",
      posicion: "Central",
      equipoId: 8,
      image: "foto perfiles/perfil 18.jpg"
    },
    {
      id: 19,
      nombre: "Héctor Morales",
      fechaRegistro: "2024-10-01",
      carnetIdentidad: "9012346",
      numeroCelular: "+591 72012345",
      genero: "M",
      fechaNacimiento: "1994-09-25",
      posicion: "Receptor",
      equipoId: 5,
      image: "foto perfiles/perfil 19.jpg"
    },
    {
      id: 20,
      nombre: "Verónica Silva",
      fechaRegistro: "2024-10-15",
      carnetIdentidad: "0123457",
      numeroCelular: "+591 72123456",
      genero: "F",
      fechaNacimiento: "1997-01-30",
      posicion: "Libero",
      equipoId: 6,
      image: "foto perfiles/perfil 20.avif"
    },
    {
      id: 21,
      nombre: "Juan Pérez",
      fechaRegistro: "2024-11-01",
      carnetIdentidad: "1234569",
      numeroCelular: "+591 72234567",
      genero: "M",
      fechaNacimiento: "1993-12-10",
      posicion: "Acomodador",
      equipoId: 4,
      image: "foto perfiles/perfil 21.jpg"
    },
    {
      id: 22,
      nombre: "Marta Fernández",
      fechaRegistro: "2024-11-15",
      carnetIdentidad: "2345680",
      numeroCelular: "+591 72345678",
      genero: "F",
      fechaNacimiento: "1995-07-21",
      posicion: "Central",
      equipoId: 7,
      image: "foto perfiles/perfil 22.webp"
    },
    {
      id: 23,
      nombre: "Javier Castro",
      fechaRegistro: "2024-12-01",
      carnetIdentidad: "3456781",
      numeroCelular: "+591 72456789",
      genero: "M",
      fechaNacimiento: "1992-10-05",
      posicion: "Receptor",
      equipoId: 1,
      image: "foto perfiles/perfil 23.jpg"
    },
    {
      id: 24,
      nombre: "Valeria Guzmán",
      fechaRegistro: "2024-12-15",
      carnetIdentidad: "4567892",
      numeroCelular: "+591 72567890",
      genero: "F",
      fechaNacimiento: "1996-04-10",
      posicion: "Receptor",
      equipoId: 3,
      image: "foto perfiles/perfil 24.jpg"
    }
]