import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gambar from '../../asset/one.png'
import {Button } from 'reactstrap'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:200,
    
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    height:450,
    
    color: "white",
  },
});

function CenteredGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={0}>
      <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
          <img src={Gambar} style={{width:"66%"}}/>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper} style={{backgroundColor:"#48367d",}}>
          <h1 style={{marginTop:"100px"}} >"Everyone Can <span style={{color:"#33bdaa"}}>Code</span>"</h1>
          <p style={{fontFamily:'Helvetica',marginTop:30,color:"white" ,fontWeight:400,fontSize:"1.25714286em"}} >we believe coding is an essential skill. Learning to code teaches you how to solve problems and work together in creative ways. And it helps you build apps that bring your ideas to life. </p>
          <Button style={{marginTop:"30px"}} color="info" href="/class">Go To Class</Button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

CenteredGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CenteredGrid);
