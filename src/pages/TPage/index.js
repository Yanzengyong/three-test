
import React from 'react'
import { useDispatch, useMappedState } from 'redux-react-hook'

function APage () {
	const { count } = useMappedState((state) => ({
		count: state.test.count
	}))
	const dispatch = useDispatch()
	const add = () => {
		dispatch({
			type: 'TEST_ADD_COUNT',
			num: 3
		})
		console.log(count)
	}
	const sub = () => {
		dispatch({
			type: 'TEST_SUB_COUNT',
			num: 3
		})
	}
	return (
		<div>
      count: ======= {count}
			<button onClick={add}> + </button>
			<button onClick={sub}> - </button>
		</div>
	)
}

export default APage
