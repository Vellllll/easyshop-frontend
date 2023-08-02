import { useEffect } from "react";
import Favourite from "../components/favourite/Favourite";
import NavigationDesktop from "../components/common/NavigationDesktop";
import NavigationMobile from "../components/common/NavigationMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";

function FavouritePage(){
    useEffect(function(){
        window.scroll(0,0);
    })

    return (
        <div>
            <div className="desktop">
                <NavigationDesktop/>
            </div>
            <div className="mobile">
                <NavigationMobile/>
            </div>

            <Favourite/>

            <div className="desktop">
                <FooterDesktop/>

            </div>
            <div className="mobile">
                <FooterMobile/>
            </div>
        </div>
    )
}

export default FavouritePage;
