export default (storeState, {payload}) => {
  let newState = Object.assign({}, storeState);
  if (typeof payload !== 'string') {
    console.error(payload);
    return {};
  }
  newState.errorDescription = payload;
  return newState;
};