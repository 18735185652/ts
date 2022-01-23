// 类的装饰器 语法糖 用来装饰类的
// 类的装饰器 可以装饰类本身(参数就是类) 类的属性 类的方法 静态属性 类中函数的参数都可以使用

function addSay(target: Function) {
  target.prototype.say = function () {
    console.log('say: ');
  };
}
function toUpper(isUpper: boolean) {
  // target是原型 key是属于实例的
  return function (target: any, key: string) {
    let val = '';
    Object.defineProperty(target, key, {
      // 原型添加属性
      get() {
        console.log(2);
        return isUpper ? val.toUpperCase() : val;
      },
      set(newVal) {
        val = newVal;
      },
    });
  };
}

function Enum(isEnum: boolean) {
  return function (target: any, key: any, descriptor: PropertyDescriptor) {
    descriptor.enumerable = isEnum;
  };
}

@addSay // addSay(Animal)
class Animal {
  public say!: Function;
  @toUpper(true)
  public name: string = 'jiangwen';
  __proto__: any; // 为了代码能得到提示而已

  get myName() {
    // 如果想在原型上添加一个属性，可以用属性访问器
    return 'zs';
  }
  @Enum(false)
  eat() {}
}

let animal = new Animal();
console.log(animal.__proto__.name);
console.log('animal: ', animal);

// console.log('animal: ', animal.name);

// 因为这个是一个试验性语法 所以不建议使用 后续会更改 stage -> 3 react mobx nest.js

// ts中 对this的推断比较弱 所以尽量不要使用类

export {};
