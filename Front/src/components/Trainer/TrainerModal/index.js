/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Popup } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files for styles
import avatar from 'src/assets/images/trainer/1.png';
import pokeAvatar from 'src/assets/images/pokemon/25.png';
import greyPokeball from 'src/assets/images/pokeball.png';
import trainer from 'src/assets/images/sacha.png';

// == Items img Import
// Balls
import ballMenu from 'src/assets/images/inventory/balls/menu-balls.png';
import pokeball from 'src/assets/images/inventory/balls/pokeball.png';
import superball from 'src/assets/images/inventory/balls/superball.png';
// Materials
import materialMenu from 'src/assets/images/inventory/materiel/menu-materiel.png';
import map from 'src/assets/images/inventory/materiel/carte.png';
// Medicine
import medicMenu from 'src/assets/images/inventory/medicaments/menu-medicaments.png';
import herbeRappel from 'src/assets/images/inventory/medicaments/herbe-rappel.png';
// Combat Items
import combatItemMenu from 'src/assets/images/inventory/objets-combat/menu-objets-combat.png';
// Training Items
import trainingItemMenu from 'src/assets/images/inventory/objets-entrainement/menu-objets-entrainement.png';

// == Import style
import TrainerModalStyled from './TrainerModalStyled';


// == Composant
const TrainerModal = ({ trainer }) => (
  <TrainerModalStyled>
    <Modal.Header className="modal-header"><h1>{trainer.name}</h1></Modal.Header>
    <Modal.Content className="modal-content">
      <div className="wrapper-left">
        <div className="trainer">
          <div className="trainer-avatar">
            <div className="trainer-avatar-container">
              <img className="modal-trainer-avatar" src={avatar} alt="trainer avatar" />
            </div>
          </div>
          <div className="trainer-description">
            <div className="trainer-description-infos">
              <div className="trainer-description-infos-basics">
                <div className="table-container">
                  <table>
                    <tbody>
                      <tr>
                        <td>Age</td>
                        <td>{trainer.age}</td>
                      </tr>
                      <tr>
                        <td>Genre</td>
                        <td>{trainer.gender === 'M' ? 'Homme' : 'Femme'}</td>
                      </tr>
                      <tr>
                        <td>Vocation</td>
                        <td>{trainer.vocation}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="trainer-description-infos-team">
                <div className="team-container">
                  <div className="pokemon">
                    <img
                      src={pokeAvatar}
                      style={{ backgroundColor: '#FFE629' }}
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
              </div>
            </div>
            <div className="trainer-description-appearance">
              <div className="table-container">
                <table>
                  <tbody>
                    <tr>
                      <td>Taille</td>
                      <td>{trainer.height}</td>
                    </tr>
                    <tr>
                      <td>Poids</td>
                      <td>{trainer.weight}</td>
                    </tr>
                    <tr>
                      <td>Peau</td>
                      <td>{trainer.skin}</td>
                    </tr>
                    <tr>
                      <td>Yeux</td>
                      <td>{trainer.eyes}</td>
                    </tr>
                    <tr>
                      <td>Cheveux</td>
                      <td>{trainer.hair}</td>
                    </tr>
                    <tr>
                      <td>Corpulence</td>
                      <td>{trainer.corpulence}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="trainer-sprite">
                <img src={trainer} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="stats">
          <div className="stats-stat">
            <div className="stat-container">
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
                  <td>Pokémon</td>
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
                  <td>Course</td>
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
                  <td>Dresseur</td>
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
                  <td>Table des types</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text">
          <div className="text-background">
            <div className="wrapper">
              <p>
                {trainer.background}
              </p>
            </div>
          </div>
          <div className="text-history">
            <textarea readOnly value={trainer.history} />
          </div>
          <div className="text-notes">
            <textarea readOnly value={trainer.notes} />
          </div>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="spendables">
          <div className="spendables-money">
            <span>{trainer.money} ₽</span>
          </div>
          <div className="spendables-xp">
            <span>{trainer.exp} XP</span>
          </div>
        </div>
        <div className="inventory">
          <div className="inventory-nav">
            <div className="menu-item">
              <img className="menu-item-img" src={ballMenu} alt="balls" />
            </div>
            <div className="menu-item">
              <img className="menu-item-img" src={materialMenu} alt="" />
            </div>
            <div className="menu-item">
              <img className="menu-item-img" src={medicMenu} alt="" />
            </div>
            <div className="menu-item">
              <img className="menu-item-img" src={combatItemMenu} alt="" />
            </div>
            <div className="menu-item">
              <img className="menu-item-img" src={trainingItemMenu} alt="" />
            </div>
          </div>
          <div className="inventory-content">
            <div className="inventory-item">
              <div className="item-infos">
                <Popup
                  content={
                    <div className="item-description">Cela sert à emprisonner un pokémon inoncent contre son gré afin de le faire combattre d'autres pokémon capturés à ma guise"</div>
                  }
                  trigger={
                    <img className="item-img" src={pokeball} alt="" />
                  }
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
    </Modal.Content>
  </TrainerModalStyled>
);

TrainerModal.propTypes = {
  trainer: PropTypes.object.isRequired,
};

// == Export
export default TrainerModal;
