import React, {
	Component
} from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../pages/login/login';

export default class RouteConfig extends Component {
	render() {
		return(
			<BrowserRouter>
    <Switch>
  		<Route exact path='/' component={App}/>
		</Switch>
  </BrowserRouter>
		)
	}
}