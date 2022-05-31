import { createStore } from 'redux';

const initialState = {
    jugadores: [
        {
            id: 1,
            nombre: "Juan Carlos",
            foto: "https://img.freepik.com/foto-gratis/joven-sonriente-celebrando-victoria-su-equipo-favorito_231208-2282.jpg?w=740&t=st=1653179161~exp=1653179761~hmac=53816476614412643a4300463e145de1fabf32a3bf8dd7058cf0228848089869"
        },
        {
            id: 2,
            nombre: "Beto Quiroga",
            foto: 'https://img.freepik.com/foto-gratis/cliente-masculino-positivo-que-presenta-nuevo-producto_74855-3636.jpg?t=st=1653178565~exp=1653179165~hmac=34e5c0167c2de515306b20e7f80a1d89c35fef8fdc2932583b98d6c13fbb25ab&w=740'
        },
        {
            id: 3,
            nombre: "Alejo Garcia",
            foto: 'https://img.freepik.com/foto-gratis/retrato-hombre-atractivo-satisfecho-contento-feliz-camisa-moda-mezclilla-que-muestra-su-dedo-indice-esquina-superior-derecha_295783-1217.jpg?w=740&t=st=1653179057~exp=1653179657~hmac=a8c15161e88e039e7b9f26853f0f1a73ee7067561dc0153e1b05c2ffb3907052',
        },
        {
            id: 4,
            nombre: "Juan Disain",
            foto: 'https://img.freepik.com/foto-gratis/hombre-caucasico-joven-contra-pared-azul-aislo-puntos-dedo-pulgar-lejos-riendo-despreocupado_1187-64543.jpg?w=740',
        },
        {
            id: 5,
            nombre: "Alvaro Felipe",
            foto: 'https://img.freepik.com/foto-gratis/joven-confiado_1098-20868.jpg?w=740&t=st=1653260796~exp=1653261396~hmac=78d1b641c5f84ef67925540e7b39e2d86a44d3ab234dcaabf2cec8dee5c57460',
        },
        {
            id: 6,
            nombre: "Alexis Lozada",
            foto: 'https://img.freepik.com/foto-gratis/retrato-joven-satisfecho-celebrando-exito_171337-10186.jpg?w=740&t=st=1653260825~exp=1653261425~hmac=e5f2b16594cf71965f339b22a56dc0f7e2f9f31775310e6274090e711aea5e50',
        },
        {
            id: 7,
            nombre: "Harold Puebla",
            foto: 'https://img.freepik.com/foto-gratis/chico-joven-atractivo-feliz-posando_176420-29981.jpg?w=740&t=st=1653260827~exp=1653261427~hmac=70d4ddcad065e6ced256fd2e89905f0ccf3e091729464c3acc63934ebaa1b016',
        },
        {
            id: 8,
            nombre: "Rodrigo Quispe",
            foto: 'https://img.freepik.com/foto-gratis/retrato-hombre-negocios-sonriente-vestido-traje_171337-143.jpg?w=740&t=st=1653260830~exp=1653261430~hmac=86e3fd8ae94d3d38475d9e290f82de84a0e2d1da14cad95479b4a7a032bc60ff',
        },
        {
            id: 9,
            nombre: "Alejo Rodriguez",
            foto: 'https://img.freepik.com/foto-gratis/hombre-llevando-camiseta-gesticular_23-2149393657.jpg?w=740&t=st=1653260804~exp=1653261404~hmac=16571e5fb236ae670ac14b7070e6d4ad312347b1856c846d375d6b8bbce4609e',
        },
        {
            id: 10,
            nombre: "Beto Duran",
            foto: 'https://img.freepik.com/foto-gratis/adolescente-fuerte-camiseta-roja_1149-75.jpg?w=740&t=st=1653260859~exp=1653261459~hmac=d3e422e65a17e56675eaa4f13a83b823abd122e23216cb141d03b21600f8ee93',
        },
    ],
    titulares: [],
    suplentes: [],
}

const reducerEntrenador = (state = initialState, action) => {
    if (action.type === 'AGREGAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id)
        }
    }

    if (action.type === 'AGREGAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.concat(action.jugador),
            jugadores: state.jugadores.filter(j => j.id !== action.jugador.id),
        }
    }
    if (action.type === 'QUITAR_TITULAR') {
        return {
            ...state,
            titulares: state.titulares.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador),
        }
    }
    if (action.type === 'QUITAR_SUPLENTE') {
        return {
            ...state,
            suplentes: state.suplentes.filter(j => j.id !== action.jugador.id),
            jugadores: state.jugadores.concat(action.jugador)
        }
    }
    return (state);
};

export default createStore(reducerEntrenador);