

export function PizzaRequest(money, dough, filling, olives) {

    if (money == 10) {
        this.dough = dough;
        this.filling = filling;
        this.olives = olives;
        return this;
    }

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

    this.build = function() {
        return new PizzaRequest(data.money, data.dough, data.filling, data.olives);
    };


}