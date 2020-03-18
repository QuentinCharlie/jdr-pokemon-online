// == Import npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import styles
import InfoAttackPopUpStyled from './InfoAttackPopUpStyled';

// == Composant
const InfoAttackPopUp = ({
  name,
  damage,
  accuracy,
  energy,
  category,
  distance,
  effect,
  type,
}) => (
  <InfoAttackPopUpStyled>
    <h3 className="low-height">{name}</h3>
    <p className="low-height">{effect}</p>
    <p className="low-height">Type: {type}</p>
    <p className="high-height">Categorie : {category}</p>
    <p className="high-height">Portée : {distance}</p>
    <p className="high-height">Dégats: {damage}</p>
    <p className="high-height">Précision: {accuracy}</p>
    <p className="high-height">Energie: {energy}</p>
  </InfoAttackPopUpStyled>
);

InfoAttackPopUp.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
};

// == Export
export default InfoAttackPopUp;
