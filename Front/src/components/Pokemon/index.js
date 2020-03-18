// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Modal,
  Dropdown,
} from 'semantic-ui-react';

import { getSidebarNameCapitalize, findPokemonImage } from 'src/utils/functions';
// == Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files
import heartIcon from 'src/assets/images/heart.svg';
import zapIcon from 'src/assets/images/zap.svg';
// == Import components
import PokemonModal from './PokemonModal';
// Styles
import PokemonStyled from './PokemonStyled';

// == Composant
const Pokemon = ({
  visible,
  pokemon,
  changeSidebarVisibility,
  pokemonMaxHealth,
  isMj,
  changePokemonHealth,
  mjTrainerUsername,
}) => {

  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  
  const handleHealthClick = (e) => {
    console.log('healthbar');
  };
  let options = [];
  for (let i = 0 ; i <= pokemonMaxHealth; i++){
    options.push({ key: i, text: `${i}`, value: i });
  };

  const handleOptionClick = (e) => {
    const healthNumber = e.target.dataset.value;
    changePokemonHealth(mjTrainerUsername, Number(healthNumber));
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

      <div className="desktop" style={{ backgroundColor: `#${pokemon.primary}` }}>
        <div className="pokemon-avatar">
          <Modal
            className="modal-pokemon"
            style={{ width: '95vw', height: '90vh', margin: '4vh auto' }}
            trigger={<div className="avatar-container"><img src={findPokemonImage(`${pokemon.id}.png`)} alt="avatar pokemon" /></div>}
            closeIcon
          >
            <PokemonModal pokemon={pokemon} pokemonMaxHealth={pokemonMaxHealth}/>
          </Modal>
          <div className="exp">
            <span>{pokemon.xp} XP</span>
          </div>
          <div className="energy-container">
            <span>{pokemon.energy}/50</span>
            <img src={zapIcon} alt="energy logo" />
            <div 
              className={(pokemon.energy === 50) ? 'energy-bar rounded' : 'energy-bar'} 
              style={{ width: `${Math.ceil(pokemon.energy * 2)}%` }} 
            />
          </div>
          {isMj && 
            <div 
              className="health-container"
              onClick={handleHealthClick} 
              style={{ cursor: 'pointer' }}
            >
              <Dropdown
                className="span"
                upward
                icon={null}
                scrolling
                trigger={<span>{pokemon.vitality}/{pokemonMaxHealth}</span>}
              >
                <Dropdown.Menu >
                  {options.map((option) => (
                    <Dropdown.Item 
                      key={option.key}
                      onClick={handleOptionClick}
                      data-value={option.value}
                    >
                      {option.text}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <img src={heartIcon} alt="heart logo" />
              <div 
                className={(pokemon.vitality === pokemonMaxHealth) ? 'health-bar rounded' : 'health-bar'} 
                style={{ width: `${Math.ceil(pokemon.vitality / pokemonMaxHealth * 100)}%` }} 
              /> 
            </div>
          }
          {!isMj &&
            <div className="health-container">
              <span>{pokemon.vitality}/{pokemonMaxHealth}</span>
              <img src={heartIcon} alt="heart logo" />
              <div className={(pokemon.vitality === pokemonMaxHealth) ? 'health-bar rounded' : 'health-bar'} style={{ width: `${Math.ceil(pokemon.vitality / pokemonMaxHealth * 100)}%` }} />
            </div>
          }
        </div>
        <div className="pokemon-info">
          <div className="pokemon-presentation">
            <span className="pokemon-name">{pokemon.name}</span>
            <div className="pokemon-types">
              {pokemon.types.map((type) => (
                <span 
                  key={type.id}
                  className="pokemon-type"
                  style={{ backgroundColor: `#${type.color}` }}
                >
                  {type.name}
                </span>
              ))}
            </div>
          </div>
          <div className="pokemon-stats">
            <div className="stat">
              <span className="title"><abbr title="FORCE">FOR</abbr></span>
              <ProgressBar color="#f8cc53" number={pokemon.strength} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="ENDURANCE">END</abbr></span>
              <ProgressBar color="#f8cc53" number={pokemon.endurance} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="CONCENTRATION">CON</abbr></span>
              <ProgressBar color="#f8cc53" number={pokemon.concentration} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="VOLONTE">VOL</abbr></span>
              <ProgressBar color="#f8cc53" number={pokemon.willpower} maxNumber={16} />
            </div>
            <div className="stat">
              <span className="title"><abbr title="DEXTERITE">DEX</abbr></span>
              <ProgressBar color="#f8cc53" number={pokemon.dexterity} maxNumber={16} />
            </div>
          </div>
        </div>
      </div>
    </PokemonStyled>
  );
};

Pokemon.propTypes = {
  visible: PropTypes.bool.isRequired,
  pokemon: PropTypes.object.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  pokemonMaxHealth: PropTypes.number.isRequired,
  isMj: PropTypes.bool.isRequired,
  changePokemonHealth: PropTypes.func.isRequired,
  mjTrainerUsername: PropTypes.string,
};

Pokemon.defaultProps = {
  mjTrainerUsername: '',
}


// == Export
export default Pokemon;
