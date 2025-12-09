import Header from "../components/Header";
import WhatsInMind from "../components/WhatInMind";
import TopRestaurant from "../components/TopRestaurant";
import Footer from "../components/Footer";
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