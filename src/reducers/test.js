// 初始化state数据
const initialState = {
	count: 0
}
export default (state = { count: 0 }, action) => {
	console.log(action)
	switch (action.type) {
	case 'TEST_ADD_COUNT':
		console.log(Object.assign({}, state, { count: state.count += action.num }))
		return Object.assign({}, state, { count: action.num })
	case 'TEST_SUB_COUNT':
		return Object.assign({}, state, { count: state.count -= action.num })
	default:
		return state
	}
}

