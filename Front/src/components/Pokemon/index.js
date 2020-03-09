// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Modal,
} from 'semantic-ui-react';

import { getSidebarNameCapitalize } from 'src/utils/functions';
// == Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files
import pokeAvatar from 'src/assets/images/25.png';
import heartIcon from 'src/assets/images/heart.svg';
import zapIcon from 'src/assets/images/zap.svg';
// == Import components
import PokemonModal from './PokemonModal';
// Styles
import PokemonStyled from './PokemonStyled';

// == Composant
const Pokemon = ({ visible, changeSidebarVisibility }) => {
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  return (
    <PokemonStyled>
      <div className="mobile-tablet">
        <div className="pokemon-button" onClick={handleClick} />
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="left"
          visible={visible}
        >
          <div className="pokemon-sidebar">fiche pokémon ici</div>
        </Sidebar>
      </div>

      <div className="desktop">
        <div className="pokemon-avatar">
          <Modal
            className="modal-pokemon"
            style={{ width: '95vw', height: '90vh', margin: '4vh auto' }}
            trigger={<div className="avatar-container"><img src={pokeAvatar} alt="avatar pokemon" /></div>}
            closeIcon
          >
            <PokemonModal />
          </Modal>
          <div className="exp">
            <span>50 XP</span>
          </div>
          <div className="energy-container">
            <span>45/50</span>
            <img src={zapIcon} alt="energy logo" />
            <div className="energy-bar" style={{ width: '90%' }} />
          </div>
          <div className="health-container">
            <span>20/100</span>
            <img src={heartIcon} alt="heart logo" />
            <div className="health-bar" style={{ width: '20%' }} />
          </div>
        </div>
        <div className="pokemon-info">
          <div className="pokemon-presentation">
            <span className="pokemon-name">Pikachu</span>
            <div className="pokemon-types">
              <span className="pokemon-type electrik">
                {/* <img src="https://www.pokebip.com/pokedex-images/types/psy.png" alt="" /> */}
                Electrik
              </span>
              <span className="pokemon-type electrik">
                {/* <img src="https://www.pokebip.com/pokedex-images/types/psy.png" alt="" /> */}
                Electrik
              </span>
            </div>
          </div>
          <div className="pokemon-stats">
            <div className="stat">
              <span className="title"><abbr title="FORCE">FOR</abbr></span>
              <ProgressBar color="#f8cc53" number={2} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="ENDURANCE">END</abbr></span>
              <ProgressBar color="#f8cc53" number={2} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="CONCENTRATION">CON</abbr></span>
              <ProgressBar color="#f8cc53" number={11} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="VOLONTE">VOL</abbr></span>
              <ProgressBar color="#f8cc53" number={6} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="DEXTERITE">DEX</abbr></span>
              <ProgressBar color="#f8cc53" number={9} maxNumber={16} />
            </div>
          </div>
        </div>
      </div>
    </PokemonStyled>
  );
};

Pokemon.propTypes = {
  visible: PropTypes.bool.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
};


// == Export
export default Pokemon;
