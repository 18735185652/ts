// 泛型无法做运算 如果2个字符串相加 那么返回的就是字符串 2个数字相加放回的就是数字

function sum<T>(a: T, b: T): T {
  return a + b;
}

sum(1, 2);
// sum('a', 'b');

// 如果写好一个具体的类型，表示显示死了 传入的类型，看一下当前传入的内容是否带有某个属性

function finish<T extends { kind: '草鱼' }>(val: T) {}
finish({ kind: '草鱼', a: 1 });

// 根据泛型 产生多个类型 默认泛型
// 产生一个对象 name属性可以随时更改类型

type MType<T = string> = { name: T };
type MNname1 = MType;
type MName2 = MType<number>;

// extends 约束
function getVal<T extends object, K extends keyof T>(val: T, key: K) {}

getVal({ a: 1, b: 2 }, 'a');

type r1 = keyof string; // 联合类型 并集
type r2 = keyof any; // string | number | symbol 都能作为key

let val = { a: 1, b: 2 };
type v = typeof val;
type x = keyof v;

interface A {
  handsome: string;
  type: number;
}
interface B {
  high: string;
  type: string;
}

let person: A & B = {
  handsome: '帅',
  high: '高',
  type: 'abc' as never,
};

//

export {};
