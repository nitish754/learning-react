import RestaurantCard from "./RestaurantCard";

const TopRestaurant = () => {
    return (
        <div className="top-restaurant-conatiner">
            <h2>Top Restaurants For You 🥯</h2>
            <div className="top-restaurant-list">
                <RestaurantCard name="The Gourmet Kitchen" cuisine="Italian" rating="4.8" />
                <RestaurantCard name="Sushi World" cuisine="Japanese" rating="4.7" />
                <RestaurantCard name="Curry Palace" cuisine="Indian" rating="4.6" />
                <RestaurantCard name="Burger Hub" cuisine="American" rating="4.5" />
       

            </div>
        </div>
    );
}

export default TopRestaurant;
 