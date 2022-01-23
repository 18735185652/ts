// 有个可以代替new  方便传递参数

// 类只能描述实例，但是我们现在要描述类的本身
// typeof Cat 可以取出这个类的类型（在ts中的typeof 只能用去取现已有类型的类型）
class Cat {
  constructor(public name: string, public age: number) {}
  eat() {}
}
class Dog {
  constructor(public name: string, public age: number) {}
}
console.log('Cat: ', Cat);

// function createInstace(clazz: typeof Cat, name: string, age: number) {
//   return new Cat(name,age)
// }

// type MyType = typeof Cat;
// type MyType = new (name:string, age:number) => Cat; 表示是一个构造函数，我们可以限制返回的实例

type MyType<T> = new (name: string, age: number) => T;

interface IMyType<T> {
  new (name: string, age: number): T;
}

function createInstace<T, K>(
  clazz: IMyType<T>,
  name: string,
  age: number,
  xxx?: K,
) {
  return new clazz(name, age);
}

const r = createInstace(Dog, 'tom', 13); // 如果不传递值 默认会根据缩在的位置来传递类型
// 如果无法自动推断类型 而且没有传递 那么默认就是unkown类型

// 我希望产生一个数组，给数组长度和内容 => 数组的结果

function createArray<T>(times: number, item: T): T[] {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
}
let arr5 = createArray<string | number>(3, 'a');

// 泛型可以传入多个类型 两个类型  元组的交换
function swap<A, B>(tuple: [A, B]): [B, A] {
  return [tuple[1], tuple[0]];
}
let result = swap(['a', 1]);

type NTuple = typeof result; // 取对应值的类型 typeof Cat

// 实现一个forEach方法 能进行数组的循环

type TFn<T> = (item: T, index: number) => void;
//  type TFn = <T>(item: T, index: number) => void;

interface IFn<T> {
  (item: T, index: number): void;
}
// 在写类型时如果泛型定义在函数的前面 表示是执行的时候确定类型
// 如果放在接口或者type的后面 表示使用这个类型的时候就定义好了具体的类型
interface IFn1 {
  <T>(item: T, index: number): void;
}

function forEach<T>(arr: T[], fn: TFn<T>) {
  for (let i = 0; i < arr.length; i++) {
    fn(arr[i], i);
  }
}

forEach([1, 2, 3, 4, 5], function (item) {
  console.log('item: ', item);
});


interface IFn1 { // 泛型定义在外面 表示使用类型的时候确定类型
  <T>(times: number, item: T): T[]; // 写在里面 表示在执行的时候确定类型
}
const createArray1:IFn1 = <T>(times: number, item: T) => {
  let result = [];
  for (let i = 0; i < times; i++) {
    result.push(item);
  }
  return result;
};

let fn1 = createArray1(3, 'a');
console.log('fn1: ', fn1);



// 泛型约束 类型的兼容性  高级类型(带条件的) 内置类型 自定义类型

export {};
