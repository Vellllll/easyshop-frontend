import { useEffect } from "react";
import Privacy from "../components/others/Privacy";
import NavigationDesktop from "../components/common/NavigationDesktop";
import NavigationMobile from "../components/common/NavigationMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";


function PrivacyPage(){

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

            <Privacy/>

            <div className="desktop">
                <FooterDesktop/>

            </div>
            <div className="mobile">
                <FooterMobile/>
            </div>
        </div>
    )

}

export default PrivacyPage;
