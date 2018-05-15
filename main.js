function Machine(power) {
    this._power = power;

    this._enabled = false;

    this.enable = function () {
        return this._enabled = true;
    }

    this.disable = function () {
        return this._enabled = false;
    }
}

function CoffeeMachine(power, capacity) {

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

// coffeeMachine.stop();

function Fridge(power) {
    Machine.apply(this, arguments);

    var food;
    
    this.addFood = function () {
        
    }

}

var fridge = new Fridge(200);

