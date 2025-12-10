import { useState } from 'react';
import RestaurantCard from '../cards/RestaurantCard';
import FilterButton from '../common/buttons/FilterButton';

const TopRestaurant = ({ restro }) => {
  const [restroData, setrestroData] = useState(restro);

  const fetchTopRatedRestro = () => {
    console.log('clicked top restro');
    const topRated = restro.filter((res) => res.rating > 4.5);

    setrestroData(topRated);
  };

  const showAllResto = () => {
    setrestroData(restro);
  };
  const addToCart = () => {

  }

  return (
    <div className="top-restaurant-conatiner">
      <FilterButton label="Top Rated Restro" onClick={fetchTopRatedRestro} />
      <FilterButton label="Show All" onClick={showAllResto} />
      
      <h2>Top Restaurants For You 🥯</h2>
      <div className="top-restaurant-list">
        {restroData.map((res) => {
          return (
            <RestaurantCard
              key={res.id}
              name={res.name}
              cuisine={res.cuisines.join(', ')}
              rating={res.rating}
              image={res.image}
            />
          );
        })}
      </div>
    </div>
  );
};

export default TopRestaurant;
