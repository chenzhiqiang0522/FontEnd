// 使用class关键字定义一个类
/*
*  对象中主要包含了两个部分
*      属性
*      方法
* */
 class Person {
  // 实例属性
  name:string = "孙悟空";
  age:number = 20;
  // 类属性（静态属性），无需创建对象，可以直接使用
  static gender:string = "man"
}

const per = new Person();
console.log(per)
console.log(per.age,per.name) //访问实例属性
console.log(Person.gender)   //访问类属性
