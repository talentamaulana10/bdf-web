import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '../Card-class/Card'
import imgReact from '../../asset/rreact.png'
import imgRN from '../../asset/rn.png'
import imgHTML from '../../asset/htmll.png'
import imgCSS from '../../asset/css.png'
import imgJS from '../../asset/js.png'
import imgMUI from '../../asset/material.png'
import imgBootstrap from '../../asset/node.png'
import imgGIT from '../../asset/git.png'
import imgDB from '../../asset/bd.jpeg'
import imgUI from '../../asset/ux.png'

const styles = theme => ({
  root: {
    flexGrow: 1,
    justifyContent:"center",
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    justifyContent:"center",
    color: theme.palette.text.secondary,
  },
});

function FullWidthGrid(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Grid container spacing={24}  >
        <Grid item xs={12} sm={6}>
          <div className={classes.paper} ><Card profile={imgReact} title="react js" subtitle="React merupakan library ui yang di dirikan oleh facebook yang menggunakan javascript dalam pengembangannya" categori="senior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgRN} title="React Native" subtitle="React Native merupakan library ui yang berfungsi untuk pengembangan mobile app ios & android" categori="senior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgHTML} title="HTML" subtitle="HTML adalah suatu bahasa markah yang berfungsi sebagai tag tertentu untuk menyatakan kode-kode yang harus ditafsirkan oleh browser agar dapat ditampilkan" categori="junior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgCSS} title="CSS" subtitle="merupakan aturan untuk mengatur beberapa komponen dalam sebuah web sehingga akan lebih terstruktur dan seragam dan bisa digunakan sebagai styling web" categori="junior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgJS} title="Javascript" subtitle="Javascript merupakan bahas pemrograman tingka tinggi dan dinamis yang digunakan sebagai alat perintah fungsi di web/aplikasi" categori="senior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgMUI} title="Material Ui" subtitle="Material ui merupakan framework UI component dan styling yang digunakan untuk mempercantik halaman " categori="junior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgBootstrap} title="Node JS" subtitle="Node.js adalah platform perangkat lunak pada sisi-server dan aplikasi jaringan yang ditulis dengan bahasa JavaScript dan dijalankan pada OS apapun tanpa perubahan code program" categori="senior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgGIT}  title="git system" subtitle="Git adalah software control system yang digunakan untuk mengembangkan software secara bersama-bersama.dan juga memudahkan programer mengetahui perubahan source baru" categori="senior developer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgUI} title="UI/UX Designer" subtitle="adalah desain untuk komputer, peralatan, mesin, perangkat komunikasi mobile, aplikasi perangkat lunak, dan situs web yang berfokus pada pengalaman pengguna dan interaksi" categori="For Designer" /></div>
        </Grid>
        <Grid item xs={12} sm={6}>
          <div className={classes.paper}><Card profile={imgDB} title="Database" subtitle="adalah kumpulan informasi yang disimpan di dalam server secara sistematik sehingga dapat diperiksa menggunakan suatu program komputer untuk memperoleh data dari databse tersebut." categori="back end developer" /></div>
        </Grid>
      </Grid>
    </div>
  );
}

FullWidthGrid.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(FullWidthGrid);
