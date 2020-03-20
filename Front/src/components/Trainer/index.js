/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
  Modal,
  Dropdown,
  Popup,
} from 'semantic-ui-react';

// == Import files
import heartIcon from 'src/assets/images/heart.svg';
import greyPokeball from 'src/assets/images/pokeball.png';
import trainerIcon from 'src/assets/images/mobile-icons/trainerIcon.png';
// == Items img Import
// Balls
import pokeball from 'src/assets/images/inventory/balls/pokeball.png';
import superball from 'src/assets/images/inventory/balls/superball.png';
// Materials
import map from 'src/assets/images/inventory/materiel/carte.png';
// Medicine
import herbeRappel from 'src/assets/images/inventory/medicaments/herbe-rappel.png';


// == Import utils
import { getSidebarNameCapitalize, findTrainerImage, findPokemonImage } from 'src/utils/functions';
// == Import components
import TrainerModal from './TrainerModal';
import ProgressBar from 'src/components/ProgressBar';

// == Import Styles
import TrainerStyled from './TrainerStyled';

// == Composant
const Trainer = ({
  visible,
  trainer,
  pokemon,
  changeSidebarVisibility,
  isMj,
  changeTrainerHealth,
  mjTrainerUsername
}) => {
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
  };
  let options = [];
  for (let i = 0; i <= 10; i++) {
    options.push({ key: i, text: `${i}`, value: i });
  };

  const handleOptionClick = (e) => {
    const healthNumber = e.target.dataset.value;
    console.log(mjTrainerUsername);
    console.log(healthNumber);
    changeTrainerHealth(mjTrainerUsername, Number(healthNumber));
  };
  return (
    <TrainerStyled>
      <div className="mobile-tablet">
        <div className="trainer-button" onClick={handleClick}>
          <img src={trainerIcon} alt="trainer icon"/>
        </div>
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="left"
          visible={visible}
        >
          <div className="trainer-sidebar">
            <div className="top-wrapper">
              <div className="trainer-wrapper">
                <div className="trainer-avatar">
                  <img src={findTrainerImage(`${trainer.name}.png`)} alt="trainer avatar" />
                </div>
                <div className="trainer-info">
                  <p>Nom : {trainer.name}</p>
                  <p>Nom : {trainer.gender === 'M' ? 'Homme' : 'Femme'}</p>
                  <p>Age : {trainer.age}</p>
                  <p>Taille : {trainer.height}</p>
                  <p>Poids : {trainer.weight}</p>
                  <p>Peau : {trainer.skin}</p>
                  <p>Yeux : {trainer.eyes}</p>
                  <p>Cheveux : {trainer.hair}</p>
                  <p>Corpulence : {trainer.corpulence}</p>
                </div>
              </div>
              <div className="trainer-additional-info">
                <div className="trainer-team">
                  <div className="pokemon" style={{ backgroundColor: `${pokemon.primary}` ? `#${pokemon.primary}` : 'lightgray' }}>
                    <img
                      src={findPokemonImage(`${pokemon.id}.png`)}
                      style={{ backgroundColor: `${pokemon.primary}` ? `#${pokemon.primary}` : 'lightgray' }}
                      alt=""
                    />
                  </div>
                  <div className="pokemon empty">
                    <img src={greyPokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={greyPokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={greyPokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={greyPokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={greyPokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={greyPokeball} alt="" />
                  </div>

                </div>
                <div className="trainer-right-wrapper">
                  <div className="trainer-spendables">
                    <div className="money">
                      <span>{trainer.money} ₽</span>
                    </div>
                    <div className="exp">
                      <span>{trainer.exp} XP</span>
                    </div>
                  </div>
                  <div className="inventory">
                    <div className="inventory-item">
                      <div className="item-infos">
                        <Popup
                          content={<div className="item-description">Cela sert à emprisonner un pokémon inoncent contre son gré afin de le faire combattre d'autres pokémon capturés à ma guise"</div>}
                          trigger={<img className="item-img" src={pokeball} alt="" />}
                        />
                        <div className="item-name">Pokéball</div>
                      </div>
                      <div className="item-quantity">x12</div>
                    </div>
                    <div className="inventory-item">
                      <div className="item-infos">
                        <Popup
                          content={
                            <div className="item-description">Cela sert à emprisonner un pokémon inoncent contre son gré afin de le faire combattre d'autres pokémon capturés à ma guise"</div>
                          }
                          trigger={
                            <img className="item-img" src={superball} alt="" />
                          }
                        />
                        <div className="item-name">Superball</div>
                      </div>
                      <div className="item-quantity">x3</div>
                    </div>
                    <div className="inventory-item">
                      <Popup
                        content={
                          <div className="item-description">Cela sert à se repérer dans les contrées perdues de Hyrule"</div>
                        }
                        trigger={(
                          <div className="item-infos">
                            <img className="item-img" src={map} alt="" />
                            <div className="item-name">Carte</div>
                          </div>
                        )}
                      />
                      <div className="item-quantity">x1</div>
                    </div>
                    <div className="inventory-item">
                      <Popup
                        content={
                          <div className="item-description">Her</div>
                        }
                        trigger={(
                          <div className="item-infos">
                            <img className="item-img" src={herbeRappel} alt="" />
                            <div className="item-name">Herbe Rappel</div>
                          </div>
                        )}
                      />
                      <div className="item-quantity">x6</div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
            <div className="bottom-wrapper">
              <div className="stats-stats">
                <div className="stat">
                  <span className="title">FORCE</span>
                  <ProgressBar color="#19cd70" number={trainer.strength} maxNumber={5} />
                </div>
                <div className="stat">
                  <span className="title">ENDURANCE</span>
                  <ProgressBar color="#19cd70" number={trainer.endurance} maxNumber={5} />
                </div>
                <div className="stat">
                  <span className="title">CONCENTRATION</span>
                  <ProgressBar color="#19cd70" number={trainer.concentration} maxNumber={5} />
                </div>
                <div className="stat">
                  <span className="title">VOLONTÉ</span>
                  <ProgressBar color="#19cd70" number={trainer.willpower} maxNumber={5} />
                </div>
                <div className="stat">
                  <span className="title">DEXTERITÉ</span>
                  <ProgressBar color="#19cd70" number={trainer.dexterity} maxNumber={5} />
                </div>
                <div className="stat">
                  <span className="title">VITALITÉ</span>
                  <ProgressBar color="#19cd70" number={trainer.vitality} maxNumber={10} />
                </div>

              </div>
              <div className="stats-skills">
                <table>
                  <tbody>
                    <tr>
                      <th>Comp&eacute;tences</th>
                      <th>Points</th>
                      <th>Sp&eacute;cialisation</th>
                    </tr>
                    <tr>
                      <td>Bricolage</td>
                      <td>{trainer.do_it_yourself}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Charisme</td>
                      <td>{trainer.charisma}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Combat</td>
                      <td>{trainer.fighting}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Conduite</td>
                      <td>{trainer.driving}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>D&eacute;tection</td>
                      <td>{trainer.detection}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Discr&eacute;tion</td>
                      <td>{trainer.furtivity}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Expression</td>
                      <td>{trainer.expression}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Psychologie</td>
                      <td>{trainer.phychology}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Sport</td>
                      <td>{trainer.sport}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Survie</td>
                      <td>{trainer.survival}</td>
                      <td>&nbsp;</td>
                    </tr>
                  </tbody>
                </table>
                <table>
                  <tbody>
                    <tr>
                      <th>Connaissances</th>
                      <th>Points</th>
                      <th>Sp&eacute;cialisation</th>
                    </tr>
                    <tr>
                      <td>Education</td>
                      <td>{trainer.education}</td>
                      <td></td>
                    </tr>
                    <tr>
                      <td>Géographie</td>
                      <td>{trainer.geography}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Informatique</td>
                      <td>{trainer.computer_science}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Légendes</td>
                      <td>{trainer.legend}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Médicine</td>
                      <td>{trainer.medicine}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Médicine Pokémon</td>
                      <td>{trainer.pkmn_medicine}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Nature</td>
                      <td>{trainer.nature}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Psychisme</td>
                      <td>{trainer.phyche}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Sciences</td>
                      <td>{trainer.science}</td>
                      <td>&nbsp;</td>
                    </tr>
                    <tr>
                      <td>Pokélogie</td>
                      <td>{trainer.pokelogy}</td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </Sidebar>
      </div>

      <div className="desktop">
        <div className="trainer-avatar">
          <Modal
            className="modal-trainer"
            style={{ width: '95vw', height: '90vh', margin: '4vh auto' }}
            trigger={<img className="trainer-avatar-img" src={findTrainerImage(`${trainer.name}.png`)} alt="avatar" />}
            closeIcon
          >
            <TrainerModal trainer={trainer} pokemon={pokemon} />
          </Modal>
          {isMj &&
            <div className="health-container">
              <Dropdown
                className="span"
                upward
                icon={null}
                scrolling
                trigger={
                  <span style={{ cursor: 'pointer' }}>
                    {trainer.vitality}/10
                    </span>
                }
              >
                <Dropdown.Menu >
                  {options.map((option) => (
                    <Dropdown.Item
                      key={`trainer-option-key-${option.key}`}
                      onClick={handleOptionClick}
                      data-value={option.value}
                    >
                      {option.text}
                    </Dropdown.Item>
                  ))}
                </Dropdown.Menu>
              </Dropdown>
              <img src={heartIcon} alt="heart logo" />
              {/* The style in composant is require for dynamisation */}
              <div className={(trainer.vitality === 10) ? 'health-bar rounded' : 'health-bar'} style={{ width: `${trainer.vitality}0%` }} />
            </div>
          }
          {!isMj &&
            <div className="health-container">
              <span>{trainer.vitality}/10</span>
              <img src={heartIcon} alt="heart logo" />
              {/* The style in composant is require for dynamisation */}
              <div className={(trainer.vitality === 10) ? 'health-bar rounded' : 'health-bar'} style={{ width: `${trainer.vitality}0%` }} />
            </div>
          }
        </div>
        <div className="money">
          <span>{trainer.money} ₽</span>
        </div>
      </div>
    </TrainerStyled>
  );
};

Trainer.propTypes = {
  visible: PropTypes.bool.isRequired,
  trainer: PropTypes.object.isRequired,
  pokemon: PropTypes.object.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  isMj: PropTypes.bool.isRequired,
  changeTrainerHealth: PropTypes.func.isRequired,
  mjTrainerUsername: PropTypes.string,
};


Trainer.defaultProps = {
  mjTrainerUsername: '',
}
// == Export
export default Trainer;
