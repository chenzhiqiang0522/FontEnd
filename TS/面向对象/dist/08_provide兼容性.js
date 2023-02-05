"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dog extends Animal {
        constructor(name) {
            super(name);
        }
    }
    class Bird {
        constructor(name) {
            this.name = name;
        }
    }
    class Fox {
        constructor(name) {
            this.name = name;
            this.gender = "men";
            this.name = name;
        }
    }
    let animal = new Animal("瓜兮兮");
    let dog = new Dog("风车车");
    let bird = new Bird("哒哒");
    animal = dog;
    //animal=bird;            Error	TS2322: Type 'Bird' is not assignable to type 'Animal'.Types have separate declarations of a private property 'name'.
})();
