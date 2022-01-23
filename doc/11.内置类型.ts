let val = { a: 1, b: 2 };
type v = typeof val;
type x = keyof v;

// | 并集  &交集
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

// 条件类型

// 鱼需要水 鸟需要天空
interface Bird {
  name: '鸟';
}
interface Fish {
  name: '鱼';
}
interface Sky {
  color: '蓝色';
}
interface Water {
  color: '白色';
}

// ts中有一个条件分发的概念 联合类型才会发生条件分发
type MyType<T> = T extends Bird ? Sky : Water; // 条件类型就是三元表达式

type MyBird = MyType<Bird | Fish>; // water ｜ sky

// ts中自带的类型

//Exclude 类型的排除
type Exclude<T, U> = T extends U ? never : T;

type MyExclude = Exclude<string | number | boolean, boolean>;

// Extract 类型的抽离
type Extract<T, U> = T extends U ? T : never;
type MyExtract = Extract<string | number | boolean, string>;

let el = document.getElementById('app');

// 可以去除null 和 undefined类型
type NonNullable<T> = T extends null | undefined ? never : T;
type MyNon = NonNullable<typeof el>;

interface ICompany {
  name: string;
  address: string;
}
interface IPerson {
  name: string;
  age: number;
  company: ICompany;
}

// 让属性都变成可选属性
type Partial<T> = {[K in keyof T]?:T[K]};
type DeepPartial<T> = {[K in keyof T]?: T[K] extends object ? DeepPartial<T[K]>: T[K]}

type MyPartial = DeepPartial<IPerson>;

let person1:MyPartial =  {
  company: {
    name:'zs'
  }
}

// Required 必选
type Required<T> = {[K in keyof T]-?: T[K]}
type Readonly<T> = {readonly [K in keyof T]: T[K]}

type OptionalPerson = Readonly<Required<Partial<IPerson>>>


// Pick 挑选出来想要的结果

// type Pick<T extends object,K extends keyof T> = {[P in K]: T[P] }

type  MyPersion = Pick<IPerson,'name'|'age'>


// 忽略某个属性
type Omit<T,K extends keyof any> = Pick<T,Exclude<keyof T,K>>
type MyPersion2 = Omit<IPerson,'name'> // Ipersion => 所有的key 忽略掉name，在把其他的挑选出来


// Record



// 类型推断infer


function getPointer(x:string,y:string,z:string) {
    return {x,y,z}
}
// infer 在哪里就推断哪里的结果
type ReturnType<T extends (...args:any[])=>any > = T extends (...args:any[])=>infer R ? R : any
// 推断函数的额返回值
type MyReturn = ReturnType<typeof getPointer >

// 函数参数的类型
type Parameters<T extends (...args:any[])=>any > = T extends (...args:infer P)=>any ? P : any
type MyParameters = Parameters<typeof getPointer>

class Persion {
  constructor(name:string,age:number,address:string){

  }
}

// 构造函数的参数推断
type ConstructorParameters<T extends {new(...args:any[]):any} > = T extends {new(...args:infer R):any} ? R : any
type MyConstructor = ConstructorParameters<typeof Persion>

// infer 可以根据内容位置进行推断结果的类型


// unknown 我们可以用 unknown 来替换掉any ，unknown 是any的安全类型

let a: unknown = 1; // 任何类型都可以赋值给unknown 但是any不够安全，因为可以调用属性，但是unknown不能进行取值操作


// a.anv

// 使用的时候 尽量用unknown 来替换掉any类型

 type a = unknown | string // 和任何类型做联合类型都是unknown
 type b = unknown | string // unknown 和其他类型做交集获取的永远是其他类型，不支持 keyof unknown

// never 是 unknown的子类型
type xx = never extends unknown ? true: false;

export {};
