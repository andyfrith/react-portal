class AuthenticationAPI {
  static parseFetchResponse = response =>
    response.json().then( text => ( {
      json: text,
      meta: response,
    } ) );

  static loginUser( creds ) {
    const config = {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: `username=${ creds.username }&password=${ creds.password }`,
    };

    return fetch( 'http://localhost:3001/sessions/create', config )
      .then( response => response.json().then( user => ( { user, response } ) ) )
      .then( ( { user, response } ) => {
        if ( !response.ok ) {
          return Promise.reject( user );
        }
        return user;
      } )
      .catch( err => console.log( 'Error: ', err ) );
  }
}

export default AuthenticationAPI;
