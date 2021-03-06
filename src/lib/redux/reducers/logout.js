import firebase from 'firebase';

export default (state, {payload}) => {
  let newState = Object.assign({}, state);
  
  newState.identity = {
    authorizedAt: null,
    accessToken: null,
    refreshToken: null,
    expiresIn: null,
  };
  newState.errorDescription = '';
  
  firebase.auth().signOut();

  return newState;
};
  