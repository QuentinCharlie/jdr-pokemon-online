require('@babel/register')(); // Pour ecrire en ES6
require('ignore-styles'); // Ignore le CSS
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() }); 