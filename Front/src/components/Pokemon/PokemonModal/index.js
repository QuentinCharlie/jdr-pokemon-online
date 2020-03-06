/* eslint-disable react/self-closing-comp */
// == Import npm
import React from 'react';
import { Modal } from 'semantic-ui-react';

// Import Components
import ProgressBar from 'src/components/ProgressBar';

// == Import files for styles
import avatar from 'src/assets/images/25.png';
import pokemonSprite from 'src/assets/images/pikachu.gif';
import greyPokeball from 'src/assets/images/pokeball.png';

// == Import style
import PokemonModalStyled from './PokemonModalStyled';


// == Composant
const PokemonModal = () => (
  <PokemonModalStyled>
    <Modal.Header className="modal-header"><h1>Sacha</h1></Modal.Header>
    <Modal.Content className="modal-content">
      <div className="wrapper-left">
        <div className="pokemon">
          <div className="pokemon-avatar">
            <div className="pokemon-avatar-container">
              <img className="modal-pokemon-avatar" src={avatar} alt="" />
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
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>Genre</td>
                        <td>Male</td>
                      </tr>
                      <tr>
                        <td>Type(s)</td>
                        <td>Electrik</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="pokemon-description-infos-vital">
                <div className="stat">
                  <span className="title">ÉNERGIE</span>
                  <ProgressBar color="lightblue" number={48} maxNumber={50} />
                </div>
                <div className="stat">
                  <span className="title">VITALITÉ</span>
                  <ProgressBar color="lightgreen" number={16} maxNumber={22} />
                </div>
              </div>
            </div>
            <div className="pokemon-description-appearance">
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
                  </tbody>
                </table>
              </div>
              <div className="pokemon-sprite">
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
            </div>
          </div>
          <div className="stats-sensibilities">
            <div className="type">Type x2</div>
            <div className="type">Type x1</div>
            <div className="type">Type x1</div>
            <div className="type">Type x2</div>
            <div className="type">Type 0.5</div>
            <div className="type">Type x1</div>
            <div className="type">Type x2</div>
            <div className="type">Type x1</div>
            <div className="type">Type x0.5</div>
            <div className="type">Type x2</div>
            <div className="type">Type x2</div>
            <div className="type">Type x1</div>
            <div className="type">Type x2</div>
            <div className="type">Type 0.5</div>
            <div className="type">Type x0.5</div>
            <div className="type">Type x2</div>
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
          250 XP
        </div>
        <div className="attack-list">
          <div className="attack">1</div>
          <div className="attack">2</div>
          <div className="attack">3</div>
          <div className="attack">4</div>
          <div className="attack">5</div>
          <div className="attack">6</div>
          <div className="attack">7</div>
          <div className="attack">8</div>
          <div className="attack">9</div>
          <div className="attack">10</div>
          <div className="attack">11</div>
          <div className="attack">12</div>
        </div>
      </div>
    </Modal.Content>
  </PokemonModalStyled>
);

// == Export
export default PokemonModal;
