// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/

describe('动态首页测试', () => {
    let page;

    beforeAll(async () => {
        // 重新编译小程序
        program.reLaunch('/')
        page = await program.currentPage()
        await page.waitFor(3000)
    })

    it('检查页面标题和用户信息', async () => {
        // 检查用户信息
        const greetingEl = await page.$('.user-greeting')
        const greetingText = await greetingEl.text()
        expect(greetingText).toEqual('下午好，李明')

        const subtitleEl = await page.$('.user-subtitle')
        const subtitleText = await subtitleEl.text()
        expect(subtitleText).toEqual('继续你的学习之旅')
    })
})