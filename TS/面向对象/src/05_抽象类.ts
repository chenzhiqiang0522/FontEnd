(function (){
    //  定义一个只能被继承的类，不能用该类来创建实例的类叫做抽象类，要用abstract关键字
    abstract class Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        //  定义抽象方法同样也要用absract关键字，抽象方法在抽象类中只声明，没有函数体，在子类一定要实现抽象方法，否则会报错。
        abstract sayHello():void;
    }
    class Dogs extends Animal{
        constructor(name:string) {
            super(name);
        }
        sayHello() {
            console.log("喵喵喵!!!!")
        }
    }
    const dog = new Dogs("旺财");
    dog.sayHello();
})()