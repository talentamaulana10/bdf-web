import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from '../../asset/compu.png'
import './jumbotron.css'
import {Button} from 'reactstrap'

const styles = theme => ({
  root: {
    flexGrow: 1,
    backgroundColor:"#48367d",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height:400,
    backgroundColor:"#48367d",
    justifyContent:"center"
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24} style={{justifyContent:"center"}}>
        <Grid item xs={12} sm={6} >
          <div className={classes.paper}>
          <h1 className="judul">Binus Development</h1><span  className="susah">Foundation</span>
          <h1 className="subjudul">#BerkaryaTanpaSuara</h1>
          <Button style={{borderRadius:"30px"}} href="/class" color="info" className="tombola">Programing</Button>
          <Button href="/developer" style={{backgroundColor:"white",color:"#17a2b8",borderRadius:"30px"}} className="tombolb">Developer</Button>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div className={classes.paper}>
          <img className="logo" src={Logo}/>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
