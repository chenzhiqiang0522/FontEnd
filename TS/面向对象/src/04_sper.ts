(function (){
    class Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        sayHello(){
            console.log("动物在叫");
        }
    }
    class Dogs extends Animal{
        age:number;
        constructor(name:string,age:number) {
            super(name);
            this.age = age;
        }
        sayHello() {
            // super表示该子类的父类（超类）
            super.sayHello();
        }
    }
    const dog = new Dogs("旺财",3);
    dog.sayHello();
})()