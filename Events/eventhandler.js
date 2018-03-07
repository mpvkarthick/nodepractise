function EventHandler() {
    this.events = {};
}

EventHandler.prototype.registerEvent = function (type, listener) {
    this.events[type] = this.events[type] || [];
    this.events[type].push(listener);
}

EventHandler.prototype.executeEvent = function (type) {
    if (this.events[type]) {
        this.events[type].forEach(function (listener) {
            listener();
        })
    } else {
        console.log('Not a registered event');
    }
}

module.exports = EventHandler;