# 开发环境和打包的一些命令

In the project directory, you can run:


### `启动由自己webpack配置的本地开发服务器（由于入口文件没有输出，需要修改tsconfig.json配置，noEmit改为false即可）`

```bash
  npm run dev
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `打包组件库`

```bash
  npm run build
```


### `启动组件文档后台项目`

```bash
  npm run storybook
```


### 启动create-react-app的开发服务器

```bash
  npm run start
```
Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### `打包后台项目`

```bash
  npm run build:react
```

###  `测试build后的组件是否能正常使用，当前项目中添家项目依赖()`

```bash
  npm link

  npm link nxs-ui
```





## 组件的使用

###  `组件中引入即可使用`
```javascript
  import { Button } from 'higgs';
  import { Text } from 'higgs';
  import * as QC from 'higgs';
  ...
  <Button>测试</Button>
  <QC.Button>QC</QC.Button>
  <Text text="asdads"></Text>
```
