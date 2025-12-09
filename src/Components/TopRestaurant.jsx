import RestaurantCard from "./RestaurantCard";

const TopRestaurant = (props) => {
    const {restro} = props;
    return (
        <div className="top-restaurant-conatiner">
            <h2>Top Restaurants For You 🥯</h2>
            <div className="top-restaurant-list">
                {
                    restro.map((res) => {
                        return <RestaurantCard key={res.id} name={res.name} cuisine={res.cuisines.join(", ")} rating={res.rating} image={res.image} />
                    })
                }
                
            </div>
        </div>
    );
}

export default TopRestaurant;
 