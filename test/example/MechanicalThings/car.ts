/// <reference path="../../../references.ts" />
var assert = require("assert");

// When testing modules you can declare tests inside a module block
module Example {
    export module MechanicalThings {
        describe('Example.MechanicalThings Module', function () {
            describe('move()', function () {
                it('should return the right sound effect', function () {
                    var car = new CarImpl();
                    assert.equal(car.sound(), 'vroom!');
                });
            });

            describe('position()', function () {
                it('should return an instance of Coordinate initialized to (0, 0)', function () {
                    var car = new CarImpl();
                    assert.deepEqual({x: 0, y: 0}, car.position());
                });
            });

            describe('move()', function () {
                it('should change the location of position()', function () {
                    var car = new CarImpl();
                    car.move({x: 2, y: 3});
                    assert.deepEqual({x: 2, y: 3}, car.position());
                });
                it('should change the location in an additive way', function () {
                    var car = new CarImpl();
                    car.move({x: 2, y: 3});
                    car.move({x: 0, y: -4});
                    assert.deepEqual({x: 2, y: -1}, car.position());
                });
            });
        });
    }
}
