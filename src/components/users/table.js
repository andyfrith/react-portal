import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import CreateIcon from 'material-ui-icons/Create';
import RemoveCircleIcon from 'material-ui-icons/RemoveCircle';
import Table, {
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from 'material-ui/Table';

const styles = theme => ( {
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
    background: 'transparent',
  },
  table: {
    minWidth: 700,
    background: 'transparent',
  },
} );

function UsersTable( props ) {
  const {
    classes, users, deleteUser, editUser,
  } = props;

  const handleDelete = ( user ) => {
    deleteUser( user );
  };

  const handleEdit = ( user ) => {
    editUser( user );
  };

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>Display Name</TableCell>
          <TableCell>Gender</TableCell>
          <TableCell>Location</TableCell>
          <TableCell>Website</TableCell>
          <TableCell />
        </TableRow>
      </TableHead>
      <TableBody>
        {users.map( n => (
          <TableRow key={n.user_id}>
            <TableCell>{n.display_name}</TableCell>
            <TableCell>{n.gender}</TableCell>
            <TableCell>{n.location}</TableCell>
            <TableCell>{n.website}</TableCell>
            <TableCell>
              <Link onClick={() => handleEdit( n )} to={`/user/ ${ n.user_id }`}>
                <IconButton className={classes.button} aria-label="Edit">
                  <CreateIcon />
                </IconButton>
              </Link>
              <IconButton
                onClick={() => handleDelete( n )}
                className={classes.button}
                aria-label="Delete"
              >
                <RemoveCircleIcon />
              </IconButton>
            </TableCell>
          </TableRow>
        ) )}
      </TableBody>
    </Table>
  );
}

UsersTable.propTypes = {
  classes: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired,
  deleteUser: PropTypes.func.isRequired,
  editUser: PropTypes.func.isRequired,
};

export default withStyles( styles )( UsersTable );
