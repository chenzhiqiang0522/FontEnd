(function () {

    class Animal {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Dog extends Animal {
        constructor(name:string) {
            super(name);
        }
    }
    class Bird {
        private name: string;

        constructor(name: string) {
            this.name = name;
        }
    }

    class Fox {
        private gender:string = "men";
        constructor(private name:string) {
            this.name = name;
        }
    }

    let animal = new Animal("瓜兮兮");
    let dog = new Dog("风车车");
    let bird = new Bird("哒哒");
    animal=dog;
    //animal=bird;            Error	TS2322: Type 'Bird' is not assignable to type 'Animal'.Types have separate declarations of a private property 'name'.

})()