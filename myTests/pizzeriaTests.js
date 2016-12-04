import assert from 'assert';
import  {NewClientRequest, Pizzeria} from "../mySrc/Pizzeria";

suite("pizzeria tests", function () {

    setup(function () {
    });

    suite("customer pay $10 and ask thin chicken pizza without olives", function () {

        let pizzeria;

        setup(function () {
            pizzeria = new Pizzeria();
        });

        test("customer get chicken pizza", function () {
            let money = 10;
            let request = new NewClientRequest()
                .pay(money)
                .onDough("thin")
                .withFilling("chicken")
                .withoutOlives()
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza();

            assert.equal(pizza.filling, "chicken");
        });

        test("customer get thin pizza", function () {
            let money = 10;
            let request = new NewClientRequest()
                .pay(money)
                .onDough("thin")
                .withFilling("chicken")
                .withoutOlives()
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza();

            assert.equal(pizza.dough, "thin");
        });

        test("customer get thin pizza", function () {
            let money = 10;
            let request = new NewClientRequest()
                .pay(money)
                .onDough("thin")
                .withFilling("chicken")
                .withoutOlives()
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza();

            assert.equal(pizza.olives, false);
        });
    });

    suite("customer not pay and ask any pizza", function () {

        let pizzeria;

        setup(function () {
            pizzeria = new Pizzeria();
        });

        test("customer do not get pizza", function () {
            let request = new NewClientRequest()
                .withFilling("chicken")
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza(request);

            assert.equal(pizza.count, 0);
        });

    });

    suite("customer pay $30 ask 3 pizza", function () {

        let pizzeria;

        setup(function () {
            pizzeria = new Pizzeria();
        });

        test("customer get 3 pizza", function () {
            let money = 30;
            let count = 3;
            let request = new NewClientRequest()
                .withoutOlives()
                .count(count)
                .pay(money)
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza();

            assert.equal(pizza.count, 3);
        });

    });
    //
    suite("customer pay more than required and get back", function () {

        let pizzeria;

        setup(function () {
            pizzeria = new Pizzeria();
        });

        test("when customer pay $40 and ask 3 pizza then back equal $10", function () {
            let money = 40;
            let count = 3;

            let request = new NewClientRequest()
                .count(count)
                .pay(money)
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza();

            assert.equal(pizza.back, 40 - 3 * 10);
        });

    });

    suite("customer ask pizza with mushrooms filling", function () {

        let pizzeria;

        setup(function () {
            pizzeria = new Pizzeria();
        });

        test("customer pay $9 and get pizza", function () {
            let money = 9;
            let request = new NewClientRequest()
                .pay(money)
                .withFilling("mushrooms")
                .build();
            pizzeria.pushOrder(request);
            let pizza = pizzeria.getPizza();

            assert.equal(pizza.count, 1);
        });

    });

    teardown(function () {
    });

});