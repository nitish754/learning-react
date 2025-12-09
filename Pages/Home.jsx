import Header from "../Components/Header";
import WhatsInMind from "../Components/WhatInMind";
import TopRestaurant from "../Components/TopRestaurant";
import Footer from "../Components/Footer";
import WhatsInMindData from "../utils/whatsInMind.json"
import restaurants from "../utils/restaurant.json"

const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <WhatsInMind data={WhatsInMindData}/>
                <TopRestaurant restro={restaurants}/>

                <Footer />
            </div>
        </div>
    );
}
export default Home;