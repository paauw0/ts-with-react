# ts-with-react



## 安装
```
npx create-react-app ts-with-react --template typescript
```



#### package.json
```html
"dependencies": {
    "@testing-library/jest-dom": "^5.11.4",
    "@testing-library/react": "^11.1.0",
    "@testing-library/user-event": "^12.1.10",
    "@types/jest": "^26.0.15",
    "@types/node": "^12.0.0",
    "@types/react": "^17.0.0",
    "@types/react-dom": "^17.0.0",
    "react": "^17.0.2",
    "react-dom": "^17.0.2",
    "react-scripts": "4.0.3",
    "typescript": "^4.1.2",
    "web-vitals": "^1.0.1"
},
```



## 函数组件
### CustomComponent.tsx
```html
import React from 'react'

interface ICustomProps {
    message: string
}

const CustomComponent: React.FC<ICustomProps> = (props: ICustomProps) => {
    return <div>{props.message}</div>
}

CustomComponent.defaultProps = {
    message: "Custom"
}

CustomComponent.displayName = 'MyCustom'

export default CustomComponent
```



### 组件类型
```
无状态组件类型：React.StatelessComponent
类型别名：React.SFC
有状态组件类型：React.FunctionComponent
类型别名：React.FC
```




#### node_modules/react/index.d.ts 代码片段
```html
//
// Class Interfaces
// ----------------------------------------------------------------------

/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 *
 * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 */
type SFC<P = {}> = FunctionComponent<P>;

/**
 * @deprecated as of recent React versions, function components can no
 * longer be considered 'stateless'. Please use `FunctionComponent` instead.
 *
 * @see [React Hooks](https://reactjs.org/docs/hooks-intro.html)
 */
type StatelessComponent<P = {}> = FunctionComponent<P>;

type FC<P = {}> = FunctionComponent<P>;

interface FunctionComponent<P = {}> {
    (props: PropsWithChildren<P>, context?: any): ReactElement<any, any> | null;
    propTypes?: WeakValidationMap<P>;
    contextTypes?: ValidationMap<any>;
    defaultProps?: Partial<P>;
    displayName?: string;
}
```



### 组件静态属性
| 属性 | 个人说明 | 官方原文 | 参考地址 |
| - | - | - | - | - |
| defaultProps | 用于给 props 属性赋初始值, 当属性值为 undefined 时生效，null 不生效。 | defaultProps 可以为 Class 组件添加默认 props。这一般用于 props 未赋值，但又不能为 null 的情况。 | https://zh-hans.reactjs.org/docs/react-component.html#defaultprops |
| displayName | 定义组件调试别名 | displayName 字符串多用于调试消息。通常，你不需要设置它，因为它可以根据函数组件或 class 组件的名称推断出来。 | https://zh-hans.reactjs.org/docs/react-component.html#defaultprops |
| contextType | 只能在 class 组件上使用 contextType | 挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 Context 对象。此属性能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何生命周期中访问到它，包括 render 函数中。 | https://zh-hans.reactjs.org/docs/context.html#classcontexttype |
| propTypes | 类型检查 | 你可以使用 Flow 或 TypeScript 等 JavaScript 扩展来对整个应用程序做类型检查。但即使你不使用这些扩展，React 也内置了一些类型检查的功能。要在组件的 props 上进行类型检查，你只需配置特定的 propTypes 属性 | https://zh-hans.reactjs.org/docs/typechecking-with-proptypes.html |