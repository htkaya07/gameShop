import React, {useState} from 'react'
import { Card,  } from 'react-bootstrap';
import {ReactStars} from 'react-bootstrap-star-rating'


const CartItem=(props) => {

const data = props.item.product;
  const [quantity, setQuantity] = useState(props.item.quantity);

    return(
        <Card style={({ width: "18rem" }, { height: "24rem" }, {margin:'0.001rem'})} >
        <Card.Body>
          {/* <Card.Title>{name}</Card.Title> */}
          <Card.Img
            style={({ width: "10rem" }, { height: "14rem" })}
            variant="top"
            src={
              data
                ? data.image
                : "data:image/jpeg;base64,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"
            }
          />
          <Card.Text>${data.price} </Card.Text>
          <ReactStars
          count={data.rating}
           onChange={data.rating}
           size={24}
           edit={false}
            activeColor="#ffd700"
            color="#ffd700"
  />
          
          {/* <Card.Text>{rating} </Card.Text> */}
          {/* <Button variant="primary"  title={'Add'}
                 color={'green'}
                 onClick={() => {
                    props.addItemToCart(props)}}>Add </Button> */}
        </Card.Body>
      </Card>

    )
} 

export default CartItem;