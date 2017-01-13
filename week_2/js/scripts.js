(function() {

    if( typeof String.prototype.repeatt === "function" ) return;

    String.prototype.repeatt = function(count) {

    if(count < 0) {
        throw new RangeError("Invalid count value");
    }
    return (new Array(count + 1)).join( this.toString() );
};

    
        class EventEmitter {
        constructor() {
            this.events = {};
        }
        on(type, fn) {
            if(!type || !fn) return;

            this.events[type] = this.events[type] || [];
            this.events[type].push(fn);
        }
        emit(type, data) {
            var fns = this.events[type];

            if(!fns || !fns.length) return;

            for(var i = 0; i < fns.length; i++) {
                fns[i](data);
            }
        }
    }

    class Database extends EventEmitter {
        constructor(url) {
            super();
            this.url = url;
        }
        connect() {
            this.emit("connect", this.url);
        }
        disconnect() {
            this.emit("disconnect", this.url);
        }
    }
    
    
    
function createData(obj) {

    var data = {};

    return {
        get: function(key) {
            if(data.hasOwnProperty(key)) {
                return data[key];
            } else {
                return null;
            }

        },
        set: function(key, value) {
            if(key && value) { 
                data[key] = value;
            }
        }
    };

}

var data = createData();

data.set("name", "Janek");
data.set("age", 0);

console.log( data.get("name") );

var Module = (function() {

    var _debug = function(msg) {
        console.log(msg);
    };

    return {
        message: function(msg, useDebug) {
            alert(msg);
            useDebug && _debug(msg);

        }
    };

})();