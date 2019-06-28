/**
 * 定义应用路
 */
import React from 'react'
import { Route, Redirect, Switch, HashRouter as Router } from 'react-router-dom'
import {
	Main,
	Test,
	Prod
} from './routes'
// const { RouterHandler } = Router

const routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" render={() => (
				<Redirect to="/main"/>
			)}/>
			<Route path='/main' component={Main}/>
			<Route path='/Test' component={Test}/>
			<Route path='/prod' component={Prod}/>
			{/* <Route path='/standardDetail' component={StandardDetail}/> */}
		</Switch>
	</Router>
)

export default routes
