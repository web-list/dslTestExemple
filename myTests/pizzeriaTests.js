import assert from 'assert';
import  {NewPizzaRequest} from "../mySrc/Pizzeria";

suite("pizzeria tests", function() {

    setup(function() {
    });

    suite("customer pay $10 and ask thin chicken pizza without olives", function() {

        test("customer get chicken pizza", function() {
            let money = 10;
            let pizza = new NewPizzaRequest()
                .pay(money)
                .onDough("thin")
                .withFilling("chicken")
                .withoutOlives()
                .build();
            assert.equal(pizza.filling, "chicken");
        });
    });

    teardown(function() {
    });

});