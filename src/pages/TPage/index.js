
import React, { useEffect, useContext } from 'react'
import { StoreContext, useDispatch } from 'redux-react-hook'

function APage () {
	const store = useContext(StoreContext)
	const dispatch = useDispatch()
	const { test } = store.getState()
	const obj = { test: { count: 1, num: 10 } }
	useEffect(() => {
		// console.log(test.count)
		console.log({ ...obj.test, count: 22, num: 99 })
	}, [])
	const add = () => {
		console.log(dispatch)
		dispatch({
			type: 'TEST_ADD_COUNT',
			num: 3
		})
	}
	const sub = () => {

	}
	return (
		<div>
      count: ======= {test.count}
			<button onClick={add}> + </button>
			<button onClick={sub}> - </button>
		</div>
	)
}

export default APage
