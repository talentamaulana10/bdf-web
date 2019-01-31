import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import gambarReact from '../../../../asset/pacul.png'
import gambarJav from '../../../../asset/html.png'
import gambarJS from '../../../../asset/js.png'
import gambarAndroid from '../../../../asset/rn.png'
import gambarCSS from '../../../../asset/png.png'
import gambarMui from '../../../../asset/nu.png'
import Menu from '../../../about/component/menu/Menu'

const styles = theme => ({
  root: {
    flexGrow: 1,
    marginTop:15,
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
          <Menu Profile={gambarReact} title={"React JS"}  judul={"React adalah pustaka JavaScript untuk membuat antarmuka UI.Yang didirikan oleh Facebook"}  kategori={"senior developer"}  />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Menu Profile={gambarJav}  title={"HTML"} judul={"Hypertext Markup Language adalah sebuah bahasa markah yang digunakan untuk membuat sebuah halaman web"} kategori={"junior developer"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Menu Profile={gambarJS} title={"Javascript"}  judul={"JavaScript adalah bahasa pemrograman tingkat tinggi, yang digunakan untuk otak website"} kategori={"senior developer"} />
        </Grid>
        <Grid item xs={12} sm={6}>
           <Menu Profile={gambarAndroid} title={"React Native"}  judul={"React Native adalah library ui untuk membuat mobile app yang menggunakan javascript"} kategori={"senior developer"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          
          <Menu Profile={gambarCSS}  title={"CSS for Styling"}  judul={"CSS adalah salah satu bahasa desain web yang mengontrol format tampilan sebuah halaman web  "} kategori={"junior developer"} />
        </Grid>
        <Grid item xs={12} sm={6}>
          
          <Menu Profile={gambarMui}  title={"Material UI"}  judul={"Material Ui merupakan framework component dan styling react component"} kategori={"senior developer"} />
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
