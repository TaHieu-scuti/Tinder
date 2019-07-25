import {createStackNavigator, createAppContainer} from 'react-navigation';
import LibraryList from '../views/LibraryList';
import Home from '../views/Home';
import Contact from '../views/Contact';

const MainNavigator = createStackNavigator({
    LibraryList: {screen: LibraryList}
});

const Navigation = createAppContainer(MainNavigator);
export default Navigation; 