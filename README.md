### 
隔绝服务端和客户端组件
### 
写Class和Card之间的逻辑关系
第一次点击时从服务端获取数据,其他初非Crud外直接读取缓存数据
###
Clxs 动态的使用css
```javascript 
  import { ClassValue, clsx } from 'clsx'
  export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
  }

  <h1 Classname={cn('m-2':true;'bg-yellow':false )}  > </h1>
```
Clxs链接 [https://www.npmjs.com/package/clsx]
### 
遭遇部署更新大难题
