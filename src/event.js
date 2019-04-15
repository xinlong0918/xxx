window.eventsController = (()=> {
    var events = {};
    var on = (eventName, handler)=> {
        events[eventName] = handler;
    };
    var off = (eventName)=> {
        delete events[eventName];
    };
    var getHandler = (eventName)=> {
        return events[eventName];
    };
    var clear = ()=> {
        events = {};
    };
    return {on: on, off: off, getHandler: getHandler, clear: clear};
})();
