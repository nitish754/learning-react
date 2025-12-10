import { useState } from "react";
import Button from "../common/buttons/Button";

const RestaurantCard = ({image,name,cuisine,rating}) => {
    const img = image || "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9hX2dyYXBoaWNfZWxlbWVudF9vZl9hX2dvbGRlbl9zaG90X29mX2p1c3RfYV9zaV81YzNjMTg3MS0xMTEwLTQzMDQtODgzOC1kMDRjMTY2YWZjZjkucG5n.png";

    const [cartCount, setcartCount] = useState(0);

    const addToCart = () => {
        setcartCount(cartCount+1)
    }

    return (
        <div className="restaurant-card">
            <img src={img} alt={name || 'restaurant image'} className="restro-img" />

            <div>
                <h3 className="restaurant-name">{name}</h3>
                <div className="restaurant-meta">
                    <span className="muted">{cuisine}</span>
                    <span>{cartCount}</span>
                    <span className="rating-badge">{rating} ⭐</span>
                </div>
            </div>

            <div className="restaurant-actions">
                <Button label="Add Cart" className="primary" onClick={addToCart} />
                <Button label="Explore foods" className="ghost" />
            </div>
        </div>
    );
}

export default RestaurantCard;