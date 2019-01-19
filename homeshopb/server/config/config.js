var env = process.env.Node_ENV || 'development';
var config = require('./config.json');
var envConfig=config[env];
Object.keys(envConfig).forEach(key=>process.env[key]=envConfig[key]);