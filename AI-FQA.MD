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

> 无法使用gap

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

