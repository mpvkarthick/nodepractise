var util = require('util');
var name = 'Karthik';
// format in which the string needs to be displayed.
util.log(util.format('%j','{Hello'+name+'}'));
util.log(util.format('%s -- %s','Hello',name));

