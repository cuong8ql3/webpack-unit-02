import React, { Component } from 'react';
import routes from '../../routes';
import Menu from '../Menu/Menu';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';


export default class App extends Component {
    render() {
        return(
            <Router>
                <Menu />
                { this.showContentMenu(routes)}
            </Router>                        
        )
    }
    
    showContentMenu = (routes) => {
        var result = null;
        if (routes.length > 0) {            
            result = routes.map( (route, index) => {
                return(
                    <Route
                        key={index}
                        path={route.path}
                        exact={route.exact}
                        component={route.main} 
                    />
                )                
            })
        }
        return <Switch>{result}</Switch>;
    }
}


