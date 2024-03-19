import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {store} from './store/store';
import Home from './screen/Home';
import AddId from './screen/AddId';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';

// Pour l'utilisation de redux :
// npm i @reduxjs/toolkit react-redux

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <Tab.Navigator>
                    <Tab.Screen name="Home" component={Home} />
                    <Tab.Screen name="AddId" component={AddId} />
                </Tab.Navigator>
            </NavigationContainer>
        </Provider>
    );
}

const styles = StyleSheet.create({});
