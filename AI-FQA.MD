# 常见问题

> 这是一个ai的错题本，当ai完成任务后，多少会有一些小bug，扫描该文件出现过的问题，通过再次优化解决小问题

> 解决办法：ai查询文档DOM.MD文件

## 列表

- .main::after{}

```txt
[APP-ANDROID] 不支持伪元素选择器
[APP-IOS] 不支持伪元素选择器
[APP-HARMONY] 不支持伪元素选择器
```

- border-radius: 50%;

```txt
[APP-ANDROID] 不支持的单位: '%'
[APP-IOS] 不支持的单位: '%'
[APP-HARMONY] 不支持的单位: '%'
[WEB] 不支持的单位: '%'
[MP-WEIXIN] 不支持的单位: '%'
```

- gap: 20rpx;

> 可以使用flex但无法使用gap

```txt
[APP-ANDROID] 不支持的
[APP-IOS] 不支持的
[APP-HARMONY] 不支持的
[WEB] 不支持的
[MP-WEIXIN] 不支持的
```

- background: linear-gradient(90deg, #3a397a, #6a69b3);

```txt
[APP-ANDROID] 不支持的单位: 'deg'
[APP-IOS] 不支持的单位: 'deg'
[APP-HARMONY] 不支持的单位: 'deg'
[WEB] 不支持的单位: 'deg'
[MP-WEIXIN] 不支持的单位: 'deg'
```

- scroll-view组件配置了 `scroll-x` 属性

> 为了兼容，不使用

```txt
[APP-IOS] 组件scroll-view不支持属性: 'scroll-x'
[APP-HARMONY] 组件scroll-view不支持属性: 'scroll-x'
```

- flex-direction: column;

> 实际上每个view默认就是这个属性，无需再次表达

- display: flex;

> 实际上每个view默认就是这个属性，无需再次表达

- display: block;

> 没有这个兼容

display 的属性值
|名称	|兼容性	|描述																																												|
| -		|-		|-																																													|
|flex	|yes	|该元素的行为类似块级元素并且根据弹性盒模型布局它的内容。																																|
|none	|yes	|使元素不再显示，其对布局不会有影响（文档渲染得好像这个元素并不存在）。所有的后代元素也不会再显示。为了使元素占据一个它通常占据的空间，但实际上没有渲染任何东西，应该使用 visibility 属性。	|

- view标签不能包裹文字

- vue的钩子要放在所有方法的最后

```ts
import { onMounted } from "vue"

// ref定义
// ...

// 所有方法
// ...

onMounted(() => {

})
```

- function name(){}

> 要求使用箭头函数

- 被调用方法一定要在调用的地方的前面

```ts
const getName = (): string => {
	return 'your name'
}

const sayHello = () => {
	const name = getName()
	console.log('hello, ' + name);
}
```

- script标签请使用 setup lang='uts'

- style不使用less、sass

- scroll-view 组件使用时需将滚动视图的内容用view包裹

```txt
scroll-view
	view
		内容1
		内容2
	/view
/scroll-view
```

- 正常px转换到rpx时，需要2x

> 例如一个单位是10px，转换到uvue时得到20rpx

```css
.original-style{
	width: 20px;
}
```

```css
/* uvue样式 */
.uvue-style{
	width: 40rpx;
}
```

- font-weight: 600;

> 600 不兼容

font-weight 的属性值
|名称	|兼容性	|描述						|
|-		|-		|-							|
|normal	|yes	|正常粗细。与 400 等值。		|
|bold	|yes	|加粗。与 700 等值。			|
|400	|yes	|正常粗细，与 normal 等值。	|
|700	|yes	|加粗，与 bold 等值。		|