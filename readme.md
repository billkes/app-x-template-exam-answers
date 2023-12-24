# appx-test (考试答题模板)

## 项目简介

该模板适用于大部分**答题**模板

> 三个步骤完成代码量

- 在线考试
- 作业
- 刷题

## 教程

> 跳转行快捷键 `Ctrl + G`

1. 初始化数据 `66-69行` 和 `95-111行`

    ``` uts
    ...

    // 66行
    import {
        DataType,
        dataList,
    } from '@/pages/oldTest/index.uts'

    ...

    // 95行
    mounted() {
        dataList.forEach((item : DataType) : void => {
            this.data.push(item)
        })
        // this.countdownTime = 后端计算得到的倒计时
        this.countdownTime = 600 * 1000
        this.interval = setInterval(() => {
            if (this.countdownTime < 0) {
                // 倒计时结束 直接提交
                this.submit()
                clearInterval(this.interval!)
            }
            // 时间格式转换
            this.countdown = this.getRemainingTime(this.countdownTime)
            this.countdownTime -= 200
        }, 200)
    },

    ...
    ```

2. 切换题目时更新数据 `126-132行`

    ``` uts
    ...

    第126行
    /**
    * @description 每切换题目时请求接口更新题的数据
    * @param current
    */
    update(current : number) {
        console.log('题目下标', current);
        console.log('题目答案', this.data[current].select);
        // 请求接口


    },
    ...

    ```

3. 提交答题 `138-147行`

    ``` uts
    ...

    第138行
   /**
    * @description 提交答题
    */
    submit() {
        console.log('全部数据', this.data);
        console.log('答案数据', this.data.map((o) : string => o.select));
        // 请求接口



        // 提交后退出页面或者do something
        // 后端看需求 定时器自动提交
    },
    ...

    ```

4. 编程结束，直接上手测试，调试

## 模板预览 新版本v4.0

![3]([./markdown/3.png](https://mp-207735a8-b8db-45c0-baac-0e7004e3d577.cdn.bspapp.com/pic/3.png))
![4]([./markdown/4.png](https://mp-207735a8-b8db-45c0-baac-0e7004e3d577.cdn.bspapp.com/pic/4.png))
![5]([./markdown/5.png](https://mp-207735a8-b8db-45c0-baac-0e7004e3d577.cdn.bspapp.com/pic/5.png))
![1]([./markdown/1.gif](https://mp-207735a8-b8db-45c0-baac-0e7004e3d577.cdn.bspapp.com/pic/1.gif))
