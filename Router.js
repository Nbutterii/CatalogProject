import React from 'react';
import { Router, Scene } from 'react-native-router-flux';

import ContactScreen from './screens/ContactScreen';
import DetailProductScreen from './screens/DetailProductScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';
import HomeScreen from './screens/HomeScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignInScreen from './screens/SignInScreen';
import TabbarIcon from './screens/TabbarIcon';

import ProductScreenCustomer from './screens/customer/ProductScreenCustomer';
import CustomerScreen from './screens/customer/CustomerScreen';

import AddProductScreen from './screens/owner/AddProductScreen';
import ChartScreen from './screens/owner/ChartScreen';
import ProductScreenOwner from './screens/owner/ProductScreenOwner';


export default class App extends React.Component {
  render() {    
    return (
      <Router>
        <Scene key="root" hideNavBar>

            <Scene 
                key="visitor" 
                tabs={true}
                tabBarStyle={{ backgroundColor: '#FCFCFC' }}
                headerLayoutPreset="center"
                activeTintColor='#891C1C'
                navBarButtonColor="#891C1C"
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

              <Scene key="product_customer" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
                  <Scene
                  key="ProductCustomerPage"
                  component={ProductScreenCustomer}
                  title="PRODUCT"
                  />
                                  <Scene
                                  key="AddProductPage"
                                  component={AddProductScreen}
                                  title=""
                                  />
              </Scene>

              <Scene key="contact" title="ME" icon={TabbarIcon} iconName="ios-person">
                <Scene
                key="ContactPage"
                component={ContactScreen}
                title="ME"
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

                <Scene
                key="ForgotpasswordPage"
                component={ForgotpasswordScreen}
                title=""
                />
              </Scene>

            </Scene>


            <Scene 
                key="account_customer" 
                tabs={true}
                tabBarStyle={{ backgroundColor: '#FCFCFC' }}
                headerLayoutPreset="center"
                activeTintColor='#891C1C'
                navBarButtonColor="#891C1C"
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

                <Scene key="product_customer" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
                  <Scene
                  key="ProductCustomerPage"
                  component={ProductScreenCustomer}
                  title="PRODUCT"
                  />
                </Scene>

                <Scene key="customer" title="ME" icon={TabbarIcon} iconName="ios-person">
                  <Scene
                  key="CustomerPage"
                  component={CustomerScreen}
                  title="ME"
                  />
                </Scene>

            </Scene>


            <Scene 
                key="account_owner" 
                tabs={true}
                tabBarStyle={{ backgroundColor: '#FCFCFC' }}
                headerLayoutPreset="center"
                activeTintColor='#891C1C'
                navBarButtonColor="#891C1C"
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

              <Scene key="product_owner" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
                <Scene
                key="ProductOwnerPage"
                component={ProductScreenOwner}
                title="PRODUCT"
                />

                <Scene
                key="AddProductPage"
                component={AddProductScreen}
                title=""
                />
              </Scene>

              <Scene key="chart" title="CHART" icon={TabbarIcon} iconName="ios-pie">
                <Scene
                key="ChartPage"
                component={ChartScreen}
                title="CHART"
                />
              </Scene>

            </Scene>

        </Scene>
      </Router>
    );
  }
}