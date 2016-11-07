import assert from 'assert';
import  {PizzaRequest} from "../mySrc/Pizzeria";

suite("pizzeria tests", function() {

    setup(function() {
    });

    suite("customer pay $10 and ask thin chicken pizza without olives", function() {

        test("customer get chicken pizza", function() {
            let money = 10;
            let pizza = new PizzaRequest(money, "thin", "chicken", false);
            assert.equal(pizza.filling, "chicken");
        });
    });

    teardown(function() {
    });

});