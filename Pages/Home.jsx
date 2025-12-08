import Header from "../Components/Header";
import WhatsInMind from "../Components/WhatInMind";
import TopRestaurant from "../Components/TopRestaurant";
import Footer from "../Components/Footer";
const Home = () => {
    return (
        <div className="home-container">
            <Header />
            <div className="home-content">
                <WhatsInMind />
                <TopRestaurant />

                <Footer />
            </div>
        </div>
    );
}
export default Home;