const RestaurantCard = (props) => {
    const img = props.image || "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsb2ZmaWNlMV9hX2dyYXBoaWNfZWxlbWVudF9vZl9hX2dvbGRlbl9zaG90X29mX2p1c3RfYV9zaV81YzNjMTg3MS0xMTEwLTQzMDQtODgzOC1kMDRjMTY2YWZjZjkucG5n.png";

    return (
        <div className="restaurant-card">
            <img src={img} alt={props.name || 'restaurant image'} className="restro-img" />

            <div>
                <h3 className="restaurant-name">{props.name}</h3>
                <div className="restaurant-meta">
                    <span className="muted">{props.cuisine}</span>
                    <span className="rating-badge">{props.rating} ⭐</span>
                </div>
            </div>

            <div className="restaurant-actions">
                <button className="btn primary">Order</button>
                <button className="btn ghost">Details</button>
            </div>
        </div>
    );
}

export default RestaurantCard;