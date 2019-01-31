import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import gambarReact from '../../../../asset/react.jpg'
import gambarJav from '../../../../asset/jav.png'
import gambarJS from '../../../../asset/js.png'
import gambarAndroid from '../../../../asset/android.png'
import gambarJango from '../../../../asset/react.jpg'
import Menu from '../../../about/component/menu/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Menu Profile={gambarReact}/></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Menu Profile={gambarJav} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}><Menu Profile={gambarJS} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}> <Menu Profile={gambarAndroid} /></Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper className={classes.paper}>
          <Menu Profile={gambarJango} /></Paper>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
