function Menu(state) {
    this._state = state || Menu.STATE_CLOSED;
};

Menu.STATE_OPEN = 1;
Menu.STATE_CLOSED = 0;

Menu.prototype.open = function() {
    this._state = Menu.STATE_OPEN;
};

Menu.prototype.close = function() {
    this._state = Menu.STATE_CLOSED;
};

Menu.prototype._stateAsString = function() {
    switch (this._state) {
        case Menu.STATE_OPEN:
            return 'открыто';

        case Menu.STATE_CLOSED:
            return 'закрыто';
    }
};

Menu.prototype.showState = function() {
    alert(this._stateAsString());
};




function AnimatingMenu(state) {
    Menu.apply(this, arguments);
};

AnimatingMenu.prototype = Object.create(Menu.prototype);

AnimatingMenu.prototype.STATE_ANIMATING = 2;

AnimatingMenu.prototype.open = function() {
    var self = this;

    this._state = this.STATE_ANIMATING;

    this._timer = setTimeout(function() {
        Menu.prototype.open.call(self);
    }, 1000);
};

AnimatingMenu.prototype._stateAsString = function () {
    switch (this._state) {
        case this.STATE_ANIMATING:
            return 'анимация';

        default:
            return Menu.prototype._stateAsString.call(this);
    }
};