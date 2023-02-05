"use strict";
/*
* TypeScript中属性修饰符有三种public,private,protected
* public表示公共的，public修饰的变量可以在任何地方（包括子类）访问到。
* private表示私有的，只有在该类里面才能访问到
*
* */
(function () {
    class myInter {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log("HelloWord");
        }
    }
    class myClass extends myInter {
        constructor(name, age) {
            super(name);
            this.age = age;
        }
    }
    const m1 = new myInter("孙悟空");
})();
