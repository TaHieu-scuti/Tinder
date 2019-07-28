import {createStackNavigator, createAppContainer} from 'react-navigation';
import LibraryList from '../views/LibraryList';
import LoginForm from '../views/Auth/LoginForm'
import Home from '../views/Home';
import Contact from '../views/Contact';

const MainNavigator = createStackNavigator({
    Login: {screen: LoginForm}
});

const Navigation = createAppContainer(MainNavigator);
export default Navigation; 