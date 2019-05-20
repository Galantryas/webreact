import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import ImageIcon from '@material-ui/icons/Image';
import WorkIcon from '@material-ui/icons/Work';
import BeachAccessIcon from '@material-ui/icons/BeachAccess';
import Divider from '@material-ui/core/Divider';
import { View, StyleSheet, Text, Linking, TextInput } from 'react';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import blue from '@material-ui/core/colors/blue';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  iconHover: {
    '&:hover': {
      color: blue[800],
    },
  }
});

function MyContact(props) {
  const { classes } = props;
  return (
    <List className={classes.root}>
      <ListItem>
        <Avatar src="https://banner2.kisspng.com/20180511/agq/kisspng-whatsapp-logo-computer-icons-5af5a9591ee442.6188279815260491131265.jpg"/>
        <ListItemText primary="WhatsApp" secondary="0881 279 2729" />
        <a target="_blank" rel="noopener noreferrer" href="http://api.whatsapp.com/send?phone=628812792729" style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}}>
          <Icon className={classes.iconHover}>send</Icon>
        </a>
      </ListItem>
      <li>
        <Divider variant="inset" />
      </li>
      <ListItem>
        <Avatar src="https://cdn4.iconfinder.com/data/icons/happily-colored-snlogo/512/gmail-email-mail-logo-circle-material.png"/>
        <ListItemText primary="Email" secondary="galantryas.2014@gmail.com" />
        <a target="_blank" rel="noopener noreferrer" href="https://mail.google.com/mail/?view=cm&fs=1&to=galantryas.2014@gmail.com" style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}}>
          <Icon className={classes.iconHover}>send</Icon>
        </a>
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem>
        <Avatar src="data:image/jpeg;base64,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"/>
        <ListItemText primary="Instagram" secondary="@Zagas_Godspell" />
        <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/zagas_godspell" style={{paddingLeft: 13, textDecoration: 'none', color: '#000000'}}>
          <Icon className={classes.iconHover}>send</Icon>
        </a>
      </ListItem>
    </List>
  );
}

MyContact.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MyContact);