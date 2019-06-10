// 注册store
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from '../reducers'

// 推荐的写法
function configureStore (initialState) {
	let store = createStore(reducer, initialState,
		applyMiddleware(thunk),
		// 触发 redux-devtools
		window.devToolsExtension ? window.devToolsExtension() : undefined
	)
	return store
}
const appStore = configureStore()
export default appStore
