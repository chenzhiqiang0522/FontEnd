(function (){

    type mytype = {
        name:string;
        age:number
    }
    //  描述一个对象的类型,作用和type作用一样
    interface myInterface{
        name:string,
        age:number
    };
    // const obj : myInterface = {
    //     name:"hhhhh",
    //     age:21
    // }
    interface myInter{
        name:string;
        sayHello():void;
    }

    //用myClass实现接口
    class myClass implements myInter{
        name: string;
        constructor(name:string) {
            this.name = name;
        }

        sayHello(): void {
        }

    }
})();