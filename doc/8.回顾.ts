// ts中基本类型 string | number | boolean | 数组 | 元祖 | null | undefined | never完整性保护w) | symbol
//  | bigInt | void | enum(普通枚举转化出来的就是一个对象，常量枚举（不会生成具体类型）默认值是从小到大的，'混合'类型)
// 复杂类型 非原始数据类型 function / 数组 {}

// any 放弃类型检测 尽可能少用 有的情况还是必须要使用 没有类型提示

// 自己来创造类型 type关键字  interface
// type 主要是给类型起“别名”  类型涉及到组合 联合类型  （类型的复用）
// interface 不能使用联合类型 ，可以继承和实现

// 类类型 将一个类用来描述类型 =》 描述实例的
let num: String;

// 类型断言  !：非空断言（去掉空的情况 null/undefined）
// js语法 ? 链判断运算符 如果为空则返回，如果有值则可以继续取值
// ?? 来排除 null和undefined的情况 只要不是null和undefined 都走前面的条件  0??123 => 0

// 函数 进行类型的标识 （表达式声明，函数声明 function）
// 函数的类型 主要关心参数和返回值 (可选参数 默认值 剩余参数) this的声明 函数的重载(参数不同 返回值不同)

function a(this: string) {
  // this.
}

// 函数不能只使用arguments 还需要限制 函数的额参数

function sum(...args: number[]) {
  Array.from(arguments).reduce((a, b) => a);
}
sum(1, 2, 3, 4, 5);

// 类 正常使用和es6一致 没有大的区别(修饰符 public protected private readonly) ts中类的属性 必须要先声明才能使用
// readonly 只能在constrcutor 中初始化时候修改 其他地方不能修改
// ts支持装饰器  实验型语法 后期可能会发生变化 可以修饰类，类的属性，类的方法（语法糖）

//接口 用来描述（数据的格式，形状）类型的 可以描述对象 还可以用来描述函数

interface IFn {
  // 混合接口 （既能描述函数 又能描述属性）
  (): void; // 描述自己是一个函数
  a: () => void; // 描述属性的 所以写void是不进行检测函数返回值
}

// void表示不关心返回什么
// type IFn = {
//   a: () => void;
//   (): void;
// };

const fn: IFn = () => {
  return 'aaa';
};
fn.a = () => {};

// 接口里面也可以使用一些修饰符 ? 可有可无 readonly 表示接口的属性是仅读的

// 如果接口中数据比预定的多 如何解决？
// 1. 断言成已经存在的接口
// 2. 可以利用兼容性来解决，多的属性可以赋予给少的
// 3. 接口可以扩展新的接口来使用
// 4. 同名的接口可以自行合并
// 5. [prop:string]:any 来扩展自定义属性解决

// TS是具备兼容性的，当我们做赋值操作的时候，ts会检测这个值是否能兼容当前的类型（如果是初始化则要求必须满足这个类型）

interface IColor {
  size: number;
}

let color1 = {
  size: 123,
  name: 'zs',
};
// 直接赋值属于强校验，变量名赋值会检测类型兼容
let color: IColor = color1;

// 接口可以被其他人来实现 可以是类来实现接口

interface Speakble {
  // 也可以规定类中的属性
  speak: () => void;
}

interface SpeakEnglish {
  speakEnglish: () => void;
}
class Speak implements Speakble, SpeakEnglish {
  speak() {}
  speakEnglish() {}
}

// 抽象类

abstract class Animal {
  // 子类继承后需要去实现自己的名字
  abstract name: string; // 强调自己不能实现 子类来实现 抽象类不能被new
  abstract speak(): void; // 子类需要实现加abstract的属性和方法

  // 抽象类中可以定义非抽象的方法
  eat() {
    console.log('eat');
  }
}

class Cat extends Animal {
  public name: string = 'TOM';
  public speak() {}
}

// interface 任意接口 string 可以兼容所有的类型

interface IArgs {
  [x: string]: any;
}
let args: IArgs = {
  a: 1,
  1: 'x',
  [Symbol()]: '1',
};

interface IArr {
  [x: number]: any;
}
let arr: IArr = [1, 2, 3, 4, 5]; // 限制key只能是number类型

// 泛型的学习，泛型的特点 就是解决在定义的时候不能明确类型 只能在使用的时候明确类型
let arr1: Array<number> = [1, 2, 3];

interface IArr2 <T>{
  [key:number]: T // 数组的key只能是number类型 ，后面的表示是key的对应值
}
// 使用泛型的时候 传递的参数是实惨，定义的时候使用的泛型是形参
let arr2:IArr2<number> = [4,5,6]


export {};
