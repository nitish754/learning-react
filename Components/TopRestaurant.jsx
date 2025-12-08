import RestaurantCard from "./RestaurantCard";

const TopRestaurant = () => {
    return (
        <div className="top-restaurant-conatiner">
            <h2>Top Restaurants For You 🥯</h2>
            <div className="top-restaurant-list">
                <RestaurantCard name="The Gourmet Kitchen" cuisine="Italian" rating="4.8" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/b314734e-e994-4ffb-a2f9-e2c9627cbfaa_377797.JPG" />
                <RestaurantCard name="Sushi World" cuisine="Japanese" rating="4.7" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/11/11/c7bfd952-2ec9-4ef2-9a9a-68d2f0361410_747134.JPG" />
                <RestaurantCard name="Curry Palace" cuisine="Indian" rating="4.6" image="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/6/18/2889c7c2-de06-4e50-9808-7e1075b6a5d9_34932.jpg" />
                <RestaurantCard name="Burger Hub" cuisine="American" rating="4.5" />
       

            </div>
        </div>
    );
}

export default TopRestaurant;
 