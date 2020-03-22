/*
 * Require
 */
const axios = require('axios');
const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const Server = http.Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
// let port = 3001; // @change dev
//let port = 7001; // @change dev
let port = process.argv[2]; // @change prod
io.set('origins', '*:*');
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";


let timeSinceUse = 0; //increment++ setIntervall(1000ms) 

const inactionTimer = 3600; // 3600s => 1h
setInterval( function() { 
  if( timeSinceUse > inactionTimer ) {
    // TODO : Better close socket connection before closing whole server.js (thus freeing port)
    console.log("Exiting due to inactivity");
    // TODO : Ajax BDD free port
    const url = `http://54.89.22.26/game/${port}/delete`; // @change prod
    // const url = `http://localhost:8000/game/${port}/delete`;
    axios.delete(url,{ data: { token: "M%P'c~]&7XBdz^Pe" }})
    .then((response) => {console.log(response.data); process.exit();}) 
    .catch((error) => {console.log(error.response.statusText); process.exit();});
  }
  console.log("Timesince : " + timeSinceUse + "s");
  timeSinceUse += 1; // 1s
}, 1000); // 1000 ms

const db = {};

/*
 * Express
 */
app.use(bodyParser.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  // response.header('Access-Control-Allow-Credentials', true);
  response.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  response.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});


// Page d'accueil du serveur : GET /
app.get('/', (request, response) => {
  response.send(`
    <div style="margin: 5em auto; width: 400px; line-height: 1.5">
      <h1 style="text-align: center">Hello!</h1>
      <p style="text-align: center">Ton serveur JDR Pokémon est bien lancé !</p>
    </div>
  `);
});


/*
 * Socket.io
 */
let id = 0;
let entryId = 0;
let state = {
  grid: {
    dragOverCell: {},
    trainers: [],
  },
  log: {
    entries: [
      // {
      //   id : 1,
      //   isAttack: true,
      //   isDice: false,
      //   attack : 
      //   {
      //     title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
      //     attack: 'Tonnerre',
      //     dicesRoll: '10, 10, 10',
      //     resultDamage: 170,
      //     resultStatus: 'DEAD',
      //   },
      //   dice : 
      //   {
      //     title: null,
      //     diceroll: null,
      //   },   
      // },
      // {
      //   id : 2,
      //   isAttack: false,
      //   isDice: true,
      //   attack : 
      //   {
      //     title: null,
      //     attack: null,
      //     dicesRoll: null,
      //     resultDamage: null,
      //     resultStatus: null,
      //   },
      //   dice : 
      //   {
      //     title: 'Chance',
      //     diceroll: 99,
      //   },   
      // },     
    ],
  },
  users: {},
  mj: {
    isAlreadyMj: false,
  },
};
io.on('connection', (ws) => {
  console.log('>> socket.io - action');

  ws.on('load_state', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('loading state');
    console.log(state.mj.isAlreadyMj)
    entryId = ++entryId;
    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('load_state', info);
  });

  ws.on('change_mj_state', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('loading state');
    entryId = ++entryId;
    if (state.mj.mjName === undefined) {
      state.mj = {
        isAlreadyMj: true,
        mjName: info.mjName,
      };
    };
    info = state;
    console.log(info);
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('change_mj_state', info);
  });

  ws.on('change_trainer_health', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('substract energy');
    entryId = ++entryId;

    const username = info.mjTrainerUsername;
    const vitality = info.healthNumber;

    state.users = {
      ...state.users,
      [username]: {
        ...state.users[username],
        trainer: {
          ...state.users[username].trainer,
          vitality,
        }
      },
    };

    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('change_trainer_health', info);
  });

  ws.on('change_pokemon_health', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('substract energy');
    entryId = ++entryId;

    const username = info.mjTrainerUsername;
    const vitality = info.healthNumber;

    state.users = {
      ...state.users,
      [username]: {
        ...state.users[username],
        pokemon: [
          ...state.users[username].pokemon.splice(0, 0),
          {
            ...state.users[username].pokemon[0],
            vitality,
          },
          ...state.users[username].pokemon.splice(1),
        ],
      },
    };

    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('change_pokemon_health', info);
  });

  ws.on('substract_energy', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('substract energy');
    entryId = ++entryId;

    const username = info.username;
    // const pokemon = info.pokemon;
    const energy = state.users[username].pokemon[0].energy - info.energy;

    state.users = {
      ...state.users,
      [username]: {
        ...state.users[username],
        pokemon: [
          ...state.users[username].pokemon.splice(0, 0),
          {
            ...state.users[username].pokemon[0],
            energy,
          },
          ...state.users[username].pokemon.splice(1),
        ],
      },
    };

    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('substract_energy', info);
  });

  ws.on('add_dice_rolls_to_log', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('loading state');
    entryId = ++entryId;

    const roller = info.roller;
    const skill = info.skill;
    const diceRolls = info.diceRolls.join(', ');

    state.log = {
      ...state.log,
      entries: [
        ...state.log.entries,
        {
          id: entryId,
          isAttack: false,
          isDice: true,
          dice:
          {
            roller,
            skill,
            diceRolls,
          },
        }
      ]
    }


    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('add_dice_rolls_to_log', info);
  });

  ws.on('add_attack_results_to_log', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('add_attack_results_to_log state');
    entryId = ++entryId;
    const pokemonName = info.pokemon.name;
    const trainerName = info.trainer.name;
    const target = info.attackResults.targetObject.target.name;
    let trainerTarget;
    if (info.attackResults.targetObject.trainer !== undefined) {
      trainerTarget = info.attackResults.targetObject.trainer.name;
    }
    const dicesRoll = info.attackResults.dicesRollResult.join(', ');
    const attack = info.attackName;
    const resultDamage = info.attackResults.damage;
    const message = info.attackResults.message;

    let title;
    if (info.attackResults.targetObject.trainer === undefined) {
      title = `${pokemonName} de ${trainerName} attaque ${target} :`;
    }
    else {
      title = `${pokemonName} de ${trainerName} attaque ${target} de ${trainerTarget} :`;
    }

    state.log = {
      ...state.log,
      entries: [
        ...state.log.entries,
        {
          id: entryId,
          isAttack: true,
          isDice: false,
          attack:
          {
            title,
            attack,
            dicesRoll,
            resultDamage,
            // resultStatus: '',
            message,
          },
          dice:
          {
            title: null,
            diceroll: null,
          },
        }
      ]
    }

    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('add_attack_results_to_log', info);
  });

  ws.on('add_pokemon_and_trainer_to_users_state', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('add new trainer and pokemon to node users state');
    state.users = {
      ...state.users,
      [info.username]: {
        trainer: info.trainer,
        pokemon: [
          {
            ...info.pokemon,
          },
        ],
      },
    };
    info = state.users;
    timeSinceUse = 0;
    io.emit('add_pokemon_and_trainer_to_users_state', info);
  });


  ws.on('add_user_trainer_and_pokemon_to_grid', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('add new trainer and pokemon to node grid');
    // info: {
    //   trainer : {},
    //   pokemon: {},
    //   username: '',
    // }

    // state.grid: {
    //   dragOverCell: {
    //   },
    //   trainers: [
    //   ],
    // },
    const trainerName = info.trainer.name;
    const pokemonName = info.pokemon.name;
    const isTrainerAlreadyInGrid = state.grid.trainers.find((trainr) => trainr.name === trainerName)

    if (!isTrainerAlreadyInGrid) {
      const stateTrainers = [
        ...state.grid.trainers,
        {
          name: trainerName,
          position: {
          },
          pokemon: [
            {
              name: pokemonName,
              position: {
                X: info.trainer.id,
                Y: info.trainer.id,
              },
            },
          ],
        },
      ];

      state.grid.trainers = stateTrainers;
    }
    info = state;
    timeSinceUse = 0;
    io.emit('add_user_trainer_and_pokemon_to_grid', info);
  });

  ws.on('share_selected_trainer_and_pokemon', (info) => {
    // eslint-disable-next-line no-plusplus
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('share_selected_trainer_and_pokemon', info);
  });

  ws.on('move_pokemon', (info) => {
    // eslint-disable-next-line no-plusplus

    /* start of change*/

    const index = state.grid.trainers.findIndex((trainer) => trainer.name === info.trainerName);
    const trainerIndex =  state.grid.trainers[index];
    // console.log(info);
    // console.log(index);
    // console.log(state.grid.trainers);
    // console.log(state.grid.trainers[index]);
    // console.log(state.grid.trainers[index].pokemon);
    // console.log(state.grid.trainers[index].pokemon[0]);
    // let stateTrainers;
    // if (index !== undefined) {
    const  stateTrainers = [
      ...state.grid.trainers.splice(0, index),
      {
        ...trainerIndex,
        pokemon: [
          ...trainerIndex.pokemon.splice(0, 0),
          {
            ...trainerIndex.pokemon[0],
            position: {
              ...trainerIndex.pokemon[0].position,
              X: info.X,
              Y: info.Y,
            },
          },
          ...trainerIndex.pokemon.splice(1),
        ],
      },
      ...state.grid.trainers.splice(index + 1),
    ];
    
    state.grid.trainers = stateTrainers;
    /* end of change*/

    info.id = ++id;
    timeSinceUse = 0;
    io.emit('move_pokemon', info);
  });
});


/*
 * Server
 */
server.listen(port); // @change prod
// server.listen(port, 'localhost'); // @change dev
