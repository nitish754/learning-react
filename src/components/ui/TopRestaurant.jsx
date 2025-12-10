import RestaurantCard from "../cards/RestaurantCard";
import FilterButton from "../common/buttons/FilterButton";

const TopRestaurant = ({restro}) => {
    let topRestroData = restro;
    const fetchTopRatedRestro = () => {
        console.log("fetching top restro")
       topRestroData= topRestroData.filter(res => res?.rating > 4.5)
    }
    console.log(topRestroData)
    const handleVegClick = () => {
        alert("Veg Only Filter Clicked");
    }
    return (
        <div className="top-restaurant-conatiner">
            <FilterButton label="Top Rated Restro" onClick={fetchTopRatedRestro} />
            <FilterButton label="Veg Only" onClick={handleVegClick}/>
            <h2>Top Restaurants For You 🥯</h2>
            <div className="top-restaurant-list">
                {
                    topRestroData.map((res) => {
                        return <RestaurantCard key={res.id} name={res.name} cuisine={res.cuisines.join(", ")} rating={res.rating} image={res.image} />
                    })
                }
                
            </div>
        </div>
    );
}

export default TopRestaurant;
 