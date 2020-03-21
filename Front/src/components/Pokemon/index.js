// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Modal,
  Dropdown,
} from 'semantic-ui-react';

import { getSidebarNameCapitalize, findPokemonImage, findTypeImage } from 'src/utils/functions';
import { typesColors } from 'src/utils/typesColors';
import {
  affinityTable,
  getAttackMultiplicatorAndMessage,
} from 'src/utils/affinityTable';

// == Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files
import heartIcon from 'src/assets/images/heart.svg';
import zapIcon from 'src/assets/images/zap.svg';
import pokeballIcon from 'src/assets/images/mobile-icons/pokeballIcon.png';
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

  let options = [];
  for (let i = 0; i <= pokemonMaxHealth; i++) {
    options.push({ key: i, text: `${i}`, value: i });
  };

  const handleOptionClick = (e) => {
    const healthNumber = e.target.dataset.value;
    changePokemonHealth(mjTrainerUsername, Number(healthNumber));
  };

  const type1 = pokemon.types[0].name;
  let type2 = null;
  if (pokemon.types.length > 1) {
    type2 = pokemon.types[1].name;
  }


  return (
    <PokemonStyled>
      <div className="mobile-tablet">
        <div className="pokemon-button" onClick={handleClick}>
          <img src={pokeballIcon} alt="pokeball icon" />
        </div>
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="left"
          visible={visible}
        >
          <div className="pokemon-sidebar">
            <div className="top-wrapper">
              <div className="pokemon">
                <div className="pokemon-left">
                  <div className="pokemon-avatar">
                    <img src={findPokemonImage(`${pokemon.id}.png`)} alt="avatar pokemon" />
                  </div>
                  <div className="exp">
                    {pokemon.xp} XP
                  </div>
                </div>
                <div className="pokemon-right">
                  <div className="pokemon-description">
                    <span># {pokemon.id}</span>
                    <span>Nom : {pokemon.name}</span>
                    <div className="types">
                      <span>Type(s) : </span>
                      {pokemon.types.map((type) => (
                        <span key={`mobile-type-${type.id}`}>{type.name} </span>
                      ))}

                    </div>
                  </div>
                  <div className="basic-stats">
                    <div className="energy-container">
                      <span>{pokemon.energy}/50</span>
                      <img src={zapIcon} alt="energy logo" />
                      <div
                        className={(pokemon.energy === 50) ? 'energy-bar rounded' : 'energy-bar'}
                        style={{ width: `${Math.ceil(pokemon.energy * 2)}%` }}
                      />
                    </div>
                    <div className="health-container">
                      <span>{pokemon.vitality}/{pokemonMaxHealth}</span>
                      <img src={heartIcon} alt="heart logo" />
                      <div className={(pokemon.vitality === pokemonMaxHealth) ? 'health-bar rounded' : 'health-bar'} style={{ width: `${Math.ceil(pokemon.vitality / pokemonMaxHealth * 100)}%` }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="right-wrapper">
                <div className="attacks">
                  {pokemon.attacks.map((attack) => (
                    <div className="attack" style={{ backgroundColor: `#${attack.type.color}` }}>
                      <div className="attack-name">{attack.name}</div>
                      <div className="attack-icons">
                        <div className={`attack-category ${attack.category}`}>
                          {attack.category}
                        </div>
                        <div className={`attack-distance ${attack.distance}`}>
                          {attack.distance}
                        </div>
                      </div>
                      <div className="attack-stats">
                        <div className="attack-stat">
                          <div>Dégats</div>
                          <div>{attack.damage}</div>
                        </div>
                        <div className="attack-stat">
                          <div>Précision</div>
                          <div>{attack.accuracy}</div>
                        </div>
                        <div className="attack-stat">
                          <div>Energie</div>
                          <div>{attack.energy}</div>
                        </div>
                      </div>
                      <img className="type" src={findTypeImage(`${attack.type.name}.png`)} alt="type logo" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="bottom-wrapper">
              <div className="stats">
                <div className="stat">
                  <span className="title"><abbr title="FORCE">FOR</abbr></span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.strength} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="ENDURANCE">END</abbr></span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.endurance} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="CONCENTRATION">CON</abbr></span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.concentration} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="VOLONTE">VOL</abbr></span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.willpower} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title"><abbr title="DEXTERITE">DEX</abbr></span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.dexterity} maxNumber={16} />
                </div>

              </div>
              <div className="sensibilities">
                {/* <div className="type-table-head">
                  <span>Faiblesses</span>
                </div> */}
                <div
                  className="type type-combat"
                  style={{ backgroundColor: typesColors.Combat }}
                >
                  Combat x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Combat[type1],
                      affinityTable.Combat[type2]
                    ).multiplicator}
                  <img src={findTypeImage(`Combat.png`)} alt="logo type" />
                </div>
                <div className="type type-dragon"
                  style={{ backgroundColor: typesColors.Dragon }}
                >
                  Dragon x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Dragon[type1],
                      affinityTable.Dragon[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Dragon.png`)} alt="logo type" />
                </div>
                <div className="type type-eau"
                  style={{ backgroundColor: typesColors.Eau }}
                >
                  Eau x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Eau[type1],
                      affinityTable.Eau[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Eau.png`)} alt="logo type" />
                </div>
                <div className="type type-electrik"
                  style={{ backgroundColor: typesColors.Electrik }}
                >
                  Electrik x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Electrik[type1],
                      affinityTable.Electrik[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Electrik.png`)} alt="logo type" />
                </div>
                <div className="type type-feu"
                  style={{ backgroundColor: typesColors.Feu }}
                >
                  Feu x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Feu[type1],
                      affinityTable.Feu[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Feu.png`)} alt="logo type" />
                </div>
                <div className="type type-glace"
                  style={{ backgroundColor: typesColors.Glace }}
                >
                  Glace x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Glace[type1],
                      affinityTable.Glace[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Glace.png`)} alt="logo type" />
                </div>
                <div className="type type-insecte"
                  style={{ backgroundColor: typesColors.Insecte }}
                >
                  Insecte x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Insecte[type1],
                      affinityTable.Insecte[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Insecte.png`)} alt="logo type" />
                </div>
                <div className="type type-normal"
                  style={{ backgroundColor: typesColors.Normal }}
                >
                  Normal x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Normal[type1],
                      affinityTable.Normal[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Normal.png`)} alt="logo type" />
                </div>
                <div className="type type-plante"
                  style={{ backgroundColor: typesColors.Plante }}
                >
                  Plante x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Plante[type1],
                      affinityTable.Plante[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Plante.png`)} alt="logo type" />
                </div>
                <div className="type type-poison"
                  style={{ backgroundColor: typesColors.Poison }}
                >
                  Poison x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Poison[type1],
                      affinityTable.Poison[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Poison.png`)} alt="logo type" />
                </div>
                <div className="type type-psy"
                  style={{ backgroundColor: typesColors.Psy }}
                >
                  Psy x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Psy[type1],
                      affinityTable.Psy[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Psy.png`)} alt="logo type" />
                </div>
                <div className="type type-roche"
                  style={{ backgroundColor: typesColors.Roche }}
                >
                  Roche x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Roche[type1],
                      affinityTable.Roche[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Roche.png`)} alt="logo type" />
                </div>
                <div className="type type-sol"
                  style={{ backgroundColor: typesColors.Sol }}
                >
                  Sol x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Sol[type1],
                      affinityTable.Sol[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Sol.png`)} alt="logo type" />
                </div>
                <div className="type type-spectre"
                  style={{ backgroundColor: typesColors.Dragon }}
                >
                  Spectre x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Spectre[type1],
                      affinityTable.Spectre[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Spectre.png`)} alt="logo type" />
                </div>
                <div className="type type-vol"
                  style={{ backgroundColor: typesColors.Vol }}
                >
                  Vol x{
                    getAttackMultiplicatorAndMessage(
                      affinityTable.Vol[type1],
                      affinityTable.Vol[type2]
                    ).multiplicator
                  }
                  <img src={findTypeImage(`Vol.png`)} alt="logo type" />
                </div>
              </div>
            </div>
          </div>
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
          <PokemonModal pokemon={pokemon} pokemonMaxHealth={pokemonMaxHealth} />
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
          <div className="health-container">
            <Dropdown
              className="span"
              upward
              icon={null}
              scrolling
              trigger={
                <span style={{ cursor: 'pointer' }}>
                  {pokemon.vitality}/{pokemonMaxHealth}
                </span>
              }
            >
              <Dropdown.Menu >
                {options.map((option) => (
                  <Dropdown.Item
                    key={`pokemon-option-key-${option.key}`}
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
    </PokemonStyled >
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
