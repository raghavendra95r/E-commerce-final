import React, { Component } from 'react';
import './App.css';
import Navbar from '../components/Navbar/Navbar';
import AddProduct from '../components/AddProduct/AddProduct';
import Cart from '../components/Cart/Cart';
import Login from  '../components/Login/Login';
import ProductList from  '../components/ProductList/ProductList';
import Fotter from '../components/Fotter/Fotter';


 class App extends Component {
 
  render() {
    return (
      <div>
        <Navbar/>
        <Cart/>
        <Login/>
        <AddProduct/>
        <ProductList/>
        <Fotter/>
        
      </div>
    )
  }
}

export default App;
