//customer event handling

var EventHandler = require('./eventhandler');
var eventsConfig = require('./config')
var config = eventsConfig.events;
var eventHandler = new EventHandler();

eventHandler.registerEvent(config.english, function () {
    console.log('Hello World')
});

eventHandler.registerEvent(config.english, function () {
    console.log('Hello Karthik World')
});

eventHandler.registerEvent(config.spanish, function () {
    console.log('Hola World')
});

eventHandler.executeEvent(config.english);
eventHandler.executeEvent(config.spanish);
eventHandler.executeEvent(config.french);

// Node js event handling

var NodeEventHandler = require('events');

var nodeEventHandler = new NodeEventHandler();

nodeEventHandler.on(config.english, function () {
    console.log('Hello World')
});

nodeEventHandler.on(config.english, function () {
    console.log('Hello Karthik World')
});

nodeEventHandler.on(config.spanish, function () {
    console.log('Hola World')
});

nodeEventHandler.emit(config.english);
nodeEventHandler.emit(config.spanish);
nodeEventHandler.emit(config.french);

