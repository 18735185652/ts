// ts中有一个比较重要的概念 命名空间

// 内部模块 (自执行函数 ) =》 外部模块 import / export
// import { Zoo1, Zoo2 } from './namespace';
// console.log('Zoo2: ', Zoo2);
// console.log('Zoo1: ', Zoo1);

// 用来解决文件中命名冲突的问题
namespace Zoo1 {
  export let m1 ='猴子'
}

namespace Zoo1 {
  export let m2 ='猴子'
}

// 命名合并的问题 ，能合并的有 （接口同名可以合并） （函数和命名空间合并） (命名空间和命名空间合并) （命名空间可以和类来合并）


function Fn(){}

namespace Fn { // 给函数扩展属性
  export let a = 1;
  export let b = 1;
}
Fn.a

// 接口和类合并
interface Person {
  say():void
}

class Person {

}

let person = new Person();
person.say

// 给window扩充属性
declare global { // 接口的合并，给window上添加类型  如果是全局的变量扩展的时候 需要使用declare global 否则无法访问
  interface Window {
    appData: string
  }
  interface String {
    xxx():void
  }
}

window.appData

String.prototype.xxx = function(){}


// declare 声明的意思
// 如果jquery是在cdn中引入的，那么当前模块中是不会引入jquery的
// 用来声明一个类型的
declare function $(selector: string): { // .d.ts ts中的声明文件，声明（不是正常引入的类型）
  css(val:string):void
}

declare namespace $ { // declare 中的属性默认就是导出 不需要增加导出逻辑
  namespace fn{
     function extend(): void
  }
}

$('root').css('xxx')

$.fn.extend()

// ts 可以帮助开发者提供友好的提示
export {};
