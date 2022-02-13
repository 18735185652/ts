declare module '*.png';
declare let a: string;

declare module '*.vue' {
  interface Vue {
    install: () => void;
    Component: string;
  }
  const vue: Vue;

  export = vue; // 这个语法是ts自带的 为了兼容commonjs语法
}
