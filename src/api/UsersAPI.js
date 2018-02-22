class UsersAPI {
  static getAllUsers = () =>
    fetch( './data/users.json' )
      .then( response => response.json() )
      .catch( error => error );
}

export default UsersAPI;
