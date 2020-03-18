/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';
import AttackButton from 'src/components/Attacks/AttackButton';

// Import Utils
import { findPokemonImage, findTypeImage } from 'src/utils/functions';
import { typesColors } from 'src/utils/typesColors';
import {
  affinityTable,
  getAttackMultiplicatorAndMessage,
} from 'src/utils/affinityTable';

// == Import files for styles
import heartIcon from 'src/assets/images/heart.svg';
import zapIcon from 'src/assets/images/zap.svg';
import pokemonSprite from 'src/assets/images/pokemon/pikachu.gif';

// == Import style
import PokemonModalStyled from './PokemonModalStyled';


// == Composant
const PokemonModal = ({ pokemon, pokemonMaxHealth }) => {
  const type1 = pokemon.types[0].name;
  let type2 = null;
  if (pokemon.types.length > 1) {
    type2 = pokemon.types[1].name;
  }

  return (
    <PokemonModalStyled>
      <Modal.Header className="modal-header"><h1>{pokemon.name}</h1></Modal.Header>
      <Modal.Content className="modal-content">
        <div className="wrapper-left">
          <div className="pokemon">
            <div className="pokemon-avatar">
              <div className="pokemon-avatar-container">
                <img className="modal-pokemon-avatar" src={findPokemonImage(`${pokemon.id}.png`)} alt="" />
              </div>
            </div>
            <div className="pokemon-description">
              <div className="pokemon-description-infos">
                <div className="pokemon-description-infos-basics">
                  <div className="table-container">
                    <table>
                      <tbody>
                        <tr>
                          <td style={{ textAlign: 'right' }}>#</td>
                          <td>{pokemon.id}</td>
                        </tr>
                        <tr>
                          <td>{pokemon.types.length < 2 ? 'Type' : 'Types'}</td>
                          <td>
                            {
                              pokemon.types.length < 2 ?
                                type1 :
                                `${type1} ${type2}`
                            }
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="pokemon-description-infos-vital">
                  <div className="stat">
                    {/* <span className="title">ÉNERGIE</span> */}
                    <ProgressBar color="#98bfe6" number={pokemon.energy} maxNumber={50} />
                    <img src={zapIcon} alt="energy logo" />
                  </div>
                  <div className="stat">
                    {/* <span className="title">VITALITÉ</span> */}
                    <ProgressBar color="#19cd70" number={pokemon.vitality} maxNumber={pokemonMaxHealth} />
                    <img src={heartIcon} alt="health logo" />
                  </div>
                </div>
              </div>
              <div className="pokemon-description-appearance">
                {/* <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>Taille</td>
                        <td>112cm</td>
                      </tr>
                      <tr>
                        <td>Poids</td>
                        <td>35kg</td>
                      </tr>
                    </tbody>
                  </table>
                </div> */}
                <div className="pokemon-sprite">
                  <img src={findPokemonImage(`${pokemon.id}.gif`)} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stats-stat">
              <div className="stat-container">
                <div className="stat">
                  <span className="title">FORCE</span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.strength} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">ENDURANCE</span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.endurance} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">CONCENTRATION</span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.concentration} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">VOLONTÉ</span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.willpower} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">DEXTERITÉ</span>
                  <ProgressBar color={`#${pokemon.primary}`} number={pokemon.dexterity} maxNumber={16} />
                </div>
              </div>
            </div>
            <div className="stats-sensibilities">
              <div className="type-table-head">
                <span>Faiblesses</span>
              </div>
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
          <div className="text">
            <div className="text-background"></div>
            <div className="text-history"></div>
            <div className="text-notes"></div>
          </div>
        </div>
        <div className="wrapper-right">
          <div className="xp">
            <span>{pokemon.xp} XP</span>
          </div>
          <div className="attack-list">
            {pokemon.attacks.map((attack) => (
              <div className="attack" style={{ backgroundColor: `#${attack.type.color}`}} key={attack.id}>
                <div className="attack-name">{attack.name}</div>
                <div className="attack-icons">
                  <div className={`attack-category ${attack.category}`}>
                    {attack.category}
                  </div>
                  <div className={`attack-distance ${attack.distance}`}>
                    {attack.distance}
                  </div>
                </div>
                <div className="effect">
                  {attack.effect}
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
      </Modal.Content>
    </PokemonModalStyled>
  );
};

PokemonModal.propTypes = {
  pokemon: PropTypes.object.isRequired,
  pokemonMaxHealth: PropTypes.number.isRequired,
};


// == Export
export default PokemonModal;
