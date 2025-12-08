import Header from "../Components/Header";
import WhatsInMind from "../Components/WhatInMind";
import TopRestaurant from "../Components/TopRestaurant";
const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <WhatsInMind />
                <TopRestaurant />

            </div>
        </div>
    );
}
export default Home;