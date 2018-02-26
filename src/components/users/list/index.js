import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import GridList, { GridListTile, GridListTileBar } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import InfoIcon from 'material-ui-icons/Info';

const styles = theme => ( {
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 700,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
} );

function List( props ) {
  const { classes, users } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        {users.map( user => (
          <GridListTile key={user.user_id}>
            <img src={user.picture} alt={user.display_name} />
            <GridListTileBar
              title={user.display_name}
              subtitle={<span>{user.location}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ) )}
      </GridList>
    </div>
  );
}

List.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
};

export default withStyles( styles )( List );
