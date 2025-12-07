import React from "react";
import ReactDOM from "react-dom/client";

const products = [
    {
        name: "Product 1",
        price: 1000,
        description: "This is product 1",
        inStock : true

    },
    {
        name: "Product 2",
        price: 2000,
        description: "This is product 2",
        inStock : false
    },
    {
        name: "Product 3",
        price: 3000,
        description: "This is product 3",
        inStock : true
    }
];

const TitleComponent = () => {
    return (
        <div>
            <h2>Namaste React</h2>
        </div>
    );
}
const heading = <h1>Welcome to Namaste React</h1>;
// Component Composition
const CardComponent = () => {
    return (
        <div className="card">
            <TitleComponent />
            <p>This is a description of the card.</p>
            <h3>Price: {number} INR</h3>
            
            
        </div>
    );
}
const DisplayProducts = () => {
    return (
        <div className="product-container">
            {heading}
           <div className="product-card">
             {products.map((product,i)=> {
                return (
                    <h3 key={`p-${i}`}>{product.name} - {product.price} INR - {product.inStock ? "In Stock" : "Out of Stock"}</h3>
                );
             })}
           </div>
        </div>
            
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<DisplayProducts />);