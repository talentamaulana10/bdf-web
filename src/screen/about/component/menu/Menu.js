import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import {Link} from 'react-router-dom' 

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    margin: 'auto',
    maxWidth: 500,
    cursor:"pointer",
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
});

function ComplexGrid(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} >
        <Grid container spacing={16}>
          <Grid item>
            <ButtonBase className={classes.image} >
              <img className={classes.img} alt="complex" src={props.Profile}  />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={16}>
              <Grid item xs>
                <Typography gutterBottom style={{fontWeight:"bold",}}>{props.title}</Typography>
                <Typography color="textSecondary">{props.judul}</Typography>
              </Grid>
             
              <Grid item>
                <Typography style={{ color:"#757575", fontWeight:"bold" }}>{props.kategori}</Typography>
              </Grid>
              
            </Grid>
            <Grid item>
              <Typography variant="subtitle1" style={{fontWeight:"bold",}}>{props.asumsi}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

ComplexGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ComplexGrid);
