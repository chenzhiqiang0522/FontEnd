<h1 style="text-align:center">TypeScript</h1>
# JavaScript的缺点

1. JS没有块级作用域
2. JavaScript代码维护很艰难
3. JavaScript不报错

# TypeScript是什么

1.  TypeScript是以JavaScript为基础构建的语言，是JavaScript的一个超集（它能干JavaScript能干的事儿，还能干JavaScript不能干的事儿）。

2. 在JavaScript的基础上引入了类型的概念，可以在任何支持js的平台中执行。

3. TS不能被JS解析器直接执行，需要将TS文件编译为JS文件然后执行。

# TypeScript增加了什么

1. 增加了*类型*
2. 支持ES的新特性
3. 添加ES不具备的新特性
4. 丰富的配置选项
5. 强大的开发工具
6. 为现在的开发工具的代码提示做出了巨大贡献

# TypeScript开发环境搭建

1. 下载Node.js
2. 安装Node.js
3. 使用npm安装全局TypeScript
   - npm install -g typescript
4. 创建一个TS文件
5. 使用TS对JS文件进行编译
   + 进入命令行
   + 进入TypeScript文件所在目录
   + 执行命令： tsc xxx.ts

# TypeScript语法  

## 基本类型

+ 基本类型

| 数据类型 | 关键字  |                             描述                             |
| :------: | :-----: | :----------------------------------------------------------: |
|   any    |   any   |               any类型可以赋值给任意类型的变量                |
| unkonwn  | unknown |                        不确定数据类型                        |
|  number  | number  |                           任意数字                           |
|  字符串  | string  |                          任意字符串                          |
|   布尔   | bolean  |                         true或false                          |
|   数组   |   无    |                           任意类型                           |
|   元组   |   无    | TypeScript新增类型，用来表示已知元素数量和类型的数组，各元素的类型不必相同，对应位置的类型需要相同。 |
|   枚举   |  enmu   |     枚举，TypeScript新增类型，枚举类型用于定义数值集合。     |
|   对象   |   无    |                      任意JavaScript对象                      |
|   void   |  void   | 空值（undefined、null ），用于标识函数返回值的类型，表示该函数没有返回值。 |
|  never   | 没有值  | 不能是任何值（也不能为undefined和null）,`never`类型是那些总是会抛出异常或根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型； |



+ 类型声明

  + 类型声明是TypeScript非常重要的一个特点
  + 通过类型声明可以指定TypeScript变量（参数、形参）的类型
  + 指定了类型后，在赋值是就会自动检查是否符合类型声明，符合则赋值，否则报错，但依旧可以通过编译，编译为JavaScript文件（可以配置更改）；TypeScript可以编译为任意版本的JavaScript。

  ``` TypeScript
  let/var/const/var/const [变量名] : [类型] = 值;//声明后就赋值；如果声明和赋值同时进行， TypeScript会自动对变量进行类型检测
  let/var/const [变量名]	//若省略类型，则默认类型为any	
  function fun(参数:类型，参数:类型): 返回值类型{}
  
  //对象的使用
  let/var/const/var/const b:{}	//定义一个对象
  let/var/const b:{属性名：类型}	//定义一个带特定属性的对象（有且仅有一个属性）
  let/var/const b:{属性名:类型,属性名？:类型}//带有可选属性的对象，?代表该属性是可选的
  let/var/const b:{属性名:类型，[propName:string]:any}	//[propName:string]:any表示任意类型的属性，可以理解为[propName:string]:any表示字符串类型的属性名，它的值是任意类型，所以是任意类型的属性
  
  //函数的使用
  let/var/const b:(a:number,b:number)=>number	//定义一个函数以及其参数和返回值的类型
  
  //数组(类型+[] or Array<类型>)
  let/var/const b:number[]		//定义一个数字类型的数组
  let/var/const b:string[]		//定义一个字符串类型的数组
  ```
  
+ 特殊使用

  + 省略类型，则默认为any类型，any类型可以赋值给任意类型的变量，被赋值的变量就失去了类型指定。**慎用！！！！！！！**
  + 不可以将unknown数据类型赋值给已知类型的变量，否则会报错，如果非要赋值可以通过if判断和断言来解决报错。代码如下：

  ```typescript
  let/var/const e:unkown;
  let/var/const s:string;
  if(typeof e === string){		//方法一：通过if判断赋值
      s=e;
  }
  
  s=e as string;					//方法二：通过as断言来赋值,类型断言见下
  s= <string> e					//方法三：该同方法二
  ```

  ## 类型断言
  
  类型断言可以用来手动指定一个值的类型，即允许变量从一种类型更改为另一种类型，它之所以不被称为***类型转换***，是因为转换通常意味着某种运行时的支持（在遇到变量实际数据类型与定义的数据类型不符时将转换数据类型的这一种操作）。但是，类型断言纯粹是一个编译时语法，告知编译器该变量的数据类型，是一种为编译器提供关于如何分析代码的方法。
  
  ```typescript
  <类型> 值
  ```
  
  或者
  
  ```typescript
  值 as 类型
  ```
  
  

#  编译选项

1. 自动编译

   + `tsc xxxx.ts -w` 在监视模式下编译，当当前文件发生变化时会自动编译。

   + `tsc` 编译 文件夹中的全部文件，需要在项目根目录下有`tsconfig.json`配置文件，webstorm默认的配置文件如下：

     ```typescript
     {
         "compilerOptions": {
         "module": "commonjs",
         "target": "es5",
         "sourceMap": true
       	},
       	"exclude": [
         "node_modules"
       	]
     }
     ```
     
     文件夹全部编译则需要将默认配置内容全部删除，只留下`{}` 

   

2. tsconfig.json配置内容

   1. include需要被编译的文件目录   **`重要`** 

      + 是一个数组

      + 内容是需要被编译文件的路径

      + ```typescript
        {
            "include":[
                "./src/**/*"			//**任意目录，*表示任意文件，所以该路径的意思为当前目录下的src文件夹下的任意目录中的任意文件即当前目录下的src文件夹下的所有文件
            ]
        }
        ```

   2. exclude

      + 不需要被编译的文件，语法格式同include，也是一个数组。
      + 默认值：["node_modules","bower_component","jspm_packages"]

   3. extend

      + 继承，相当于引入外部文件

   4. files

      + 定义被编译的文件列表，只有需要编译的文件少时才会用到
      + 该配置中是文件的名字，注意和include的区别，include是需要编译文件的目录
      + 语法格式同include

   5. compilerOption

      + 值是一个json对象
      
      + target
        + 被编译为JavaScript的版本
        + 可选值：'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext'
        + ```typescript
          compilerOption{
              "target":"ES5"
          }
          ```
        + 
        
      + module
        + 指定要使用的模块化的规范
        + 可选值：'none', 'commonjs', 'amd', 'system', 'umd', 'es6', 'es2015', 'es2020', 'es2022', 'esnext', 'node16', 'nodenext'.
        + ```typescript
          compilerOption{
              "module":"es6"
          }
          ```
        + 
        
      + lib（可选，一般不改变）
        + 其值是一个字符串数组
        
        + 指定项目中的库文件，一般不用改
        
        + 可选值：'es5', 'es6', 'es2015', 'es7', 'es2016',
           'es2017', 'es2018', 'es2019', 'es2020', 'es2021', 'es2022', 'esnext', 'dom', 'dom.iterable', 'webworker', 'webw
          orker.importscripts', 'webworker.iterable', 'scripthost', 'es2015.core', 'es2015.collection', 'es2015.generator'
          , 'es2015.iterable', 'es2015.promise', 'es2015.proxy', 'es2015.reflect', 'es2015.symbol', 'es2015.symbol.wellkno
          wn', 'es2016.array.include', 'es2017.object', 'es2017.sharedmemory', 'es2017.string', 'es2017.intl', 'es2017.typ
          edarrays', 'es2018.asyncgenerator', 'es2018.asynciterable', 'es2018.intl', 'es2018.promise', 'es2018.regexp', 'e
          s2019.array', 'es2019.object', 'es2019.string', 'es2019.symbol', 'es2019.intl', 'es2020.bigint', 'es2020.date', 
          'es2020.promise', 'es2020.sharedmemory', 'es2020.string', 'es2020.symbol.wellknown', 'es2020.intl', 'es2020.numb
          er', 'es2021.promise', 'es2021.string', 'es2021.weakref', 'es2021.intl', 'es2022.array', 'es2022.error', 'es2022
          .intl', 'es2022.object', 'es2022.sharedmemory', 'es2022.string', 'esnext.array', 'esnext.symbol', 'esnext.asynciterable', 'esnext.intl', 'esnext.bigint', 'esnext.string', 'esnext.promise', 'esnext.weakref'
          
        + ```typescript
          compilerOption{
              "lib":["document"]
          }
          ```
        
      + outDir
        + 指定编译后的文件所在目录。
        
      + outFile（一般不用，后期结合打包工具代替）
        + 将多个代码文件整合到同一个文件，设置之后，所有全局作用域的代码会合并到一个文件中。
        
      + allowJs
        + 其值是一个布尔值，默认是false
        + 是否对目录中的JS文件进行编译
        
      + checkJs
        + 其值是一个布尔值，默认是false
        + 检查JS是否符合TypeScript语法规范
        
      + removeComments
        + 其值是一个布尔值，默认是false
        + 是否移除代码注释
        
      + noEmit
        + 其值是一个布尔值，默认是false
        + 不生成编译后的JS文件，一般用来检查代码是否符合规范
        
      + noEmitOnError
        + 其值是一个布尔值，默认是false
        + 当有错时不生成编译后的js文件
        
      + alwaysStrict
        + 其值是一个布尔值，默认是false
        + 用来设置编译后的js文件是否使用严格模式
        
      + noImplicitAny
        + 其值是一个布尔值，默认是false
        + 用于检查代码变量类型是否包含隐式的any
        
      + onImplicitThis
        + 其值是一个布尔值，默认是false
        + 是否允许类型不明确的this
        
      + strictNullChecks
        + 其值是一个布尔值，默认是false
        + 严格检查空值，如果有概率出现空值，则会报错
        
      + strict
        + 其值是一个布尔值，默认是false
        + 严格检查模式的总开关，一般建议设置为true

# 打包工具(Webpack)

## webpack初步使用

1. 使用`npm init`初始化项目

2. 安装webpack相关依赖，命令` cnpm install -D webpack webpack-cli typescript ts-loader`

3. 创建webpack.config.js配置文件，基础配置如下：变量声明了，但未使用，打包的时候不会打包进去。

   ```webpack
   // 引入一个包，用于路径的组合
   const path = require('path')
   
   // webpack中的所有配置都应该写在module.exports中
   module.exports={
       // 指定入口文件
       entry:'./src/index.ts',
   
       //  指定打包文件的输出目录
       output: {
           // 指定打包文件的目录,可以直接用字符串指定
           path: path.resolve(__dirname,"dist"),
           // 打包后的文件名
           filename: "bundle.js"
       },
       // 指定webapck打包时所用的模块
       module: {
           // test指定规则生效的文件,指定哪些文件需要被打包
           rules: [
               {
                   // test指定规则生效的文件
                   test: /\.ts$/,
                   // 要使用的加载器（loader）
                   use: 'ts-loader',
                   // 要排除的文件
                   exclude: /node_modules/,
               }
           ]
       }
   }
   ```

4. 在package.json中的scripts中添加命令

   ```javascript
   "build": "webpack --mode development“
   ```

5. 修改tsconfig.jsion（可选）

   ```javascript
   {
     "compilerOptions": {
       "module": "ES2015",
       "target": "ES2015",
       "strict": true
     }
   }
   ```

6. 在终端中运行`npm run build` 命令

## webpack初步进阶

1. html-webpack-plugin插件

   + 该插件用于自动创建HTML文件，并引入相关资源

   + 插件使用

     + 插件引入

       ```javascript
       const HTMLWebpackPlugin = require('html-webpack-plugin');
       ```

     + 修改配置，在module.exports中添加plugin相关配置

       ```javascript
       plugins: [
               new HTMLWebpackPlugin({
                   // title: "一个自定义的title"
                   template: "./index.html"
               }),
           ]
       ```

2. webpack-dev-server插件

   + 该插件用于在HTML模板文件发生改变时自动重新打包编译

   + 插件使用

     + 安装插件
     + 在package.json中的scripts中添加命令
     
     ```javascript
     "start": "webpack server --open --mode development"
     ```
     
     或者
     
     ```javascript
     "start":"webpack server --open chrome.exe" 
     ```

3. clean-webpack-plugin插件

   + 用于在每次重新打包之前，删除原来的打包文件即清除dist中的文件

   + 插件使用

     + 插件安装

       ```bash
       npm install -D clean-webpack-plugin
       ```

     + 插件引入

       ```javascript
       const { CleanWebpackPlugin } = require("clean-webpack-plugin")		//引入包
       ```

     + 修改配置，在module.exports中添加plugin相关配置
     
       ```javascript
       plugins:[
           new CleanWebpackPlugin()
       ]
       ```

4. 解决自定义模块引入问题

   + 在模块中有引入自己编写的其他模块文件时，在使用webpack打包的时候会报错，因为webpack不知道那些扩展名可以作为模块引入，因此需要在配置文件中进行配置。

   + 配置方法

     + 在webpack.config.js中的module.exports中添加resolve项。

     ```javascript
     resolve:{
                extensions:['.ts','js']
     }
     ```

5. @babel/core @babel/preset-env babel-loader core-js

   1. babel是为了让将新技术在旧版本的浏览器上运行的一个工具包。

   2. 安装插件

     + ```bash
        cnpm install -D @babel/core @babel/preset-env babel-loader core-js
       ```

   3. 插件引入

     + 修改webpack.config.js中的use中的配置

       ```javascript
       use: [
           //配置babel
           {
               // 指定加载器
               loader: "babel-loader",
               //设置babel
               options: {
                   //设置预定义环境
                   presets:[
                       [
                       // 指定环境插件
                       "@babel/preset-env",
                       	// 配置信息
                           {
                               //要兼容的目标浏览器版本
                               targets:{
                                   "chrome":"88",
                                   "ie":"11"
                               },
                               // 指定corejs的版本
                               "corejs":"3"
                               // 使用corejs的方式,usage表示按需加载corejs里面提供的方法
                               "useBuiltIns":"usage"
                           }
                       ]               
                   ]
               }
           },
           'ts-loader'
       ],
       ```

     + 对IE的兼容性配置(修改module.exports中output)

       ```javascript
       output: {
           // 指定打包文件的目录
           path: path.resolve(__dirname,"dist"),
           // 打包后的文件名
           filename: "bundle.js",
           //兼容IE，告诉webpack禁用箭头函数
           environment: {
               arrowFunction: false
           }
       },
       ```


# 面向对象

1. 计算机中的一切操作都是对对象的操作，因为计算机的程序本身就是对现实事物的抽象，在 程序中可以表示一切事物，而事物在程序中的表现就是对象。
2. 程序中的对象包含两个部分，分别为属性和方法。以人为例子，人的姓名、身高、体重、性别等属于数据，而人可以说话、走路、吃饭等属于行为。在程序中数据属于属性，行为属于方法。

## 类(Class)

要对对象进行操作，首先需要有对象，那么就需要创建对象。创建对象，必须先创建类，类是对象的基本结构，相当于模型。

### 定义类

可以在属性名前可以加**readonly**，将属性设置为只读属性，只能读不能改。只读属性必须在声明时或构造函数里被初始化。

调用类属性时只需要**类名.属性**，调用实例属性时，需要**实例.属性**

```typescript
class 类名 {
    属性名：类型 [= 值],		//实例属性
    static  属性名：类型 [= 值]	//类属性又称静态属性，static是关键字
    ······
    方法名(){
        方法体
    }
}
```

### 构造器

可以通过构造器来声明（声明时要带上**属性修饰**）和初始化实例的属性，给属性赋初值，**有属性就一定要初始化**否则会报错，但初始化不一定要用构造器，也可以直接赋初值。下面以Dog类为例。

在类中我们可以通过使用**this**关键字来获取当前调用类方法的实例

```typescript
class Dog {
    name:string;			// 实例属性
    static age:number;				// 类属性又称静态属性
    constructor(name:string,age:number){			// 构造器
        // this表示当前的实例
        this.name = name;
        this.age = age;
    }
    bark(){				//	类方法
        // alert("汪汪汪");

        // 可以通过this来表示当前调用方法的对象
        console.log(this);
    }
}
```

### 继承(extends)

1. extends表示继承,使用继承后子类会拥有父类所有的方法和属性。
2. 可以将多个类中共有的代码写在同一个父类中，使用继承可以只用写一份代码。
3. 如果希望在子类中添加一些父类中没有的方法，直接在子类添加即可。
4. 开发要遵循OCP原则。
5. 若子类中有与父类相同的方法，在有需要的时候可以进行重写

**如果在子类中重写了构造函数，那么则在子类的构造函数中需要调用super方法见下2，去调用父类的构造函数。**

#### super关键字

1. super表示该子类的父类（超类）

   ```javascript
   super.sayHello();	//调用父类总的sayHello()方法
   ```

2. super()表示调用父类的构造器

   ```javascript
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
   	super(name);		//调用父类的构造器
   	this.age = age;
   	}
   }
   ```

#### 抽象类（abstract）

定义一个**只能被继承**的类，不能用该类来创建实例的类叫做抽象类；在抽象类中定义方法同样也要用absract关键字，叫**抽象方法**，抽象方法在抽象类中只声明，没有函数体，在子类一定要实现抽象方法，否则会报错。

```typescript
abstract class Animal {
        name:string;
        constructor(name:string) {
            this.name = name;
        }
        //  定义抽象方法同样也要用absract关键字，抽象方法在抽象类中只声明，没有函数体，在子类一定要实现抽象方法，否则会报错。
        abstract sayHello():void;
    }
```

### 接口(interface)

1. 描述一个对象的类型,作用和type作用一样 ,可以互相替换。但两者也有区别：①mytype不能定义相同名字的类型；接口可以定义相同名字的接口，最终效果是将所有相同名字接口的属性加在一起。

   ```typescript
   type mytype = {
       name:string;
       age:number
   }
   //  描述一个对象的类型,作用和type作用一样
   interface myInterface{
       name:string,
       age:number
   };
   const obj : myInterface = {
           name:"hhhhh",
           age:21
   }
   ```

2. 对对象的属性和方法进行声明，不能指定其值

   ```typescript
   interface myInter{
           name:string;
           sayHello():void;
   }
   ```

3. 实现接口，就是用一个类去满足接口中的声明。此处用myClass去实现myInter接口，接口中定义了name属性和sayHello方法，在myClass中就要有对应的属性和方法。

   ```typescript
   class myClass implements myInter{
   	name: string;
       sayHello(): void {
           }
   }
   ```

### 属性修饰

在typeScript中，属性有三种修饰符，分别为public，priviate，protected。

public表示公共的，public修饰的变量可以在任何地方（包括子类）访问到。

private表示私有的，只有在该类里面才能访问到。

protected表示受保护的，只有在该类以及子类中才能访问到。

typeScrip为数据提供了getter和setter方法。

```typescript
public getter(){
	return this.属性名;
}
public setter(value){
	return this.属性名 = value;
}

语法糖：
get 方法名(){
	return this.属性名;
}

set 方法名(){
	return this.属性名 = 属性值;
}
```



当我们比较带有 **`private`**或 **`protected`**成员的类型的时候。 如果其中一个类里包含一个 **`private`**成员，那么只有当另外一个类型中也存在这样一个 **`private`**成员， 并且它们都是来自同一处声明时（最常见的就是两个private成员来源于同一个父类），我们才认为这两个类型是兼容的（可以相互赋值）。对于 `protected`成员也使用这个规则。

```typescript
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

    let animal = new Animal("瓜兮兮");
    let dog = new Dog("风车车");
    let bird = new Bird("哒哒");
    animal=dog;
    animal=bird;	//Error	TS2322: Type 'Bird' is not assignable to type 'Animal'.   Types have separate declarations of a private property 'name'.

})()
```



### 泛型

在定义一个函数或是一个类的时候，如果不知道其返回值或者其参数的类型的时候，可以使用泛型用`<>` 来表示，同时还说明了**函数的参数和函数的返回值的类型是相同的**。示例如下：

```typescript
function<T>([a:T]):T{
	函数体
}
```

也可以手动指定泛型的类型，如果没有指定，TS可以根据实际的值进行自动推算类型。示例如下：

```typescript
function<string>([a:string]):string{		// 指定泛型的类型
	函数体
}

// 自动推算类型
function<T>([a:T]):T{
	函数体
}

let result = function （10）;		//TS会根据所给的实参，推算出泛型的类型为number类型

```

TS中还能定义多个泛型，示例如下：

```typescript
fuction<T,Q> (a:T,b:Q):T{
    函数体
}
```

泛型能够继承父类或者实现一个接口，示例如下：

```typescript
function <T extends fatherClass>:T{
    
}
function <T implement Interfance>:T{
          
}
```



# 函数

1. 基本使用同JavaScript相同，只是定义了函数的返回值类型，如果没有返回值，则该函数返回值为void。

   ```typescript
   function PrintName(FirstName:string,LastName:string){...}
   
   let result1 = PrintName("nick")		//error TS2554: Expected 2 arguments, but got 1.
   ```

   

2. 可选参数和默认参数

   如果在定义函数的时候定义了几个形参，在使用的时候就要传入几个参数，如果不确定参数，可以选择使用可选参数对形参进行预测。**可选参数**只需要在形参后面加个**`？`** ，代表该参数可有可无。**默认参数** 则是在定义形参的时候就直接初始化赋初值。

   ```typescript
   // 可选参数
   function PrintName(FirstName:string,LastName?:string)
   
   // 默认参数
   function PrintName(FirstName:string,LastName='Wiber')
   ```

   

3. 剩余参数

   在想同事操作多个参数，或者不知道参数的具体个数是可以通过**剩余参数** ，在JavaScript中可以通过arguments来实现。需要在该参数前面加**`...`** ,且可选参数是一个**数组**

   ```typescript
   function A(Firstname:string , ...Lastname:string[])
   ```


# Enmu

用于规定变量的取值范围（只能在给定的值之间选择）。

1. 数字枚举

   定义一个枚举类型，如果不初始化为字符串，则为数字枚举。数字枚举中的枚举成员，默认从0开始自增，也可以自定义初始化的值，在自定义值的基础上进行递增。在调用枚举时，通过使用**枚举名.枚举对象**

   ```typescript
   enum Direction {
       Up = 1,
       Down,
       Left,
       Right
   }
   ```

   

2. 字符串枚举

   在一个字符串枚举里，每个成员都必须用字符串字面量，或另外一个字符串枚举成员进行初始化。

   ```typescript
   enum Direction {
       Up = "UP",
       Down = "DOWN",
       Left = "LEFT",
       Right = "RIGHT",
   }
   ```

3. 异构枚举Heterogeneous enums（混合枚举）

   枚举可以混合字符串和数字成员。

   ```typescript
   enum Heterogeneous {
       No = 0,
       Yes = "YES",
   }
   ```

   



