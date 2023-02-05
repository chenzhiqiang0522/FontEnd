# CSS

## 选择器

CSS 选择器用于“查找”（或选取）要设置样式的 HTML 元素。可以将 CSS 选择器分为五类

+ 简单选择器（根据名称、id、类来选取元素）

+ 组合器选择器（根据它们之间的特定关系来选取元素）
+ 伪类选择器（根据特定状态选取元素）
+ 伪元素选择器（选取元素的一部分并设置其样式
+ 属性选择器（根据属性或属性值来选取元素）

### 元素选择器

元素选择器根据元素名称来选择 HTML 元素。

```css
p {
  text-align: center;
  color: red;
}
```



### id选择器

id 选择器使用 HTML 元素的 id 属性来选择特定元素。元素的 id 在页面中是**唯一**的，因此 id 选择器用于选择一个唯一的元素！要选择具有特定 id 的元素，请写一个**井号（＃）**，后跟该元素的 id。__id 名称不能以数字开头__。

```css
#para1 {
  text-align: center;
  color: red;
}
```

### 类选择器

类选择器选择有特定 class 属性的 HTML 元素。如需选择拥有特定 class 的元素，请写一个**句点（.）**字符，后面跟类名。

```css
.center {
  text-align: center;
  color: red;
}
```





## Float 浮动

通过浮动可以实现元素向**父元素** 的左侧或者右侧浮动

1. 可选值：
   1. none：不浮动
   2. left：元素向左浮动
   3. right：元素向右浮动
   4. **注意**：设置浮动后，块级元素便没有margin，不会占用整行的空间，且会从文档流脱离，不再占用文档流的位置，文档流下面的内容会占用浮动元素原来的位置。
2. 浮动的特点
   1. 从文档流脱离，不再占用文档流的位置，文档流下面的内容会占用浮动元素原来的位置。
   2. 浮动元素不会超过其上一个兄弟元素的顶部高度，最多就是和它一样高。
   3. 浮动元素不会超出父元素。
   4. 浮动元素不会与其他浮动元素重叠。

## Flex布局

1. 才用Flex布局的元素成为Flex容器，简称“容器”。它的所有子元素自动成为容器成员，称为“项目”

2. 布局原理：

   通过给父元素添加flex属性，来控制子盒子的位置和排列方式

3. 常见的父项属性：

   1. flex-direction：设置主轴的方向

      + 在flex布局中，分**主轴**和**侧轴**两个方向，同样的叫法有：行和列，x轴和y轴，

      + **默认**的主轴方向为**x轴方向**，水平向右的方向

      + **默认**的侧轴方向是**y轴方向**，水平向下的方向
      + 可选值：
        + row：默认从左开始到右排列
        + row-reverse：从右开始到左排列
        + column：从顶部开始到下
        + column-reverse：从底部开始到上

   2. justify-content：设置主轴上的子元素排列方式

      + 可选值：
        + flex-start：默认值	从头部开始，如果主轴是x轴，则从左到右
        + flex-end：从尾部开始排列，子元素顺序不变
        + center：在主轴居中对齐（如果主轴是X轴则水平居中）
        + space-around：平分剩余空间
        + **space-between：先两边贴边，在平分剩余空间**

   3. flex-wrap：设置子元素是否换行

      + flex默认不换行，如果宽度不足以放下所有的子元素，则会修改子元素的大小，从而让所有子元素能放在同一行
      + 可选值
        + nowrap：默认值	不换行
        + wrap：换行

   4. align-content：设置**侧轴**上的子元素排列方式（多行的情况下，子元素出现了**换行**的情况下，在单行情况下没有效果）

      + flex-start：默认值	从侧轴顶部开始，从上到下
      + flex-end：从下到上
      + center：整体居中、
      + stretch：设置子元素高度平分父元素高度
      + space-around：子项在侧轴平分剩余空间
      + space-between：子元素在侧轴先分布在两头，再平分剩余空间

   5. align-items：设置侧轴上的子元素排列方式（子元素为单行时使用）

      + flex-start：默认值	从顶部开始，从上到下
      + flex-end：从下到上
      + center：整体居中、
      + stretch：拉伸（此时，子元素不要设置height属性）

   6. flex-flow：符合属性，相当于同时设置了flex-direction和flex-wrap

      + 使用示例：flex-flow：row wrap

4. flex布局子项常见属性

   1. flex定义子项分配剩余空间，用flex来表示占多少份数
      + flex:<number>
   2. align-self：控制子项自己在侧轴上的排列方式
      + 允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。
   3. order属性定义项目的排列顺序、
      + 数字越小，排列越靠前，默认值为0（注意：与z-index的区别）



## 响应式布局

### 视口

1. 在PC端来说，视口是指浏览器的可视区域，包含了浏览器的滚动条，；对于移动端来说，视口就是Viewport中的Layout Viewport（布局视口）；

2. 视口单位

   |      | 单位 | 全称           | 含义                                                         |
   | ---- | ---- | -------------- | ------------------------------------------------------------ |
   | 1    | vm   | ViewportWidth  | 相对于视口的宽度，视口均被分为100单位的vm，1vm等于视口宽度的1% |
   | 2    | vh   | ViewportHeight | 相对于视口的高度，视口均被分为100单位的vh,1vh等于视口高度的1% |
   | 3    | vmin | ViewportMin    | 选取vm和vh中最小的那个                                       |
   | 4    | vmax | ViewportMax    | 选取vm和vh中最大的那个                                       |

   当浏览器大小发生变化的时候，视口宽度和视口高度会发生变化。

3. 与px之间的转换

   vw这个单位永远相当于视口宽度（viewport width）

   ​	100vw=一个视口宽度

   ​	1vw = 1%视口宽度

   375px(设计图像素) = 100vw

   1px=100/375 = 0.2666666666666667vw

   创建一个48px 35px大小的元素

   35px =100/375*35= 9.333333333333333vm

   48px = 100/375*48=12.8vm	

4. vm和百分比的区别

   1. 百分比是基于父元素的，而HTML文件的顶级父元素是body，在没有设置body的高度的时候，是无法获取到可视区域的高度的，而vm，vh可以直接获取高度。
   2. 在有滚动条的时候，百分比和VW都是相同宽高时，百分比是不包含滚动条的，而VW是包含滚动条的。
   3. 百分比是基于父元素的宽/高比，vw，vh是视口的宽/高比

### em和rem

1. em 

   + em是font size of the element的简称，是指相对于父元素的字体大小的单位

   + 父元素的字体大小是多少，那么1em就是多少，比如所在PC端中，默认100%的font-size为16px，那么1em=16px

   + em单位主要问题是他们与父元素字体大小有关，如果多层嵌套，字体可能会越来越小或者越来越大

   + ```html
     <style>
              html{
                  font-size:100%
              }
              ul{
                  font-size:0.75em
              }
          </style>
          
          <html>		1em=16px		
              <ul>	1em=16*0.75px
                  你好
                  <ul> 1em=16*0.75*0.75px
                      你好
                  </ul>
              </ul>
          </html>
     ```

2. rem

   + rem是font size of the root element的简称，是指相对于根元素的字体大小的单位根元素的字体大小是多少，那么1em就是多少，比如所在PC端中，默认100%的font-size为16px，那么1rem=16px。
   + 如果使用rem为单位，就不会出现em字体越来越大或越来越小的情况

3. 与px之间的转换

   16px=1rem

   18px=1.125rem

   20px=1.25rem

   24px=1.5rem

   30px=1.875rem

   32px=2rem

4. rem布局

   + rem375js代码如下

   + ```javascript
      /**
         * ================================================
         *   设置根元素font-size
         * 当设备宽度为375(iPhone6)时，根元素font-size=16px; 
         × ================================================
         */
     (function (doc, win) {
       var docEl = win.document.documentElement;
       var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';
       
       var refreshRem = function () {
         var clientWidth = win.innerWidth
                           || doc.documentElement.clientWidth
                           || doc.body.clientWidth;
     
         console.log(clientWidth)
         if (!clientWidth) return;
         var fz;
         var width = clientWidth;
         fz = 16 * width / 375;
         docEl.style.fontSize = fz + 'px';//这样每一份也是16px,即1rem=16px
       };
     
       if (!doc.addEventListener) return;
       win.addEventListener(resizeEvt, refreshRem, false);
       doc.addEventListener('DOMContentLoaded', refreshRem, false);
       refreshRem();
     
     })(document, window);
     ```

   + 加载js文件

   + 所有数值除以100

   + 使用rem单位

### 媒体查询

|      |        | 媒体类型(MediaType)描述设备的一般类型 |
| ---- | ------ | ------------------------------------- |
| 1    | all    | 适用于所有设备                        |
| 2    | print  | 适用于在打印状态下                    |
| 3    | screen | 主要用于屏幕                          |
| 4    | speech | 主要用于语音合成器                    |

1. 媒体类型见上表

2. 使用方法

   ```css
   @media screen{
       样式代码
   }
   ```

3. 只有在满足条件是才会显示`@media`中的代码

### 媒体特性

|      |              | 媒体特性(MediaFeature)描述了输出设备或者浏览环境的具体特征   |
| ---- | ------------ | ------------------------------------------------------------ |
| 1    | width        | Viewport的宽度，有max-width和min-width                       |
| 2    | height       | Viewport的高度，有max-height和min-height                     |
| 3    | aspect-ratio | Viewport的宽高比                                             |
| 4    | orientation  | Viewport的旋转方向，有portrait（竖屏）与landscape（横屏）两种 |

1. 代码格式：

   ```css
   @media (媒体特性条件){
       样式代码
   }
   ```

### 逻辑操作符

1. and用于将多个媒体查询规则组合成为一条媒体查询
2. not用于否定媒体查询，如果不满足这个条件则执行内容，否则将不执行
3. only用于旧版浏览器识别媒体类型使用
4. 逗号，用于将多个媒体查询合并为一个规则

### 使用link来添加媒体特性和媒体查询

<link rel="stylesheet" href="xxxxxxx" media="(orientation:portrait)">



### 响应断点（阈值）的设置

1. 代码位置：添加到样式表底部，对css进行优先级覆盖,如果满足了媒体查询中的条件，则会使用响应式样式对齐进行覆盖。
2. 常用阈值（具体的阈值要根据设计版来决定）
   1. Extra small<576px
   2. Small>=576px    -sm
   3. Medium>=768px   -md
   4. Large>=992px    -lg
   5. X-Large>=1200px    -xl
   6. XX-Large>=1400px    -xxl

























