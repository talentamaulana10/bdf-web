import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Logo from '../../asset/so.png'
import './jum.css'
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
          <h1 className="judul">Binus</h1><span  className="susah">Contact</span>
          <h1 className="subjudul">"Cari Tahu Lebih Lanjut Tentang kami di social"<br/> media resmi kami
          untuk informasi lebih lanjut
          </h1>
          </div>
        </Grid>
        <Grid item xs={12} sm={6} >
          <div className={classes.paper}>
          <img className="logu" src={Logo}/>
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
