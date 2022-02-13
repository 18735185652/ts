// 类型保护（更好的去识别类型） js本身就有类型识别功能 typeof instanceof in

function getV(val: string | number) {
  if (typeof val === 'string') {
    val.split('');
  } else {
    val.toFixed();
  }
}

class Person {}
class Animal {}

function getV1(val: Person | Animal) {
  // 描述实例的
  if (val instanceof Person) {
    val;
  } else {
    val;
  }
}

// 根据是否包含某个属性来区分 Fish 游泳 | Bird 飞

interface Fish {
  swiming: string;
}
interface Bird {
  fly: string;
}

function getV2(val: Fish | Bird) {
  if ('swiming' in val) {
    val.swiming;
  } else {
    val.fly;
  }
}

// ts里面也有自己的概念 可辨识的类型

interface ISquare {
  kind: 'square';
  width: number;
}
interface IRant {
  kind: 'rant';
  width: number;
  height: number;
}
interface ICircle {
  kind: 'circle';
  r: number;
}


function asset(obj: never) {}
// 完整性保护
function getArea(val: ISquare | IRant | ICircle) {
  switch (val.kind) {
    case 'square':
      break;
    case 'rant':
      break;
    case 'circle':
      break;
    default:
      asset(val);
  }
}

// Extract Exclude / Omit Pick
export {};
