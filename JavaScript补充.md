# JavaScript补充

## 面向对象

### 浅拷贝(shallow copy)和深拷贝（deep copy）

1. 浅拷贝（可以理解为“抢劫东西”，外壳不同，内容是一样的）

   + 浅拷贝就是只对对象的浅层复制（值复制一层）

   + 通常对对象的拷贝都是浅拷贝

   + 如果对象中存储的是原始值，那么拷贝的深浅不重要

   + 浅拷贝（slice()方法）只会对对象进行复制，不会复制对象中的属性（或者元素）,在代码示例中，arr2只复制了arr中数组的内存，并未复制数组中的对象。

   + 

     ```javascript
     const arr = [{name:"孙悟空"},{nameL"猪八戒"}]
     const arr2 = arr.slice
     
     arr===arr2		//false，由于浅拷贝，内存地址不同，不是同一个对象
     arr[0]===arr2[0]	//true,由于浅拷贝并未复制数组中的内容，里面的内容的内存是相同的，是同一块内存空间
     ```

2. 深拷贝

   + 深拷贝不仅复制对象本身，而且还复制对象中的属性和元素

   + 通常情况下不太使用深拷贝，性能差

   + 深拷贝（structureClone()方法）不仅会对对象进行复制，还会复制对象中的属性（或者元素）,在代码示例中，arr2不仅复制了arr中数组的内存，还复制数组中的对象。

   + ```javascript
     const arr = [{name:"孙悟空"},{nameL"猪八戒"}]
     const arr2 = arr.slice()
     const arr3 = structureClone(arr)
     
     arr===arr2		//false，由于深拷贝，内存地址不同，不是同一个对象
     arr[0]===arr3[0]	//false,由于深拷贝不仅复制数组中的内容，也复制了里面的内容所以内容的内存是不相同的，不是同一块内存空间
     ```

### 展开运算符（...）



### 原型

#### 对象的结构

1. 对象中存储属性的区域实际有两个

   1. 对象自身

      直接通过对象的所添加的属性（对象.属性），位于对象自身中

      在类中通过赋值（x=y）的方式形式添加的属性，位于对象自身中

   2. 对象原型（prototype）

      对象中还有一些内容，会存储到其他的对象中（原型对象）

      在对象中会有一个属性来存储原型对象，叫做__prototype__
      
      对象属性或（者方法）的访问顺序，当访问对象属性时，会优先访问对象自身的属性，如果对象没有该属性时，再去原型中寻找对应名称的属性。
      
      如果把一个方法赋值给一个变量，则这个方法存在于对象自生中：如果直接定义方法则该方法在原型中。
      
      ```javascript
      const name = sayHello(){	//该方法在对象中
          
      }
      
      sayHello(){		//该方法在原型中
          
      }
      ```

#### 原型链

1. 可以通过对象.**__**proto**__** 和**Object.getPrototypeOf()**来访问原型，二者效果相同。

2. 原型链：原型对象也有原型，这样就构成了一条原型链，根据对象的复杂程度不同，原型链的长度也不同。**读取对象属性时，会优先去对象自生属性中寻找，对象属性中有，则使用，没有则去对象的原型中寻找；如果对象的原型中有则使用，没有则去对象的原型的原型中寻找，递归进行；直到找到Object对象的原型（Object对象没有原型），如果还没有找到则返回undefined。**

3. 所有相同类型对象它们的原型对象都是同一个，这就意味着，同类型对象的原型链时相同的；

4. 原型的作用：

   1. 原型就相当于一个公共的区域，可以被该类的实例来访问。
   2.  可以将该类的公共的方法统一存储到原型中，这样只需要创建一个属性，即可被所有实例访问。 在对象中有值是对象独有的，比如说属性，每个对象都有自己的属性；但有的值对于每个对象来说时相同的， 比如说方法，对于这些一样的值，没必要重复创建，浪费内存空间。

5. JS中的继承就是基于原型的，使用叫做原型继承，当我们继承时，子类的原型就是父类的实例,如下代码中的sp对象，其原型链为：

   sonPerson --> Person --> object --> Object原型 -->null

   ```javascript
   class Person {
         name="孙悟空";
         age=18;
   
         sayHello(){
           console.log("Hello,我是"+this.name)
         }
       }
       class sonPerson extends Person{
   
       }
       const p =new Person()
       const p1 = new Person()
       //console.log(p.__proto__===p1.__proto__)
       const sp = new sonPerson()
   
   
   ```

#### 修改原型

1. 大部分情况下，我们不需要修改原型对象，修改原型对象很危险
2. **注意：
             千万不要通过类的实例去修改原型，
               1.通过一个对象影响所有的同类对象，不合适
               2.修改原型要创建实例，比较麻烦
               3.这样操作比较危险**
3.  除了通过**__**proto**__**来访问对象的原型外，还可以通过**prototype**来访问，二者严格相等，使用prototype对原型操作是对当前原型操作，不是当前原型的原型,所以修改原型时通过该方法修改。好处：1.一经修改就是修改所有实例的原型2.无需创建实例即可完成修改
4. **修改原则：**
   1.  **原型尽量不要手动修改**
   2. **要改也不要通过实例去修改**
   3. **改原型通过prototype去修改**
   4. **最好不要对prototype赋值，这样会改变对象的继承类**

#### instance&hasOwn()

1. in用来检查属性是否存在在类中无论是在类自身属性中还是原型中，只要定义了则返回true，否则返回false。

2. instance用来检查一个对象是不是某个类的实例，任何对象都是Object的实例

3. hasOwnProperyh()方法会返回一个布尔值，指示对象自身属性中是否具有指定的属性（用来检查属性是否在对象自身属性中），可以使用hasOwn()来代替

   1. 使用：对象（实例）.hasOwnProperty(prop)	prop：要检测的属性的 [`String`](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String) 字符串形式表示的名称，或者 Symbol。**即使属性的值是 null 或 undefined，只要属性存在，hasOwnProperty 依旧会返回 true**。

4. hasOwn():如果指定的对象自身有指定的属性，则静态方法 Object.hasOwn() 返回 true。如果属性是继承的或者不存在，该方法返回 false，如果属性是继承的或者不存在，该方法返回 false。**Object.hasOwn() 旨在取代 Object.hasOwnProperty()**。

   1. 使用：

      **Object.hasOwn(instance, prop)**，instance是要测试的实例对象；prop是要测试属性的名称或者 Symbol。

### 使用旧方法创建类

1. 使用函数来定义类

   一个函数如果直接使用xxx()的方式调用，则就是一个普通函数

   一个函数如果使用new来调用以new xxx()的形式，那么这个函数就是一个构造函数，会创建一个对象，等价于使用class创建。

   在函数中直接写class方式中构造函数中的内容,如示例代码中的第2、3行，期中this表示创建的这个类。

   **注意：通常使用旧方法创建类，需要将其写在立即执行函数里面，形成闭包，最后用return返回创建的类**

   ```javascript
   function Person(name,age){		//	使用函数来定义类
       this.name = name;
       this.age = age;
   }
   Person.prototype.sayHello(){		//向原型中添加方法，不能在函数中添加
       
   }
   
   Person.staticProperty = "xxxx"		//添加静态属性
   Person.staticMethod = function(){}	//添加静态方法
   
   class Person{					//	使用class来定义类
       name;
       age;
       constructor(name,age){
           this.name = name;
           this.age = age;
       }
       sayHello(){
           
       }
   }
   
   (function(){	//使用闭包
       function Person(name,age){		
       this.name = name;
       this.age = age;
       }
       Person.prototype.sayHello(){		
   
       }
   
       Person.staticProperty = "xxxx"		
       Person.staticMethod = function(){}	
   
       class Person{					
           name;
           age;
           constructor(name,age){
               this.name = name;
               this.age = age;
           }
           sayHello(){
   
           }
       }
       return Person
   })()
   
   const p = new Person()
   ```

   



### new关键字的作用以及执行步骤



1. new运算符允许开发人员创建用户定义对象类型或具有构造函数的内置对象类型之一的实例。

2. 在new一个实例的步骤来源于[mdn]([new operator - JavaScript | MDN (mozilla.org)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new) "MDN中new的相关内容")

   1. 原文：Creates a blank, plain JavaScript object. For convenience, let's call it newInstance.

      翻译：创建一个普通的空白的JavaScript对象，为了方便称其为新对象

   2. 原文：Points newInstance's [[Prototype]] to the constructor function's prototype property, if the prototype is an Object. Otherwise, newInstance stays as a plain object with Object.prototype as its [[Prototype]].

      翻译：如果原型是Object，则将新对象的prototype设置为函数的原型；否则新对象将使用普通对象Object作为prototype。相当于下面的第三行代码

      ```javascript
      function myClass(){
          var newInstance = {}
          newInstance.__proto__ = myClass.prototype
      }
      ```

      

   3. 原文：Executes the constructor function with the given arguments, binding newInstance as the this context (i.e. all references to this in the constructor function now refer to newInstance).

      翻译：使用实参执行构造函数，并且将this设置为新对象（通过this就相当于访问新对象）。

   4. 原文：If the constructor function returns a non-primitive, this return value becomes the result of the whole new expression. Otherwise, if the constructor function doesn't return anything or returns a primitive, newInstance is returned instead. (Normally constructors don't return a value, but they can choose to do so to override the normal object creation process.)

      翻译：如果构造函数返回的是一个非原始值（即指定返回的值），则该值会作为new运算的返回值返回；如果构造函数的返回值是一个原始值或者没有返回值，则会返回创建的新对象，**通常情况下不用返回任何值**。





## 闭包



