import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '../button-bar/Bb'
import './navbar.css'

export default class Nav extends Component{
render(){
  return (
    <div className="appbar">
      <AppBar position="static" color="default">
        <Toolbar className="toolbar">
         <Button nama="about"/>
         <Button nama="Home"/>
         <Button nama="class"/>
         <Button nama="contact"/>
         <Button nama="developer"/>
        </Toolbar>
      </AppBar>
    </div>
  );
}
}


