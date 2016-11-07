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

    teardown(function() {
    });

});