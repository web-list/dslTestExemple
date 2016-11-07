import assert from 'assert';
import  {NewPizzaRequest} from "../mySrc/Pizzeria";

suite("pizzeria tests", function() {

    setup(function() {
    });

    suite("customer pay $10 and ask thin chicken pizza without olives", function() {

        let money, pizza;

        setup(function() {
            money = 10;
            pizza = new NewPizzaRequest()
                .pay(money)
                .onDough("thin")
                .withFilling("chicken")
                .withoutOlives()
                .build();
        });

        test("customer get chicken pizza", function() {
            assert.equal(pizza.filling, "chicken");
        });

        test("customer get thin pizza", function() {
            assert.equal(pizza.dough, "thin");
        });

        test("customer get thin pizza", function() {
            assert.equal(pizza.olives, false);
        });
    });

    suite("customer not pay and ask any pizza", function() {

        test("customer do not get pizza", function() {

            let pizza = new NewPizzaRequest()
                .withFilling("chicken")
                .build();

            assert.equal(pizza.count, 0);
        });

    });

    suite("customer pay $30 ask 3 pizza", function() {

        test("customer get 3 pizza", function() {
            let money = 30;
            let count = 3;

            let pizza = new NewPizzaRequest()
                .withoutOlives()
                .count(count)
                .pay(money)
                .build();

            assert.equal(pizza.count, 3);
        });

    });

    suite("customer pay more than required and get back", function() {

        test("when customer pay $40 and ask 3 pizza then back equal $10", function() {
            let money = 40;
            let count = 3;

            let pizza = new NewPizzaRequest()
                .count(count)
                .pay(money)
                .build();

            assert.equal(pizza.back, 40 - 3 * 10);
        });

    });

    teardown(function() {
    });

});