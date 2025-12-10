import Header from "../components/layout/Header";
import WhatsInMind from "../components/ui/WhatInMind";
import TopRestaurant from "../components/ui/TopRestaurant";
import Footer from "../components/layout/Footer";
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