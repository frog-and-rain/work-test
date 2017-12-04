import React from 'react';
import { withStyles } from 'material-ui/styles';
import Avatar from 'material-ui/Avatar';

const styles = {
  row: {
    minHeight: '20px',
    padding: '10px',
    margin: '20px 0',
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
  const { classes, users, current } = props;
  const index = users.findIndex(item => item.id === current);
  const user = users[index];
  if (!user) {
    return null;
  }
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

export default withStyles(styles)(BarInfo);