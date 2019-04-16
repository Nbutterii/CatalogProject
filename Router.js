import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TabbarIcon from './screens/TabbarIcon';

import HomeScreenVisitor from './screens/HomeScreenVisitor';
import CategoryTopsScreenVisitor from './screens/CategoryTopsScreenVisitor';
import CategoryPantsScreenVisitor from './screens/CategoryPantsScreenVisitor';
import CategorySkirtsScreenVisitor from './screens/CategorySkirtsScreenVisitor';
import ProductScreenVisitor from './screens/ProductScreenVisitor';
import DetailProductScreenVisitor from './screens/DetailProductScreenVisitor';
import SearchProductScreenVisitor from './screens/SearchProductScreenVisitor';
import ContactScreen from './screens/ContactScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignInScreen from './screens/SignInScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';

import HomeScreenCustomer from './screens/customer/HomeScreenCustomer';
import CategoryTopsScreenCustomer from './screens/customer/CategoryTopsScreenCustomer';
import CategoryPantsScreenCustomer from './screens/customer/CategoryPantsScreenCustomer';
import CategorySkirtsScreenCustomer from './screens/customer/CategorySkirtsScreenCustomer';
import ProductScreenCustomer from './screens/customer/ProductScreenCustomer';
import DetailProductScreenCustomer from './screens/customer/DetailProductScreenCustomer';
import CustomerScreen from './screens/customer/CustomerScreen';

import HomeScreenOwner from './screens/owner/HomeScreenOwner';
import CategoryTopsScreenOwner from './screens/owner/CategoryTopsScreenOwner';
import CategoryPantsScreenOwner from './screens/owner/CategoryPantsScreenOwner';
import CategorySkirtsScreenOwner from './screens/owner/CategorySkirtsScreenOwner';
import ProductScreenOwner from './screens/owner/ProductScreenOwner';
import DetailProductScreenOwner from './screens/owner/DetailProductScreenOwner';
import EditProductScreen from './screens/owner/EditProductScreen';
import AddProductScreen from './screens/owner/AddProductScreen';
import ChartScreen from './screens/owner/ChartScreen';

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

              <Scene key="home_visitor" title="HOME" icon={TabbarIcon} iconName="ios-home">
                <Scene
                key="HomePageVisitor"
                component={HomeScreenVisitor}
                title="CATALOG"
                />
                <Scene
                key="DetailProductPageCustomer"
                component={DetailProductScreenCustomer}
                title=""
                />
                <Scene
                key="CategoryTopsScreenVisitorPage"
                component={CategoryTopsScreenVisitor}
                title="Tops"
                />
                <Scene
                key="CategoryPantsScreenVisitorPage"
                component={CategoryPantsScreenVisitor}
                title="Pants"
                />
                <Scene
                key="CategorySkirtsScreenVisitorPage"
                component={CategorySkirtsScreenVisitor}
                title="Skirts"
                />
              </Scene>

              <Scene key="product_visitor" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
                  <Scene
                  key="ProductVisitorPage"
                  component={ProductScreenVisitor}
                  title="PRODUCT"
                  />
                  <Scene
                  key="DetailProductPageVisitor"
                  component={DetailProductScreenVisitor}
                  title=""
                  />
                  <Scene
                  key="SearchProductPageVisitor"
                  component={SearchProductScreenVisitor}
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
                <Scene key="home_customer" title="HOME" icon={TabbarIcon} iconName="ios-home">
                  <Scene
                  key="HomePageCustomer"
                  component={HomeScreenCustomer}
                  title="CATALOG"
                  />
                  <Scene
                  key="CategoryTopsScreenCustomerPage"
                  component={CategoryTopsScreenCustomer}
                  title="Tops"
                  />
                  <Scene
                  key="CategoryPantsScreenCustomerPage"
                  component={CategoryPantsScreenCustomer}
                  title="Pants"
                  />
                  <Scene
                  key="CategorySkirtsScreenCustomerPage"
                  component={CategorySkirtsScreenCustomer}
                  title="Skirts"
                  />
                </Scene>

                <Scene key="product_customer" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
                  <Scene
                  key="ProductCustomerPage"
                  component={ProductScreenCustomer}
                  title="PRODUCT"
                  />
                  <Scene
                  key="DetailProductPageCustomer"
                  component={DetailProductScreenCustomer}
                  title=""
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
              <Scene key="home_owner" title="HOME" icon={TabbarIcon} iconName="ios-home">
                <Scene
                key="HomePageOwner"
                component={HomeScreenOwner}
                title="CATALOG"
                />
                <Scene
                key="CategoryTopsScreenOwnerPage"
                component={CategoryTopsScreenOwner}
                title="Tops"
                />
                <Scene
                key="CategoryPantsScreenOwnerPage"
                component={CategoryPantsScreenOwner}
                title="Pants"
                />
                <Scene
                key="CategorySkirtsScreenOwnerPage"
                component={CategorySkirtsScreenOwner}
                title="Skirts"
                />
              </Scene>

              <Scene key="product_owner" title="PRODUCT" icon={TabbarIcon} iconName="ios-list-box">
                <Scene
                key="ProductOwnerPage"
                component={ProductScreenOwner}
                title="PRODUCT"
                />
                <Scene
                key="DetailProductPageOwner"
                component={DetailProductScreenOwner}
                title=""
                />
                <Scene
                key="AddProductPage"
                component={AddProductScreen}
                title=""
                />
                <Scene
                key="EditProductPage"
                component={EditProductScreen}
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