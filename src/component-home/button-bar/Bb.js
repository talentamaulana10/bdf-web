import React,{Component} from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default class Bu extends Component{
  render(){
  return (
    <div>
        <Button style={{color:"white"}} href={this.props.id}>
        {this.props.nama}
      </Button>
    </div>
  );
}
}
