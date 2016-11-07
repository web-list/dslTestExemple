
const pizzaPrice = 10;
const mushroomCoefficient = 0.9;

export function PizzaRequest(money, dough, filling, olives, count) {
    if (!count) count = 1;

    let price = pizzaPrice;

    if (filling == "mushrooms") {
        price = price * mushroomCoefficient;
    }

    if (money >= price * count) {
        this.dough = dough;
        this.filling = filling;
        this.olives = olives;
        this.count = count;
        this.back = money - (price * count);
    } else {
        this.count = 0;
    }

    return this;
}

export function NewPizzaRequest() {

    let data = {};

    this.pay = function (money) {
        data.money = money;
        return this;
    };

    this.onDough = function(dough) {
        data.dough = dough;
        return this;
    };

    this.withFilling = function(filling) {
        data.filling = filling;
        return this;
    };

    this.withoutOlives = function() {
        data.olives = false;
        return this;
    };

    this.count = function (count) {
      data.count = count;
      return this;
    };

    this.build = function() {
        return new PizzaRequest(data.money, data.dough, data.filling, data.olives, data.count);
    };


}