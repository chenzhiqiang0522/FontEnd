"use strict";
// 使用class关键字定义一个类
/*
*  对象中主要包含了两个部分
*      属性
*      方法
* */
class Person {
    constructor() {
        // 实例属性
        this.name = "孙悟空";
        this.age = 20;
    }
}
// 类属性（静态属性），无需创建对象，可以直接使用
Person.gender = "man";
const per = new Person();
console.log(per);
console.log(per.age, per.name); //访问实例属性
console.log(Person.gender); //访问类属性
