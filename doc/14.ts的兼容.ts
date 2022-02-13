// 都是从安全性考虑 ts中的安全性 兼容性是在把一个变量赋值给另一个变量才产生的

// 1. 基本类型的兼容性

let v1!: string | number;
let v2: string | number | boolean = 1;

v2 = v1; // 少的类型可以赋予给多的 js中的typeof 返回的是字符串类型

// 2. 接口的兼容性

interface A1 {
  name: string;
  age: number;
}

interface A2 {
  name: string;
  age: number;
  address: string;
}

let a1!: A1;
let a2!: A2;
a1 = a2;

// 3. 函数的兼容性 参数，返回值

// 参数少了可以，多了不行 返回值多了可以，少了不行
let sum1 = (a: string, b: string) => ({ name: 'zs', age: 18 });
let sum2 = (a: string) => ({ name: 'aa', age: 12, address: 'beijing' });

sum1 = sum2; // 定义了a,b 只用了一个 也是可以的

// 类的类型 兼容他的检测是符合鸭子检测的 （实例 只要实例一样 那就是一个东西）
// 特殊的情况 就是类中如果带了 private protected 就不是一个东西了（不兼容）
class Person {
  public name = 'zs';
}
class Animal {
  public name = 'lisi';
}
let a!: Person;
let b!: Animal;

a = b;
b = a;

// 枚举永远不兼容
enum E1 {}
enum E2 {}

let e1!: E1;
let e2!: E2;

// e1 = e2

// 针对函数的抽象概念 参数是逆变的和 返回值是协变的 参数的父子关系

class Grandparent {
  house!: string;
}
class Parent extends Grandparent {
  money!: string;
}

class Son extends Parent {
  play!: string;
}

function getFn(cb: (val: Parent) => Parent) {}

getFn((val: Grandparent) => new Son());



function getFn1(cb: (val: number | boolean) => string | boolean) {
  cb(1)
}
// 这个val是形参
getFn1((val:number | boolean | string)=> '');

export {};
