import $ from 'jquery';
import png from 'a.png';
import vue from 'a.vue';
// declare module 'jquery'
// npm i --save-dev @types/jquery 很多第三方模块 都已经有人写好了声明文件 （声明文件目的是让不支持ts的模块也能有语法提示）
import axios from 'axios';

// 默认先查找node_modules 某个模块下是否有types字段，如果模块本身没有types字段会查找index.d.ts
// 当前代码会自助去查找node_modules 下@/types下的文件，jquery -》 默认会去查找 index.d.ts
// 如果没有文件，可以配置include变量 包含需要的ts文件

// import export es6语法 / export = 和 import语法 node中使用
// 默认全部使用import 和 export即可
// 对于自定义文件 需要自己配置 path属性 "baseUrl": "./"
import r = require('./a');
// import r from './a'

vue.Component;


declare let age: number;
declare class Person {};
declare function fn():void;
declare interface Ixx {};

declare namespace aa {
  namespace extend{
    function eat():void
  }
}

aa.extend.eat
export {};
