import React, { useState } from 'react';
import './App.css'; // This imports the CSS file from the same directory as the JavaScript file.


function App() {
  const [products] = useState([
     { name: "Live-1", description:  "Live live magazines bring events to life with vivid imagery and real-time reporting.", price: 1, image: "ECOMM-REACT/images1/a.jpeg", button: "Add" },
      { name: "Live-2", description: "Experience the pulse of the moment with live live magazines, capturing the essence of unfolding stories.", price: 2, image: "/ECOMM-REACT/images1/b.jpeg", button: "Add" },
      { name: "Live-3", description: "Engage in dynamic storytelling with live live magazines, offering immersive experiences beyond the page.", price: 3, image: "/ECOMM-REACT/images1/c.jpeg", button: "Add" },
      { name: "Live-4", description: "Stay connected to the world's happenings with live live magazines, delivering news as it unfolds.", price: 4, image: "/ECOMM-REACT/images1/d.jpeg", button: "Add" },
      { name: "Live-5", description: "Immerse yourself in the now with live live magazines, offering a glimpse into the heartbeat of society.", price: 5, image: "/ECOMM-REACT/images1/e.jpeg", button: "Add" },
      { name: "Live-6", description: "From concerts to conferences, live live magazines provide a front-row seat to the world's events in real-time.", price: 6, image: "/ECOMM-REACT/images1/f.jpeg", button: "Add" },
  ]);

  return (
    
    <div className="App">
      <h1>My Coffee Shop</h1>
      <hr />
      <div className="main">
        {products.map((product,index) => (
          <div key={index} className='container'>
            <img width='250' src={product.image} alt={product.name} />
            <div>{product.name}</div>
            <div>{product.description}</div>
            <div>Price: ${product.price}</div>
            <button>Add</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
