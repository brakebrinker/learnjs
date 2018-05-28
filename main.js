/*function Machine(power) {
    this._power = power;

    this._enabled = false;

    this.enable = function () {
        return this._enabled = true;
    }

    this.disable = function () {
        return this._enabled = false;
    }
}*/

/*function CoffeeMachine(power, capacity) {

    // Machine.call(this);

    Machine.apply(this, arguments);

    var WATER_HEAT_CAPACITY = 4200;
    var waterAmount = 0;
    var timerId;
    var self = this;
    var ready = false;

    // "умная" установка свойства
    this.waterAmount = function(amount) {
        if (!arguments.length) return waterAmount;

        if (amount < 0) {
            throw new Error("Значение должно быть положительным");
        }
        if (amount > capacity) {
            throw new Error("Нельзя залить воды больше, чем " + capacity);
        }

        waterAmount = amount;
    };

    this.getPower = function () {
        alert('The power: ' + power);
    }

    this.addWater = function (amount) {
        this.waterAmount(waterAmount + amount);
    }

    // расчет времени кипячения
    function getBoilTime() {
        return self.waterAmount * WATER_HEAT_CAPACITY * 80 / power; // ошибка!
    }

    // что делать по окончании процесса
    function onReady() {
        alert('Кофе готов!');
    }
    this.setOnReady = function (newOnReady) {
        onReady = newOnReady;
    };

    var parentDisable = this.disable;
    this.disable = function() {
        parentDisable.call(this);
        clearTimeout(timerId);
    }

    this.run = function () {
        if (!this._enabled) {
            throw new Error("Ошибка! Кофеварка выключена!");
        }

        timerId = setTimeout(function () {
            timerId = null;
            onReady();
        }, getBoilTime());
    };

    this.stop = function () {
        clearTimeout(timerId);
    };

    this.isRunning = function () {
        return !!timerId;
    };

    alert('Создана кофеварка с мощностью: ' + power + 'ватт');
}

var coffeeMachine = new CoffeeMachine(100000, 500);
coffeeMachine.waterAmount(400);
// coffeeMachine.addWater(100);
// coffeeMachine.getPower();

coffeeMachine.enable();
coffeeMachine.run();
coffeeMachine.disable(); // остановит работу, ничего не выведет

// coffeeMachine.stop();*/

/*function Fridge(power) {
    Machine.apply(this, arguments);

    var food = [];
    var maxItems = this._power / 100;

    this.addFood = function (item) {

        if (!this._enabled) {
            throw new Error("Ошибка! Холодильник выключен!");
        }

        if (food.length + arguments.length > maxItems) {
            throw new Error("Ошибка! Слишком много еды!");
        }

        // args = Array.prototype.slice.call(arguments)
        // food = food.concat(args);

        for (var i = 0; i < arguments.length; i++) {
            food.push(arguments[i]); // добавить всё из arguments
        }

        console.log(food);
    }

    this.getFood = function () {
        return food.slice();
    }

    this.removeFood = function (item) {
        var idx = food.indexOf(item);
        if (idx != -1) food.splice(idx, 1);
    }

    var parentDisable = this.disable;
    this.disable = function () {
        if (food.length) {
            throw new Error("Ошибка! В холодильнике есть еда!");
        }
        parentDisable();
    }

}

var fridge = new Fridge(600);

fridge.enable();
//fridge.addFood("кус-кус");
fridge.disable(); // ошибка, в холодильнике есть еда

/!*fridge.addFood('бананы');
fridge.addFood('масло, сметана, огурцы');
fridge.addFood('молоко');*!/*/

/*
Function.prototype.defer = function(ms) {
    var f = this;
    return function() {
        var args = arguments,
            context = this;
        setTimeout(function() {
            f.apply(context, args);
        }, ms);
    }
};

function f(a, b) {
    alert( a + b );
}

f.defer(1000)(1, 2);*/

/*
function CoffeeMachine(power) {
    this._power = power;
    this._waterAmount = 0;
}
// свойства и методы для всех объектов класса
CoffeeMachine.prototype.WATER_HEAT_CAPACITY = 4200;

CoffeeMachine.prototype._getTimeBoil = function() {
    return this._waterAmount * this.WATER_HEAT_CAPACITY * 80 / this._power;
};

CoffeeMachine.prototype.run = function () {
    setTimeout(function () {
        alert('Кофе готов!');
    }, this._getTimeBoil() );
}

CoffeeMachine.prototype.setWaterAmount = function (amount) {
    this._waterAmount = amount;
}

var coffeeMachine = new CoffeeMachine(10000);
coffeeMachine.setWaterAmount(50);
coffeeMachine.run();*/

/*function Hamster() {
    this._food = []; // пустой "живот"
}

Hamster.prototype.getFood = function(something) {
    return this._food;
}

Hamster.prototype.found = function(something) {
    this._food.push(something);
};

// Создаём двух хомяков и кормим первого
var speedy = new Hamster();
var lazy = new Hamster();

speedy.found("яблоко");
speedy.found("орех");

alert( speedy.getFood.length ); // 2
alert( lazy.getFood.length ); // 2 (!??)*/


