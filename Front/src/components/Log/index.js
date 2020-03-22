// == Import npm
import React, { useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  Segment,
  Sidebar,
} from 'semantic-ui-react';

// == Import utils
import { getSidebarNameCapitalize } from 'src/utils/functions';
// == Import files
import pokeball from 'src/assets/images/pokeball.png';
import logIcon from 'src/assets/images/mobile-icons/log.svg';
// == Import Styles
import LogStyled from './LogStyled';


// == Composant
const Log = ({ 
  visible, 
  entries, 
  changeSidebarVisibility,
  pokemon,
}) => {
  useEffect(() => {
    logContainer.current.scrollTo(0, logContainer.current.scrollHeight);
  }, [entries]);
  const logContainer = useRef(null);
  const handleClick = (e) => {
    const sidebarNameCapitalize = getSidebarNameCapitalize(e.currentTarget.className);
    changeSidebarVisibility(sidebarNameCapitalize, visible);
    // logContainer.current.scrollTo(0, 50);
    logContainer.current.scrollTo(0, logContainer.current.scrollHeight);
  };

  // Color definition
  const primaryColor = pokemon.primary;
  const secondaryColor = pokemon.secondary;

  return (
    <LogStyled>
      <div className="mobile-tablet">
        <div className="log-button" onClick={handleClick}>
          <img src={logIcon} alt="log icon"/>
        </div>
        <Sidebar
          as={Segment}
          animation="overlay"
          direction="top"
          visible={visible}
        >
          <div className="log-sidebar">
            <div className="log">
              {/* <img src={pokeball} alt="pokemon background" className="pokeball-background" /> */}
              <div className="entries">
              {/* <div className="blank-space" /> */}
                {entries.map((entry) =>
                  <div 
                    className="entry"
                    key={entry.id}   
                  >
                    {entry.isAttack &&
                      <div 
                        className="attack-entry"
                        id={entry.id}
                      >
                        <p className="title">{entry.attack.title}</p>
                        <div className="turn">
                          <p className="attack">Attaque {entry.attack.attack} !</p>
                          <p className="dices-roll">Jet d'attaque : {entry.attack.dicesRoll}</p>
                          <div className="result">
                            <p className="result-damage">Degats infligés : {entry.attack.resultDamage}</p>
                            {/* <p className="result-status">Statut : {entry.attack.resultStatus}</p> */}
                            <p className="result-message"> {entry.attack.message}</p>
                          </div>
                        </div>
                      </div>
                    }

                    {entry.isDice &&
                      <div 
                        className="dice-entry"
                      > 
                        <p className="title">
                          {`${entry.dice.roller.name} fait un jet de ${entry.dice.skill} :`}
                        </p>
                        <div className="turn">
                          <p className="dices-roll">
                            {entry.dice.diceRolls} 
                          </p>
                        </div>
                      </div>
                    }
                  </div>
                )}
              </div>
            </div>
          </div>
        </Sidebar>
      </div>

      <div className="desktop">
        <svg className="svg1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={`#${primaryColor}`} fillOpacity="1" d="M0,320L1440,96L1440,0L0,0Z" /></svg>
        <svg className="svg2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill={`#${secondaryColor}`} fillOpacity="1" d="M0,160L1440,32L1440,0L0,0Z" /></svg>
        <div className="log">
          <img src={pokeball} alt="pokemon background" className="pokeball-background" />
          <div className="entries" ref={logContainer}>
          <div className="blank-space" />
            {entries.map((entry) =>
              <div 
                className="entry"
                key={entry.id}   
              >
                {entry.isAttack &&
                  <div 
                    className="attack-entry"
                    id={entry.id}
                  >
                    <p className="title">{entry.attack.title}</p>
                    <div className="turn">
                      <p className="attack">Attaque {entry.attack.attack} !</p>
                      <p className="dices-roll">Jet d'attaque : {entry.attack.dicesRoll}</p>
                      <div className="result">
                        <p className="result-damage">Degats infligés : {entry.attack.resultDamage}</p>
                        {/* <p className="result-status">Statut : {entry.attack.resultStatus}</p> */}
                        <p className="result-message"> {entry.attack.message}</p>
                      </div>
                    </div>
                  </div>
                }

                {entry.isDice &&
                  <div 
                    className="dice-entry"
                  > 
                    <p className="title">
                      {`${entry.dice.roller.name} fait un jet de ${entry.dice.skill} :`}
                    </p>
                    <div className="turn">
                      <p className="dices-roll">
                        {entry.dice.diceRolls} 
                      </p>
                    </div>
                  </div>
                }
              </div>
            )}
          </div>
        </div>
        <div className="current-player" style={{ backgroundColor: `#${primaryColor}` }}>
          {/* <p className="turn-name">C'est au tour de Ondine</p> */}
        </div>
        {/* <svg className="svg3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220"><path fill="#19cd70" fillOpacity="1" d="M0,0L1440,32L1440,320L0,320Z" /></svg> */}
      </div>
    </LogStyled>
  );
};

Log.propTypes = {
  visible: PropTypes.bool.isRequired,
  entries: PropTypes.array.isRequired,
  changeSidebarVisibility: PropTypes.func.isRequired,
  pokemon: PropTypes.object.isRequired,
};

// == Export
export default Log;
