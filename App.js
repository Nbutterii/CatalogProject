import React, {Component} from 'react';
import { StyleSheet, Text } from 'react-native';
import { Router, Scene } from 'react-native-router-flux';

import HomeScreen from './screens/HomeScreen';
import ProductScreenUser from './screens/ProductScreenUser';
import ProductScreenAdmin from './screens/ProductScreenAdmin';
import UserScreen from './screens/UserScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignInScreen from './screens/SignInScreen';
import DetailProductScreen from './screens/DetailProductScreen';
import AddProductScreen from './screens/AddProductScreen';

import TabbarIcon from './screens/TabbarIcon';



// const TabIcon = ({ title, focused }) => {
//   return (
//     <Text style={{color: focused ? '#891C1C' :'#d5d5d6'}}>{title}</Text>
//   );
// };

const App = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>

        <Scene 
          key="tabbar" 
          tabs={true}
          tabBarStyle={{ backgroundColor: '#FCFCFC' }}
          // showLabel={false}
        >
          <Scene key="home" title="HOME" icon={TabbarIcon} iconName="ios-home">
            <Scene
            key="HomePage"
            component={HomeScreen}
            title="CATALOG"
            />

            <Scene
            key="DetailProductPage"
            component={DetailProductScreen}
            title=""
            />

          </Scene>

          <Scene key="product_user" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
            <Scene
            key="ProductUserPage"
            component={ProductScreenUser}
            title="Product"
            />
          </Scene>

          <Scene key="product_admin" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
            <Scene
            key="ProductAdminPage"
            component={ProductScreenAdmin}
            title="Product"
            />

          <Scene
            key="AddProductPage"
            component={AddProductScreen}
            title=""
            />

          </Scene>

          <Scene key="user" title="ME" icon={TabbarIcon} iconName="ios-person">
            <Scene
            key="UserPage"
            component={UserScreen}
            title="Me"
            />

            <Scene
            key="RegisterPage"
            component={RegisterScreen}
            title=""
            />

            <Scene
            key="SignInPage"
            component={SignInScreen}
            title=""
            />

          </Scene>

        </Scene>

      </Scene>
    </Router>

  );
}


export default App;