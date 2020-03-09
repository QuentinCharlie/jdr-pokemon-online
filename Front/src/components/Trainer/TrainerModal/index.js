/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import { Modal, Popup } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files for styles
import avatar from 'src/assets/images/ash.png';
import pokeAvatar from 'src/assets/images/25.png';
import greyPokeball from 'src/assets/images/pokeball.png';
import trainer from 'src/assets/images/sacha.png';

// == Items img Import
// Balls
import ballMenu from 'src/assets/images/balls/menu-balls.png';
import pokeball from 'src/assets/images/balls/pokeball.png';
import superball from 'src/assets/images/balls/superball.png';
// Materials
import materialMenu from 'src/assets/images/materiel/menu-materiel.png';
import map from 'src/assets/images/materiel/carte.png';
// Medicine
import medicMenu from 'src/assets/images/medicaments/menu-medicaments.png';
import herbeRappel from 'src/assets/images/medicaments/herbe-rappel.png';
// Combat Items
import combatItemMenu from 'src/assets/images/objets-combat/menu-objets-combat.png';
// Training Items
import trainingItemMenu from 'src/assets/images/objets-entrainement/menu-objets-entrainement.png';

// == Import style
import TrainerModalStyled from './TrainerModalStyled';


// == Composant
const TrainerModal = () => (
  <TrainerModalStyled>
    <Modal.Header className="modal-header"><h1>Sacha</h1></Modal.Header>
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
                        <td>14 ans</td>
                      </tr>
                      <tr>
                        <td>Genre</td>
                        <td>Homme</td>
                      </tr>
                      <tr>
                        <td>Vocation</td>
                        <td>Dresseur Pok&eacute;mon</td>
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
                      <td>112cm</td>
                    </tr>
                    <tr>
                      <td>Poids</td>
                      <td>35kg</td>
                    </tr>
                    <tr>
                      <td>Peau</td>
                      <td>Blanc</td>
                    </tr>
                    <tr>
                      <td>Yeux</td>
                      <td>Noir</td>
                    </tr>
                    <tr>
                      <td>Cheveux</td>
                      <td>Noir</td>
                    </tr>
                    <tr>
                      <td>Corpulence</td>
                      <td>Maigrichon</td>
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
                <ProgressBar color="#19cd70" number={1} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">ENDURANCE</span>
                <ProgressBar color="#19cd70" number={2} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">CONCENTRATION</span>
                <ProgressBar color="#19cd70" number={3} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">VOLONTÉ</span>
                <ProgressBar color="#19cd70" number={4} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">DEXTERITÉ</span>
                <ProgressBar color="#19cd70" number={5} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">VITALITÉ</span>
                <ProgressBar color="#19cd70" number={9} maxNumber={10} />
              </div>
            </div>
          </div>
          <div className="stats-skills">
            <table>
              <thead>
                <tr>
                  <th>Comp&eacute;tences</th>
                  <th>Points</th>
                  <th>Sp&eacute;cialisations</th>
                  <th>Connaissances</th>
                  <th>Points</th>
                  <th>Sp&eacute;cialisations</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bricolage</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Education</td>
                  <td>2</td>
                  <td>Dresseur</td>
                </tr>
                <tr>
                  <td>Charisme</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                  <td>G&eacute;ographie</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Combat</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                  <td>Informatique</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Conduite</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>L&eacute;gendes</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>D&eacute;t&eacute;ction</td>
                  <td>2</td>
                  <td>Pokémon</td>
                  <td>M&eacute;decines</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Discretion</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>M&eacute;decine Pok&eacute;mon</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Expression</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Nature</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Psychologie</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Psychisme</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Sports</td>
                  <td>2</td>
                  <td>Course</td>
                  <td>Sciences</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Survie</td>
                  <td>1</td>
                  <td>&nbsp;</td>
                  <td>Pok&eacute;logie</td>
                  <td>2</td>
                  <td>Table des types</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="text">
          <div className="text-background"></div>
          <div className="text-history"></div>
          <div className="text-notes"></div>
        </div>
      </div>
      <div className="wrapper-right">
        <div className="spendables">
          <div className="spendables-money">
            <span>5000 ₽</span>
          </div>
          <div className="spendables-xp">
            <span>25 XP</span>
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

// == Export
export default TrainerModal;
