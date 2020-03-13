/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';

// Import Utils
import { findPokemonImage } from 'src/utils/functions';
import { typesColors } from 'src/utils/typesColors';
import {
  affinityTable,
  getAttackMultiplicatorAndMessage,
} from 'src/utils/affinityTable';

// == Import files for styles
import pokemonSprite from 'src/assets/images/pokemon/pikachu.gif';

// == Import style
import PokemonModalStyled from './PokemonModalStyled';


// == Composant
const PokemonModal = ({ pokemon, pokemonMaxHealth}) => {
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
                        {/* <tr>
                          <td>Genre</td>
                          <td>Mâle</td>
                        </tr> */}
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
                    <span className="title">ÉNERGIE</span>
                    <ProgressBar color="lightblue" number={pokemon.energy} maxNumber={50} />
                  </div>
                  <div className="stat">
                    <span className="title">VITALITÉ</span>
                    <ProgressBar color="lightgreen" number={pokemon.vitality} maxNumber={pokemonMaxHealth} />
                  </div>
                </div>
              </div>
              <div className="pokemon-description-appearance">
                <div className="table-container">
                  <table>
                    {/* @todo: see with product-owner if needed because not in DB */}
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
                </div>
                <div className="pokemon-sprite">
                  {/* @todo: dynamize when sprite folder ready */}
                  <img src={pokemonSprite} alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="stats">
            <div className="stats-stat">
              <div className="stat-container">
                <div className="stat">
                  <span className="title">FORCE</span>
                  <ProgressBar color="yellow" number={pokemon.strength} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">ENDURANCE</span>
                  <ProgressBar color="yellow" number={pokemon.endurance} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">CONCENTRATION</span>
                  <ProgressBar color="yellow" number={pokemon.concentration} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">VOLONTÉ</span>
                  <ProgressBar color="yellow" number={pokemon.willpower} maxNumber={16} />
                </div>
                <div className="stat">
                  <span className="title">DEXTERITÉ</span>
                  <ProgressBar color="yellow" number={pokemon.dexterity} maxNumber={16} />
                </div>
              </div>
            </div>
            <div className="stats-sensibilities">
              {/* @todo: refactor this  */}
              <div className="type type-table-head">Sensibilités</div>
              <div 
                className="type type-combat"
                style={{ backgroundColor: typesColors.Combat }}
              >
                Combat x{
                  getAttackMultiplicatorAndMessage(
                    affinityTable.Combat[type1],
                    affinityTable.Combat[type2]
                  ).multiplicator
                }
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
            {pokemon.xp} XP
          </div>
          <div className="attack-list">
            {pokemon.attacks.map((attack) => (
              <div className="attack" key={attack.id}>{attack.name}</div>
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
