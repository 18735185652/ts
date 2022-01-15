## 安装TS
- npm install typescript -g
- tsc --init # 生成tsconfig.json

- tsc # 可以将ts文件编译成js文件
- tsc --watch # 监控ts文件变化生成js文件

- 希望可以直接运行TS （测试）
- code runner + npm i ts-node -g

## 构建工具来处理ts
- webpack ，roolup
- 解析TS的方式有两种 ts插件来解析，可以通过babel来解析
- 一般情况下会采用 rollup-plugin-typescript2
- webpack ts-loader / babel-plugin-typescript

