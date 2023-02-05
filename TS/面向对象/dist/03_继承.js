"use strict";
(function () {
    /*
    * extends表示继承,使用继承后子类会拥有父类所有的方法和属性
    * 可以将多个类中共有的代码写在同一个父类中，使用继承可以只用写一份代码
    *   如果希望在子类中添加一些父类中没有的方法，直接在子类添加即可
    *开发要遵循OCP原则
    * */
    class Animal {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        sayHello() {
            console.log("动物在叫");
        }
    }
    // 使Dog继承Animal
    class Dog extends Animal {
        sayHello() {
            console.log("汪汪汪！！！！！");
        }
        run() {
            console.log(`${this.name}在跑`);
        }
    }
    class Cat extends Animal {
        sayHello() {
            console.log("喵喵喵！！！！！");
        }
    }
    const dog1 = new Dog("旺财", 3);
    console.log(dog1);
    dog1.sayHello();
    dog1.run();
    const cat1 = new Cat("咪咪", 3);
    console.log(cat1);
    cat1.sayHello();
})();
