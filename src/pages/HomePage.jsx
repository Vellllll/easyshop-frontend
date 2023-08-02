import FeaturedProduct from "../components/home/FeatruedProduct";
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavigationDesktop from "../components/common/NavigationDesktop";
import NavigationMobile from "../components/common/NavigationMobile";
import HomeTopMobile from "../components/home/HomeTopMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import { useEffect } from "react";
import ApiUrl from "../api/ApiUrl";
import axios from "axios";

function HomePage(){

    useEffect(function(){
        window.scroll(0,0);
        getVisitor();
    });

    function getVisitor(){
        axios.get("http://127.0.0.1:8000/api/get-visitor").then().catch()
    }

    return (
        <div>
            <div className="desktop">
                <NavigationDesktop/>
                <HomeTop/>
            </div>
            <div className="mobile">
                <NavigationMobile/>
                <HomeTopMobile/>
            </div>

            <FeaturedProduct/>
            <NewArrival/>
            <Categories/>
            <Collection/>
            <div className="desktop">
                <FooterDesktop/>

            </div>
            <div className="mobile">
                <FooterMobile/>
            </div>
        </div>
    )
}

export default HomePage;
