## chili-font-awesome

png 转svg , svg 转 font 

### 使用规则说明

icons 存放 png 图片，图片大小最好统一为 32*32 。

png图片命名不能包含'/'字符

一次转换的图片数量不超过16张

### 目录说明

icons 存放 png 图片，图片大小最好统一为 32*32 。


### 工程运行

* 安装依赖 : 从服务器下载所需的前端依赖包

   $ npm  install

* 清理工程 : 删除编译目录

   $ npm run clean
   
* png转换为font : 1.png转换为svg 2.svg转换为font

   $ npm run build:png
   
   $ npm run build

### 生成字体库使用方式

将运行生成的build文件夹下的内容复制到你的项目里一个文件夹下，全局引入该文件夹下的.css文件，

使用<i>标签，类名前缀为: "chili-ic chili-ic-" 例如: <i class="chili-ic chili-ic-ww0"></i>
