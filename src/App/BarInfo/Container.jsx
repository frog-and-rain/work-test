import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
  row: {
    minHeight: '20px',
    padding: '10px',
    marginBottom: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #e3e3e3',
    borderRadius: '1px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  info: {
    marginLeft: '20px',
    color: '#676a6c',
  },

  name: {
    fontSize: '2em',
    height: '50px',
    lineHeight: '50px',
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },

  role: {
    fontSize: '1.3em',
    height: '30px',
    lineHeight: '30px',
  },

  bigAvatar: {
    width: 100,
    height: 100,
    borderRadius: '10px',
    border: `1px solid #2e97de`,
    backgroundColor: '#fff',
  },
};

const BarInfo = (props) => {
  const { classes, user } = props;
  console.log(user.firstName[0]);
  return (
    <div className={classes.row}>
      <Avatar alt={`${user.firstName} ${user.lastName}`} src="/" className={classes.bigAvatar} />
      <div className={classes.info}>
        <span className={classes.name}>
          {user.firstName}{' '}{user.lastName}
        </span><br/>
        <span className={classes.role}>{user.role}</span>
      </div>
    </div>
  );
};

BarInfo.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BarInfo);