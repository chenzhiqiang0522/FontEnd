"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("动物在叫");
        }
    }
    class Dogs extends Animal {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
        sayHello() {
            // super表示该子类的父类（超类）
            super.sayHello();
        }
    }
    const dog = new Dogs("旺财", 3);
    dog.sayHello();
})();
