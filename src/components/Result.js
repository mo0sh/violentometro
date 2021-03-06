import React from 'react';
import PropTypes from 'prop-types';
import { CSSTransitionGroup } from 'react-transition-group';
import green from '../images/green.png';
import red from '../images/red.png';
import yellow from '../images/yellow.png';
import orange from '../images/orange.png';

function Result(props) {
  const resultado = props.quizResult;
  if (resultado === "red") {
    return (
      <CSSTransitionGroup
        className="container result red"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}>
        <div>
          <img className="final-img" src={red} alt="Red"></img>
          <h1>NECESITAS AYUDA PROFESIONAL!!</h1>
          <a href='https://www.gob.mx/inmujeres/es/articulos/redes-de-apoyo?idiom=es'><strong>ACUDE DE INMEDIATO A UNA RED DE APOYO</strong></a>
        </div>
      </CSSTransitionGroup>
    );
  }
  
   if (resultado === "orange") {
	return (
		<CSSTransitionGroup
			className="container result orange"
			component="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}
		>
			<div>
        <img className="final-img" src={orange} alt="Orange"></img>
        <h1>REACCIONA!</h1>
        <h3>No te dejes destruir!</h3>
			</div>
		</CSSTransitionGroup>
	);
  }
  if (resultado === "yellow") {
	return (
		<CSSTransitionGroup
			className="container result yellow"
			component="div"
			transitionName="fade"
			transitionEnterTimeout={800}
			transitionLeaveTimeout={500}
			transitionAppear
			transitionAppearTimeout={500}>
			<div>
        <img className="final-img" src={yellow} alt="Yellow"></img>
        <h1>TEN CUIDADO!</h1>
        <h3>la violencia solo aumentará!</h3>
			</div>
		</CSSTransitionGroup>
	);
  }
  return (
    <CSSTransitionGroup
        className="container result green"
        component="div"
        transitionName="fade"
        transitionEnterTimeout={800}
        transitionLeaveTimeout={500}
        transitionAppear
        transitionAppearTimeout={500}
      >
        <div>
          <img className="final-img" src={green} alt="green"></img>
          <h1>En General, todo parece estar bien.</h1>
          <h3>La base de toda relación es el respeto y la confianza.</h3>
          <a href="https://www.who.int/es/news-room/fact-sheets/detail/violence-against-women" target="_blank" rel="noopener noreferrer">Informate más</a>
        </div>
      </CSSTransitionGroup>
  );

}

Result.propTypes = {
  quizResult: PropTypes.string.isRequired
};

export default Result;
