import React, { useState } from 'react';
import { Card, Button, ProgressBar } from 'react-bootstrap'; 
import Navbar from './Navbar';
import Name from './Name';
import Price from './Price';
import Description from './Des';
import Image from './Image';
import Prod from'./Prod';
import './App.css';
import'./Pro.css'


const App = () => {
  const [firstName, setFirstName] = useState("John");
  const [cartItems, setCartItems] = useState(0);

  const addToCart = () => {
    setCartItems(cartItems + 1);
  };

  const progress = (cartItems / 5) * 100;

  return (
    <>
    
    
    
    
    
    
    
    <Navbar />
    <div className="container">
      <div className="card-container">
        {Prod.map((Prod, index) => (
          <Card className="product-card" style={{ width: '20rem' }} key={index}>
            <Card.Img variant="top" src={Prod.imageUrl} />
            <Card.Body>
              <Card.Title>{Prod.name}</Card.Title>
              <Card.Text>
                {Prod.description}
              </Card.Text>
              <p>Price: ${Prod.price}</p>
              <Button variant="primary" onClick={addToCart}>
                Add to Cart
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <div className="message">
        {firstName ? (
          <>
            <p>👋 Hey, {firstName}! Ready to shop? 🛒</p>
            <img src="https://www.rawpixel.com/image/6245753/png-sticker-laptop#eyJrZXlzIjoibGFwdG9wIHBuZyIsInNvcnRlZEtleXMiOiJsYXB0b3AgcG5nIn0=" alt="Profile" />
          </>
        ) : (
          <p>Hello, stranger! 😊</p>
        )}
      </div>
    </div>
    </>
  );
};    
export default App;
