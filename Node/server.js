/* eslint-disable prefer-destructuring */
/*
 * Require
 */
const express = require('express');
const bodyParser = require('body-parser');
const Server = require('http').Server;
const socket = require('socket.io');


/*
 * Vars
 */
const app = express();
const server = Server(app);
const io = socket(server);
let port = 3001; // @change dev
// let port = process.argv[2]; // @change prod
// let timeSinceUse = 0; //increment++ setIntervall(1000ms) 
// const inactionTimer = 5; // 3600s => 1h

// setInterval( function() { 
//   if( timeSinceUse > inactionTimer ) {
//     // TODO : Better close socket connection before closing whole server.js (thus freeing port)
//     console.log( "Exiting due to inactivity" );
//     // TODO : Ajax BDD free port
//     process.exit();
//   }
//   console.log("Timesince : " + timeSinceUse + "s" );
//   timeSinceUse += 1; // 1s
// }, 1000 ); // 1000 ms

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
let entryId = 2;
let state = {
  grid: {
    dragOverCell: {
    },
    trainers: [
    ],
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
  users : [

  ],
};
io.on('connection', (ws) => {
  console.log('>> socket.io - action');

  ws.on('load_state', (info) => {
    // eslint-disable-next-line no-plusplus
    console.log('loading state');
    entryId = ++entryId;
    info = state;
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('load_state', info);
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
          id : entryId,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title,
            attack,
            dicesRoll,
            resultDamage,
            // resultStatus: '',
            message,
          },
          dice : 
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
    info.id = ++id;
    timeSinceUse = 0;
    io.emit('move_pokemon', info);
  });
});


/*
 * Server
 */
// server.listen(port, '54.89.22.26'); //prod
server.listen(port, 'localhost'); //dev
