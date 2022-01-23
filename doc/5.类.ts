// 类（函数）语法糖，构造函数的区别 （函数 不会new）
// 构造函数的特点能new 而且可以调用

// 类中的概念 实例的属性  实例共享属性 类来调用的静态属性（方法）

// 类中的this 默认不知道它自己具备什么属性, ts要做类型检测
class Pointer {
  x: number;
  y: number; // 如果只添加类型 没有赋值，ts默认不能将null 赋值给其他类型
  constructor(x: number, y?: number) {
    // 构造函数和普通函数的参数一样，可以支持可选参数，默认
    this.x = x;
    this.y = y as number; // 考虑安全性 不能将大范围类型 赋值给小范围类型（ts的兼容性）
    // 真正的开发中使用 ! 和 as语法的场景是非常多的
  }
}

let r = new Pointer(100, 200);
console.log('r: ', r.x);

// 类的修饰符 java(public,protected,private) 限制访问的范围
// public 就意味着公开 自己能访问 儿子能访问 外界能访问
// protected 自己和儿子能访问 外界不能访问
// private 只能自己访问

class Animal {
  public readonly type: string = '哺乳类'; // 仅读只能在初始化时候修改 （只能在构造函数中修改，不能在其他地方修改）
  constructor(type: string) {
    this.type = type;
  }
  static flag = '动物';
  getType() {
    return this.type;
  }
}
class Dog extends Animal {
  constructor(type: string) {
    // 如果子类写了constructor 子类必须调super
    super(type); // Animal.call(this)
    console.log(this.type);
  }
}
let animal = new Animal('xxx');
animal.getType();

let dog = new Dog('xxx');
dog.type;

class Cat extends Animal {
  // Cat.__proro__ = Animal
  constructor(type: string, private name: string) {
    super(type);
  }
  get newName() {
    return this.name;
  }
  set newName(newVal) { // 校验和属性的保护 防止非法篡改name
    this.name = newVal;
  }
}
console.log(Cat.flag);
// es6中的静态方法 属性 类的访问器都可以在ts中访问
let cat = new Cat('哺乳类', 'TOM');
console.log('cat: ', cat.getType);

export {};
