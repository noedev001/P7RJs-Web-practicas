import React from "react";
import { connect } from "react-redux";
import maps from "../assets/maplol.svg";

const Titulares = ({ titulares, quitarTitular }) => {
  return (
    <section>
      <h2>Titulares</h2>
      <div className="cancha">
        {titulares.map((j) => (
          <article className="titular" key={j.id}>
            <div>
              <img src={j.foto} alt={j.nombre} />
              <button onClick={() => quitarTitular(j)}>X</button>
            </div>
            <p>{j.nombre}</p>
          </article>
        ))}
        <img src={maps} alt="Mapa de League of Legend" className="maps" />
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  titulares: state.titulares,
});

const mapDispatchToProps = (dispatch) => ({
  quitarTitular(jugador) {
    dispatch({
      type: "QUITAR_TITULAR",
      jugador,
    });
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Titulares);