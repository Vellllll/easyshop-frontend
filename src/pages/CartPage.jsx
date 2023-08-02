import Cart from "../components/cart/Cart";
import NavigationDesktop from "../components/common/NavigationDesktop";
import NavigationMobile from "../components/common/NavigationMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import { useEffect } from "react";

function CartPage(){
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

            <Cart/>

            <div className="desktop">
                <FooterDesktop/>

            </div>
            <div className="mobile">
                <FooterMobile/>
            </div>
        </div>
    )
}

export default CartPage;
