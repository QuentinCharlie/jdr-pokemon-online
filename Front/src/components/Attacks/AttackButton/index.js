/* eslint-disable no-unused-vars */
// == Import npm
import React from 'react';
import PropTypes from 'prop-types';
import { Popup } from 'semantic-ui-react';
import { Modal } from 'semantic-ui-react';

// == import files
// == Import utils
import { 
  findTypeImage,
  findCategoryImage,
} from 'src/utils/functions';
// == Import style
import AttackButtonStyled from './AttackButtonStyled';
// == Import components
import InfoAttackPopUp from './InfoAttackPopUp';
import TargetsModal from './TargetsModal';

// == Composant
const AttackButton = ({
  name,
  damage,
  accuracy,
  energy,
  category,
  distance,
  effect,
  type,
  color,
  pokemon,
  trainer,
  users,
}) => {
  const typeImage = findTypeImage(`${type}.png`);
  const typeDistance = findTypeImage(`${type}.png`);
  // const categoryImage = findCategoryImage(`${category}.png`);
  // console.log(categoryImage);
  const usersKeys = Object.keys(users);
  const allTargets = usersKeys.map((userKey) => users[userKey]);
  // console.log(allTargets);
  const handleClick = (e) => {
    const attackLog = {
      title: `${pokemon.name} de ${trainer.name} attaque Bidule de Machin :`,
      attack: name,
      dicesRoll: '',
      resultDamage: '',
      resultStatus: '',
    };
  };

  return (
    <AttackButtonStyled>
      <Modal 
        trigger={
          <div
            className={`button ${type}`}
            style={{ backgroundColor: `#${color}`,
            }}
            onClick={handleClick}
          >
            {console.log(type)}
            <div className="attack">
              <div className="attack-name">{name}</div>
              <div className="attack-icons">
                <div className={`attack-category ${category}`}>
                  {/* <img src={`${categoryImage}`} alt="category logo" className="category-logo"/> */}
                </div>
                <div className={`attack-distance ${distance}`} />
                <Popup
                  content={(
                    <InfoAttackPopUp
                      name={name}
                      damage={damage}
                      accuracy={accuracy}
                      energy={energy}
                      category={category}
                      distance={distance}
                      effect={effect}
                      type={type}
                    />
                  )}
                  basic
                  hoverable
                  hideOnScroll
                  on="hover"
                  wide="very"
                  trigger={<div className="attack-info" />}
                />
              </div>
            </div>
            <div className="attack-stats">
              <div className="attack-stat">
                <div>Dégats</div>
                <div>{damage}</div>
              </div>
              <div className="attack-stat">
                <div>Précision</div>
                <div>{accuracy}</div>
              </div>
              <div className="attack-stat">
                <div>Energie</div>
                <div>{energy}</div>
              </div>
            </div>
            <img className="type" src={typeImage} alt="type logo" />
          </div>     
        } 
        // basic 
        size='small'
        centered
        closeIcon
        dimmer='inverted'
        className='modal-attack-targets'
      >
        <TargetsModal 
          allTargets={allTargets} 
          pokemon={pokemon}
          name={name}
          type={type}
          damage={damage}
          accuracy={accuracy}
          energy={energy}
          category={category}
          distance={distance}
          effect={effect}
        />
      </Modal>
    </AttackButtonStyled>
  );
}

// == Validation
AttackButton.propTypes = {
  name: PropTypes.string.isRequired,
  damage: PropTypes.number.isRequired,
  accuracy: PropTypes.number.isRequired,
  energy: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired,
  distance: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  effect: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  pokemon: PropTypes.object.isRequired,
  trainer: PropTypes.object.isRequired,
  users: PropTypes.object.isRequired,
};

// == Export
export default AttackButton;
