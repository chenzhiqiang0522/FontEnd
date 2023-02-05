"use strict";
(function () {
    //  定义一个只能被继承的类，不能用该类来创建实例的类叫做抽象类，要用abstract关键字
    class Animal {
        constructor(name) {
            this.name = name;
        }
    }
    class Dogs extends Animal {
        constructor(name) {
            super(name);
        }
        sayHello() {
            console.log("喵喵喵!!!!");
        }
    }
    const dog = new Dogs("旺财");
    dog.sayHello();
})();
