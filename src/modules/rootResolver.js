const path = require('path');
const resolver = require('./health/resolver');


console.log(resolver);


module.exports = {
  resolvers:  path.join(__dirname + '/**/resolver.js')
}