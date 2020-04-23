# Outils de tests

```yarn add -D @babel/register ignore-styles enzyme mocha chai enzyme-adapter-react-16```

Faire un dossier tests.
Préparer 2 fichiers dans le dossier tests : 
 - .setup.js :
```
require('@babel/register')(); // Pour ecrire en ES6
require('ignore-styles'); // Ignore le CSS
const enzyme = require('enzyme');
const Adapter = require('enzyme-adapter-react-16');

enzyme.configure({ adapter: new Adapter() }); 
```
- .eslintrc :
```
{
    "env": {
        "mocha": true
    },
    "rules": {
        "no-unused-expressions": "off"
    }
}
```

## test runner

Mocha : https://mochajs.org

Mocha va permettre de lancer des suites de tests avec des `describe` pour définir le sujet et `it` pour indiquer un test.

Créer un fichier .test.js 

Exemple demo.test.js :
```
var assert = require('assert');
describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});
```

puis en terminal `./node_modules/.bin/mocha tests/demo.test.js`
