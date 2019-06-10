// 初始化state数据
const initialState = {
	count: 0
}
export default (state = initialState, action) => {
	switch (action.type) {
	case 'TEST_ADD_COUNT':
		return { ...state, count: state.count += action.num }
	case 'TEST_SUB_COUNT':
		return { ...state, count: state.count -= action.num }
	default:
		return state
	}
}

