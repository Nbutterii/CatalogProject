import React from 'react';
import { Router, Scene } from 'react-native-router-flux';
import TabbarIcon from './screens/TabbarIcon';

import HomeScreenVisitor from './screens/HomeScreenVisitor';
import HomeScreenDetailProductVisitor from './screens/HomeScreenDetailProductVisitor';
import CategoryTopsScreenVisitor from './screens/CategoryTopsScreenVisitor';
import DetailCategoryTopsScreenVisitor from './screens/DetailCategoryTopsScreenVisitor';
import CategoryPantsScreenVisitor from './screens/CategoryPantsScreenVisitor';
import DetailCategoryPantsScreenVisitor from './screens/DetailCategoryPantsScreenVisitor';
import CategorySkirtsScreenVisitor from './screens/CategorySkirtsScreenVisitor';
import DetailCategorySkirtsScreenVisitor from './screens/DetailCategorySkirtsScreenVisitor';
import ProductScreenVisitor from './screens/ProductScreenVisitor';
import DetailProductScreenVisitor from './screens/DetailProductScreenVisitor';
import SearchProductScreenVisitor from './screens/SearchProductScreenVisitor';
import ContactScreen from './screens/ContactScreen';
import RegisterScreen from './screens/RegisterScreen';
import SignInScreen from './screens/SignInScreen';
import ForgotpasswordScreen from './screens/ForgotpasswordScreen';

import HomeScreenCustomer from './screens/customer/HomeScreenCustomer';
import HomeScreenDetailProductCustomer from './screens/customer/HomeScreenDetailProductCustomer';
import CategoryTopsScreenCustomer from './screens/customer/CategoryTopsScreenCustomer';
import DetailCategoryTopsScreenCustomer from './screens/customer/DetailCategoryTopsScreenCustomer';
import CategoryPantsScreenCustomer from './screens/customer/CategoryPantsScreenCustomer';
import DetailCategoryPantsScreenCustomer from './screens/customer/DetailCategoryPantsScreenCustomer';
import CategorySkirtsScreenCustomer from './screens/customer/CategorySkirtsScreenCustomer';
import DetailCategorySkirtsScreenCustomer from './screens/customer/DetailCategorySkirtsScreenCustomer';
import ProductScreenCustomer from './screens/customer/ProductScreenCustomer';
import DetailProductScreenCustomer from './screens/customer/DetailProductScreenCustomer';
import SearchProductScreenCustomer from './screens/customer/SearchProductScreenCustomer';
import CustomerScreen from './screens/customer/CustomerScreen';
import WishlistWow from './screens/customer/WishlistWow';
import DetailProductWishlistWow from './screens/customer/DetailProductWishlistWow';
import WishlistHappy from './screens/customer/WishlistHappy';
import DetailProductWishlistHappy from './screens/customer/DetailProductWishlistHappy';
import Profile from './screens/customer/Profile';

import HomeScreenOwner from './screens/owner/HomeScreenOwner';
import HomeScreenDetailProductOwner from './screens/owner/HomeScreenDetailProductOwner';
import CategoryTopsScreenOwner from './screens/owner/CategoryTopsScreenOwner';
import DetailCategoryTopsScreenOwner from './screens/owner/DetailCategoryTopsScreenOwner';
import CategoryPantsScreenOwner from './screens/owner/CategoryPantsScreenOwner';
import DetailCategoryPantsScreenOwner from './screens/owner/DetailCategoryPantsScreenOwner';
import CategorySkirtsScreenOwner from './screens/owner/CategorySkirtsScreenOwner';
import DetailCategorySkirtsScreenOwner from './screens/owner/DetailCategorySkirtsScreenOwner';
import ProductScreenOwner from './screens/owner/ProductScreenOwner';
import DetailProductScreenOwner from './screens/owner/DetailProductScreenOwner';
import EditProductScreen from './screens/owner/EditProductScreen';
import SearchProductScreenOwner from './screens/owner/SearchProductScreenOwner';
import AddProductScreen from './screens/owner/AddProductScreen';
import ChartScreen from './screens/owner/ChartScreen';
import TopTopsScreen from './screens/owner/TopTopsScreen';
import DetailTopTopsScreen from './screens/owner/DetailTopTopsScreen';
import TopPantsScreen from './screens/owner/TopPantsScreen';
import DetailTopPantsScreen from './screens/owner/DetailTopPantsScreen';
import TopSkirtsScreen from './screens/owner/TopSkirtsScreen';
import DetailTopSkirtsScreen from './screens/owner/DetailTopSkirtsScreen';

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
                key="HomePageDetailProductVisitor"
                component={HomeScreenDetailProductVisitor}
                title=""
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
                key="DetailCategoryTopsPageVisitor"
                component={DetailCategoryTopsScreenVisitor}
                title=""
                />
                <Scene
                key="CategoryPantsScreenVisitorPage"
                component={CategoryPantsScreenVisitor}
                title="Pants"
                />
                <Scene
                key="DetailCategoryPantsPageVisitor"
                component={DetailCategoryPantsScreenVisitor}
                title=""
                />
                <Scene
                key="CategorySkirtsScreenVisitorPage"
                component={CategorySkirtsScreenVisitor}
                title="Skirts"
                />
                <Scene
                key="DetailCategorySkirtsPageVisitor"
                component={DetailCategorySkirtsScreenVisitor}
                title=""
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
                  key="HomePageDetailProductCustomer"
                  component={HomeScreenDetailProductCustomer}
                  title=""
                  />
                  <Scene
                  key="CategoryTopsScreenCustomerPage"
                  component={CategoryTopsScreenCustomer}
                  title="Tops"
                  />
                  <Scene
                  key="DetailCategoryTopsPageCustomer"
                  component={DetailCategoryTopsScreenCustomer}
                  title=""
                  />
                  <Scene
                  key="CategoryPantsScreenCustomerPage"
                  component={CategoryPantsScreenCustomer}
                  title="Pants"
                  />
                  <Scene
                  key="DetailCategoryPantsPageCustomer"
                  component={DetailCategoryPantsScreenCustomer}
                  title=""
                  />
                  <Scene
                  key="CategorySkirtsScreenCustomerPage"
                  component={CategorySkirtsScreenCustomer}
                  title="Skirts"
                  />
                  <Scene
                  key="DetailCategorySkirtsPageCustomer"
                  component={DetailCategorySkirtsScreenCustomer}
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
                  key="DetailProductPageCustomer"
                  component={DetailProductScreenCustomer}
                  title=""
                  />
                  <Scene
                  key="SearchProductPageCustomer"
                  component={SearchProductScreenCustomer}
                  title=""
                  />
                  </Scene>

                <Scene key="customer" title="ME" icon={TabbarIcon} iconName="ios-person">
                  <Scene
                  key="CustomerPage"
                  component={CustomerScreen}
                  title="ME"
                  />
                  <Scene
                  key="WishlistWowPage"
                  component={WishlistWow}
                  title="Wishlist Wow"
                  />
                  <Scene
                  key="DetailProductWishlistWowPage"
                  component={DetailProductWishlistWow}
                  title=""
                  />
                  <Scene
                  key="WishlistHappyPage"
                  component={WishlistHappy}
                  title="Wishlist Happy"
                  />
                  <Scene
                  key="DetailProductWishlistHappyPage"
                  component={DetailProductWishlistHappy}
                  title=""
                  />
                  <Scene
                  key="ProfilePage"
                  component={Profile}
                  title="Profile"
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
                key="HomePageDetailProductOwner"
                component={HomeScreenDetailProductOwner}
                title=""
                />
                <Scene
                key="CategoryTopsScreenOwnerPage"
                component={CategoryTopsScreenOwner}
                title="Tops"
                />
                <Scene
                key="DetailCategoryTopsPageOwner"
                component={DetailCategoryTopsScreenOwner}
                title=""
                />
                <Scene
                key="CategoryPantsScreenOwnerPage"
                component={CategoryPantsScreenOwner}
                title="Pants"
                />
                <Scene
                key="DetailCategoryPantsPageOwner"
                component={DetailCategoryPantsScreenOwner}
                title=""
                />
                <Scene
                key="CategorySkirtsScreenOwnerPage"
                component={CategorySkirtsScreenOwner}
                title="Skirts"
                />
                <Scene
                key="DetailCategorySkirtsPageOwner"
                component={DetailCategorySkirtsScreenOwner}
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
                <Scene
                key="SearchProductPageOwner"
                component={SearchProductScreenOwner}
                title=""
                />
              </Scene>

              <Scene key="chart" title="CHART" icon={TabbarIcon} iconName="ios-pie">
                <Scene
                key="ChartPage"
                component={ChartScreen}
                title="CHART"
                />
                <Scene
                key="TopTopsPage"
                component={TopTopsScreen}
                title="Ranked Tops"
                />
                <Scene
                key="DetailTopTopsPage"
                component={DetailTopTopsScreen}
                title=""
                />
                <Scene
                key="TopPantsPage"
                component={TopPantsScreen}
                title="Ranked Pants"
                />
                <Scene
                key="DetailTopPantsPage"
                component={DetailTopPantsScreen}
                title=""
                />
                <Scene
                key="TopSkirtsPage"
                component={TopSkirtsScreen}
                title="Ranked Skirt"
                />
                <Scene
                key="DetailTopSkirtsPage"
                component={DetailTopSkirtsScreen}
                title=""
                />
              </Scene>

            </Scene>

        </Scene>
      </Router>
    );
  }
}