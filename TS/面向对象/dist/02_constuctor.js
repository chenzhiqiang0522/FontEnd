"use strict";
class Dog {
    constructor(name, age) {
        // this表示当前的实例
        this.name = name;
        this.age = age;
    }
    bark() {
        // alert("汪汪汪");
        // 可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
const dog1 = new Dog("旺财", 3);
const dog2 = new Dog("小白", 3);
console.log(dog1);
console.log(dog2);
dog1.bark();
dog2.bark();
