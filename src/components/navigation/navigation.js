import React from 'react'
import {Menu,search,icon} from 'semantic-ui-react';
import{ navLink} from 'react-router-dom';
export class LoginRedirect extends React.Component{
    componentDidMount(){
        window.location.assign('http://127.0.0.1:8000/accounts/signup')

    }
    render(){
        return(
       <div></div>
    );

    }
}
export default class Navigation extends React.Component{
    componentDidMount(){
    }
    render(){
        return(
          <div className="head"></div>
          <div className="layout"></div>
          <Menu>
               <div className="title">
               FRIDAYRENTS
               <p><icon name="world"/>My life my choice</p></div>
               <Menu.Menu className="nav" position="right"></Menu.Menu>
                <menu.item>
                <navLink to="/Tenant">Tenant</navLink>
                </menu.item>
                <menu.item>
                <navLink to="/shop"> Shop</navLink>
                </menu.item>
                <menu.item>
                <navLink to="/Technician">Technician</navLink>
                </menu.item>
                <menu.item>
                <navLink to="/sig"> </navLink>
                </menu.item>
            </Menu>    
            </div>
            {this.props.children}
        );
    }
}