/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import { Modal } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files
import avatar from 'src/assets/images/red.jpg';
import pokeAvatar from 'src/assets/images/25.png';
import pokeball from 'src/assets/images/pokeball.png';
import trainer from 'src/assets/images/sacha.png';
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
              <img className="modal-trainer-avatar" src={avatar} alt="" />
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
                    <img src={pokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={pokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={pokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={pokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={pokeball} alt="" />
                  </div>
                  <div className="pokemon empty">
                    <img src={pokeball} alt="" />
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
                <ProgressBar color="yellow" number={1} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">ENDURANCE</span>
                <ProgressBar color="yellow" number={2} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">CONCENTRATION</span>
                <ProgressBar color="yellow" number={3} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">VOLONTÉ</span>
                <ProgressBar color="yellow" number={4} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">DEXTERITÉ</span>
                <ProgressBar color="yellow" number={5} maxNumber={5} />
              </div>
              <div className="stat">
                <span className="title">VITALITÉ</span>
                <ProgressBar color="yellow" number={9} maxNumber={10} />
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
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Charisme</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>G&eacute;ographie</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Combat</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Informatique</td>
                  <td>&nbsp;</td>
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
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>M&eacute;decines</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Discretion</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>M&eacute;decine Pok&eacute;mon</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Expression</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Nature</td>
                  <td>&nbsp;</td>
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
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Sciences</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                </tr>
                <tr>
                  <td>Survie</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
                  <td>Pok&eacute;logie</td>
                  <td>&nbsp;</td>
                  <td>&nbsp;</td>
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
          <div className="spendables-money"></div>
          <div className="spendables-xp"></div>
        </div>
        <div className="inventory">
          <div className="inventory-nav"></div>
          <div className="inventory-content">
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
            <div className="inventory-item"></div>
          </div>
        </div>
      </div>
    </Modal.Content>
  </TrainerModalStyled>
);

// == Export
export default TrainerModal;
