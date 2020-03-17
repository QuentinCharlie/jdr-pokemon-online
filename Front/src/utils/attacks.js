import {
  getAttackMultiplicatorAndMessage,
  affinityTable,
} from 'src/utils/affinityTable';

export function damageCalc(pokemon, attack, targetObject) 
{
  // console.log(pokemon);
  const pokemonType1 = pokemon.types[0].name;
  const pokemonType2 = pokemon.types.length === 2 ? pokemon.types[1].name : null;
  const pokemonFOR = pokemon.strength;
  const pokemonCON = pokemon.concentration;
  const pokemonENE = pokemon.energy;
  
  // math.ceil attack 
  const attackDamage = Math.ceil(attack.damage * 0.1);
  const attackAccuracy = attack.accuracy;
  const attackCategory = attack.category.trim();
  const attackType = attack.type.trim();
  
  const targetType1 = targetObject.target.types !== undefined ? targetObject.target.types[0].name : 'Normal';
  const targetType2 = targetObject.target.types !== undefined && targetObject.target.types.length === 2 ? targetObject.target.types[1].name : null;
  const targetEND = targetObject.target.endurance;
  const targetVOL = targetObject.target.willpower;

  // console.log(`pokemonFOR ${pokemonFOR}`);
  // console.log(`pokemonCON ${pokemonCON}`);
  // console.log(`attackDamage ${attackDamage}`);
  // console.log(`attackAccuracy ${attackAccuracy}`);
  // console.log(`attackCategory ${attackCategory}`);
  // console.log(`attackType ${attackType}`);
  // console.log(`targetType1 ${targetType1}`);
  // console.log(`targetType2 ${targetType2}`);
  // console.log(`targetEND ${targetEND}`);
  // console.log(`targetVOL ${targetVOL}`);

  let marge;
  if (attackCategory === 'Physique') {
    marge = pokemonFOR - targetEND;
  }
  else if (attackCategory === 'Speciale') {
    marge = pokemonCON - targetVOL;
  } 
  else if (attackCategory === 'Statut') {
    marge = 18;
  }
  // console.log(`Marge : ${marge}`);

  const difficulty = getDifficulty(marge, attackAccuracy);
  
  const dicesRollResult = diceRolls(attackDamage);
  
  let damage = 0;
  let message = '';

  damage = hit(dicesRollResult, difficulty, attackType, pokemonType1, pokemonType2);

  damage = damage * getAttackMultiplicatorAndMessage(
    affinityTable[attackType][targetType1], 
    affinityTable[attackType][targetType2]
  ).multiplicator;
  message = getAttackMultiplicatorAndMessage(
    affinityTable[attackType][targetType1], 
    affinityTable[attackType][targetType2]
  ).message;

  const energy = pokemonENE - attack.energy;

  return { damage, message, energy, dicesRollResult, targetObject };
};


const getDifficulty = (marge, attackAccuracy) => {

  const index = marge - (10 - (Math.ceil(attackAccuracy / 10)));

  if(index <=  -9) {
    return 10;
  }
   
  if(index >= 18) {
    return 1;
  }
  
  let difficulty =   
    {
      '-8': 9,
      '-7': 9,
      '-6': 8,
      '-5': 8,
      '-4': 7,
      '-3': 7,
      '-2': 6,
      '-1': 6,
      '0': 6,
      '1': 6,
      '2': 5,
      '3': 5,
      '4': 4,
      '5': 4,
      '6': 3,
      '7': 3,
      '8': 2,
      '9': 2,
      '10': 1,
      '11': 1,
      '12': 1,
      '13': 1,
      '14': 1,
      '15': 1,
      '16': 1,
      '17': 1,
      '18': 1
    };

  return difficulty[index];
}

function diceRolls (attackDamage) {
    const dicesNumber = attackDamage;
    let diceRolls = [];
    for (let i = 1 ; i <= dicesNumber; i++){
      diceRolls.push(Math.floor(Math.random() * (10 - 1)) + 1);
    }
    // function numberDes(a,b) {
    //   return b-a;
    // }
    diceRolls.sort((a, b) => { return b - a });

    return diceRolls;
}

function hit(dicesRollResult, difficulty, attackType, pokemonType1, pokemonType2) {
    let damage = 0;
    // a partir de la marge calculer la difficulté
    dicesRollResult.map((result) =>  {
      console.log(`map de dicesRoll : dé ${result} -> ${damage}`);
      if (result == 10) {
        damage++;
      }
      if (result >= difficulty) {
        damage++;
      }
      if (result == 1) {
        if (damage > 0) {
          damage--;
        }
      } 
    });
    console.log(`after rolls : ${damage}`);
    // stab :
    if (attackType === pokemonType1 || attackType === pokemonType2)
      {
        damage = Math.ceil(damage * 1.5);
      }
    console.log(`after stab : ${damage}`)
    return damage;
}

