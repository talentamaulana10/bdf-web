import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Gambar from '../../asset/telegram.png'
import {Button } from 'reactstrap'

const styles = theme => ({
  root: {
    flexGrow: 1,
    
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
          <div className={classes.paper} style={{backgroundColor:"#48367d",}}>
          <h1 style={{marginTop:"100px"}} >Tele<span style={{color:"#33bdaa"}}>gram</span></h1>
          <p style={{fontFamily:'Helvetica',marginTop:30,color:"white" ,fontWeight:400,fontSize:"1.25714286em"}} >"Contact me on Telegram"</p>
          <Button style={{marginTop:"30px"}} color="info" href="/class">Go There</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}>
          <img src={Gambar} style={{width:"66%"}}/>
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