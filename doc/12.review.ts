// 内置类型 Partial extract exclude / readonly Pick Omit
// 推断 returnType
// keyof typeof in。。。

// 求2个类型的差集

let person1 = {
  name: 'zs',
  age: 12,
  address: '杭州',
};
let person2 = {
  name: 'gp',
};

type Person1 = typeof person1;
type Person2 = typeof person2;
// 求2个类型的差集
type Diff<T extends object, K extends object> = Omit<T, keyof K>;
type MyDiff = Diff<Person1, Person2>;

// 求交集, 2个类型中共有的属性
type Inter<T extends object, K extends object> = Pick<
  T,
  Extract<keyof T, keyof K>
>;
type MyInter = Inter<Person1, Person2>;

// 求并集
let person3 = {
  name: 'zs',
  age: 12,
  address: '杭州',
};
let person4 = {
  name: 'gp',
  age: '18',
};
type Person3 = typeof person3;
type Person4 = typeof person4;

type Merge<T extends object, K extends object> = Omit<T, keyof K> & K;
type Compute<T> = { [K in keyof T]: T[K] };


type NewPerson = Compute<Merge<Person3, Person4>>;


let person5 = {
  age: 12,
  address: '杭州',
};
let person6 = {
  name: 'gp',
  age: '18',
};
type Person5 = typeof person5;
type Person6 = typeof person6;

// 先求2个类型的交集 交叉的部分 和另一个对象忽略交叉的部分 =》 在进行合并
type Overwrite<T extends object, K extends object> = Inter<K,T> & Omit<T,keyof K>
type MyOverwrite =  Compute<Overwrite<Person5,Person6>>


// Extract Exclude / Omit Pick
export {};
