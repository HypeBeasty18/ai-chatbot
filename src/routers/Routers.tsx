import {FC} from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { routes } from './routes.data'


const Routers:FC = () => {
	return (
		<BrowserRouter>
			<Routes>
				{routes.map(route => (
          <Route key={route.path} path={route.path} Component={route.component}/>
				))}
			</Routes>
		</BrowserRouter>
	)
}

export default Routers
