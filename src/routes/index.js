/**
 * 定义应用路
 */
import React from 'react'
import { Route, Redirect, Switch, HashRouter as Router } from 'react-router-dom'
import {
	Main,
	FiberTest,
	TPage,
	FontPage,
	ModelPage,
	SuccessPage
} from './routes'
// const { RouterHandler } = Router

const routes = () => (
	<Router>
		<Switch>
			<Route exact path="/" render={() => (
				<Redirect to="/main"/>
			)}/>
			<Route path='/main' component={Main}/>
			<Route path='/fiber' component={FiberTest}/>
			<Route path='/test' component={TPage}/>
			<Route path='/font' component={FontPage}/>
			<Route path='/model' component={ModelPage}/>
			<Route path='/success' component={SuccessPage}/>
			{/* <Route path='/standardDetail' component={StandardDetail}/> */}
		</Switch>
	</Router>
)

export default routes
