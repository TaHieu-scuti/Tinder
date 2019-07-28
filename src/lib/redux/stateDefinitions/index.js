import identity from './identity';
import data from '../reducers/fakeData/libraryList.json';

export default {
    // Access token of login user. (persist)
    identity,
    libraries: data,
    // Prevent manipulate user when this is true.
    isRequesting: false,
    errorDescription: ''
}