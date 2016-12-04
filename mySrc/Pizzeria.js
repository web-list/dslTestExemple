const pizzaPrice = 10;
const mushroomCoefficient = 0.9;

export function ClientRequest(money, dough, filling, olives, count) {

    this.money = money;
    this.dough = dough;
    this.filling = filling;
    this.olives = olives;
    this.count = count;

    return this;
}

export function NewClientRequest() {

    let data = {};

    this.pay = function (money) {
        data.money = money;
        return this;
    };

    this.onDough = function (dough) {
        data.dough = dough;
        return this;
    };

    this.withFilling = function (filling) {
        data.filling = filling;
        return this;
    };

    this.withoutOlives = function () {
        data.olives = false;
        return this;
    };

    this.count = function (count) {
        data.count = count;
        return this;
    };

    this.build = function () {
        return new ClientRequest(data.money, data.dough, data.filling, data.olives, data.count);
    };


}

export function Pizzeria() {

    this.pizza = null;

    this.pushOrder = function (request) {

        if (!request.count) request.count = 1;

        let price = pizzaPrice;

        if (request.filling == "mushrooms") {
            price = price * mushroomCoefficient;
        }

        let order = {};

        if (request.money >= price * request.count) {
            order.dough = request.dough;
            order.filling = request.filling;
            order.olives = request.olives;
            order.count = request.count;
            order.back = request.money - (price * request.count);
        } else {
            order.count = 0;
        }

        this.pizza = order;
    };

    this.getPizza = function () {
        return this.pizza;
    };

    return this;

}