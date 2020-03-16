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
let port = 3001; // dev
// let port = process.argv[2]; // prod
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
let entryId = 1;
let state = {
  grid: {

  },
  log: {
    entries: [
        {
          id : 1,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 2,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 3,
          isAttack: false,
          isDice: true,
          attack : 
          {
            title: null,
            attack: null,
            dicesRoll: null,
            resultDamage: null,
            resultStatus: null,
          },
          dice : 
          {
            title: 'Chance',
            diceroll: 99,
          },   
        },
        {
          id : 4,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 5,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 6,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 7,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 8,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 9,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
        {
          id : 10,
          isAttack: true,
          isDice: false,
          attack : 
          {
            title: 'Pikachu de Sacha attaque Magicarpe de Reblochon :',
            attack: 'Tonnerre',
            dicesRoll: '10, 10, 10',
            resultDamage: 170,
            resultStatus: 'DEAD',
          },
          dice : 
          {
            title: null,
            diceroll: null,
          },   
        },
      ],
  },
}
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
