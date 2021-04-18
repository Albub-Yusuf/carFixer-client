import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import About from './components/About/About';
import Services from './components/Services/Services';
import Navbar from './components/Home/Navbar/Navbar';
import Login from './components/Login/Login';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import { createContext, useState } from 'react';
import Admin from './components/Admin/Admin';
import AddService from './components/Admin/AddService/AddService';
import CreateAdmin from './components/Admin/CreateAdmin/CreateAdmin';
import AddReview from './components/AddReview/AddReview';
import Checkout from './components/Checkout/Checkout';
import MyOrders from './components/MyOrders/MyOrders';
import ManageServices from './components/Admin/ManageServices/ManageServices';
import AllOrders from './components/Admin/AllOrders/AllOrders';
import ClientQuery from './components/Admin/ClientQuery/ClientQuery';
import AskAnything from './components/AskAnything/AskAnything';

export const AuthContext = createContext();
export const CartContext = createContext();



function App() {

  const [loggedInUser, setLoggedInUser] = useState({

    name: '',
    email: '',
    isLoggedIn: '',
    isRegistered: '',
    hasError: '',

  });

  const [cartInfos, setCartInfos] = useState({});


  return (
    <div>
      <AuthContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <CartContext.Provider value={[cartInfos, setCartInfos]}>

          <Router>

            <Switch>
              
              <Route path="/login">
                <Login></Login>
              </Route>
              <Route path="/askAnything">
                <AskAnything></AskAnything>
              </Route>
              <Route path="/about">
                <About></About>
              </Route>
              <Route path="/services">
                <Services></Services>
              </Route>
              <Route exact path="/">
                <Home></Home>
              </Route>

              <Route path="/home">
                <Home></Home>
              </Route>


              <PrivateRoute path="/add">
                <AddService></AddService>
              </PrivateRoute>

              <PrivateRoute path="/query">
                <ClientQuery></ClientQuery>
              </PrivateRoute>

              <PrivateRoute path="/manage-service">
                <ManageServices></ManageServices>
              </PrivateRoute>

              <PrivateRoute path="/createReview">
                <AddReview></AddReview>
              </PrivateRoute>

              <PrivateRoute path="/addAdmin">
                <CreateAdmin></CreateAdmin>
              </PrivateRoute>

              <PrivateRoute path="/order">
                <MyOrders></MyOrders>
              </PrivateRoute>

              <PrivateRoute path="/orders">
                <AllOrders></AllOrders>
              </PrivateRoute>


              <PrivateRoute path="/checkout">
                <Checkout></Checkout>
              </PrivateRoute>

              <PrivateRoute path="/admin">
                <Admin></Admin>
              </PrivateRoute>
              
            </Switch>
          </Router>
        </CartContext.Provider>
      </AuthContext.Provider>
    </div>


  );
}

export default App;
