// uni-app自动化测试教程: https://uniapp.dcloud.net.cn/worktile/auto/hbuilderx-extension/
// api：https://uniapp.dcloud.net.cn/worktile/auto/api.html

describe('/pages/dynamic/login/login', () => {
	let page;

	beforeAll(async () => {
		// 重新编译小程序并导航到登录页面
		page = await program.redirectTo('/pages/dynamic/login/login')
		await page.waitFor(3000)
	})

	it('测试登录功能', async () => {
		/**
		 * 用户名: apptest2
		 * 密码: apptest2
		 * 
		 * 有时候需要输入验证码
		 */

		// 输入用户名
		const usernameInput = await page.$('#username')
		await usernameInput.input('apptest2')

		// 输入密码
		const passwordInput = await page.$('#password')
		await passwordInput.input('apptest2')

		// 点击登录按钮
		const loginButton = await page.$('.login-button')
		await loginButton.tap()

		await page.waitFor(300)
		await page.waitFor(async () => {
			return !(await page.data('loading'))
		})

		// 需要填写验证码
		if (await page.data('needCaptcha')) {
			await page.waitFor(async () => {
				return await page.data('loginCaptcha').length === 4
			})
			await page.waitFor(300)
			await page.waitFor(async () => {
				return !(await page.data('loading'))
			})
		}

		const con = await page.data('needCaptcha')
		const loginCaptcha = await page.data('loginCaptcha')
		console.log(`con: ${con}`);
		console.log(`loginCaptcha: ${loginCaptcha}`);
		expect(con).toBeFalsy()
		expect(loginCaptcha).toEqual('')

	})
})