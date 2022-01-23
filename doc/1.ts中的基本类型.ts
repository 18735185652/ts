let str: string = 'hello';
console.log('str: ', str);

// 基础类型

// 最基本的类型有 数字 字符串 布尔

// 所有的类型都在冒号的后面 ts的核心一切都以安全为准
// 什么时候可以不用类型 推倒

// number 和 Number的区别 js特性

let num1: number = 1;
let num2: Number = 1; // 用来描述类的实例的 类也可以当作类型
let num3: number = Number('1');
let num4: Number = new Number('1');
