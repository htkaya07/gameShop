import React from 'react'


import CartItem from './CartItem';
import ProductCard from '../products/ProductCard';

import { Container } from 'react-bootstrap';
//redux
import { connect } from "react-redux";
import * as actions from "../Redux/Actions/cartActions";


const Cart = (props) => {
    var total = 0;
  props.cartItems.forEach((cart) => {
    return (total += cart.product.price);
  });

    return (
        <div>
            <h1>Cart Page</h1>
          {props.cartItems.length ? (
        <Container>
          {/* <h1 style={{ alignSelf: "center" }}>Cart</h1>
          {props.cartItems.map((c) => (
            
              <CartItem 
              item={c.product.name} />))} */}


              {/* <div data={props.cartItems}
            renderItem={(data) => 
              <CartItem item={data}  />
            }

              /> */}


              <h1>{props.cartItems[0].product.name}</h1>
              <h1>{props.cartItems[0].product.price}</h1>
          </Container>
          
          ):

          (<Container>
            <h1>Your Cart is empty!!</h1>
          </Container>)
}
        </div>
      

    )
}


const mapStateToProps = (state) => {
    const { cartItems } = state;
    return {
      cartItems: cartItems,
    };
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      clearCart: () => dispatch(actions.clearCart()),
      removeFromCart: (item) => dispatch(actions.removeFromCart(item)),
    };
  };



  export default connect(mapStateToProps, mapDispatchToProps)(Cart);