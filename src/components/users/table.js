import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui-icons/Delete';
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
  const { classes, users, deleteUser } = props;

  const handleDelete = ( user ) => {
    deleteUser( user );
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
              <IconButton
                onClick={() => handleDelete( n )}
                className={classes.button}
                aria-label="Delete"
              >
                <DeleteIcon />
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
};

export default withStyles( styles )( UsersTable );
