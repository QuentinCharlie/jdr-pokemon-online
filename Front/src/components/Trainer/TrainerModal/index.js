/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import { Modal } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files
import avatar from 'src/components/Trainer/red.jpg';
import pokeAvatar from 'src/components/Pokemon/25.png';
import pokeball from './pokeball.png';
import trainer from './sacha.png';
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
                      style={{ 'background-color': '#FFE629' }}
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
                <span>FORCE</span>
                <ProgressBar color="yellow" number={1} maxNumber={5} />
              </div>
              <div className="stat">
                <span>ENDURANCE</span>
                <ProgressBar color="yellow" number={2} maxNumber={5} />
              </div>
              <div className="stat">
                <span>CONCENTRATION</span>
                <ProgressBar color="yellow" number={3} maxNumber={5} />
              </div>
              <div className="stat">
                <span>VOLONTÉ</span>
                <ProgressBar color="yellow" number={4} maxNumber={5} />
              </div>
              <div className="stat">
                <span>DEXTERITÉ</span>
                <ProgressBar color="yellow" number={5} maxNumber={5} />
              </div>
              <div className="stat">
                <span>VITALITÉ</span>
                <ProgressBar color="yellow" number={9} maxNumber={10} />
              </div>
            </div>
          </div>
          <div className="stats-skills"></div>
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
