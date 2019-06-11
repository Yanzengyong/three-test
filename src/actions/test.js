import request from '../utils/_http'
import api from '../api'

export default {
	// 测试
	async TestRQ (params) {
		let result = await request.get(api.test.testRQ, params)
		if (result.code === 10000) {
			return result
		}
		alert('request fail')
	}
}
