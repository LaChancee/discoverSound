import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from "../screen/HomeScreen";

const Tab = createBottomTabNavigator();

function Layout() {

    return (
        <Tab.Navigator>
            <Tab.Screen name="Home"
                        component={HomeScreen}
            />
        </Tab.Navigator>
    );
}

export default Layout;