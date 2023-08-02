import ProductDetails from "../components/product/ProductDetails";
import { useEffect } from "react";
import NavigationDesktop from "../components/common/NavigationDesktop";
import NavigationMobile from "../components/common/NavigationMobile";
import FooterDesktop from "../components/common/FooterDesktop";
import FooterMobile from "../components/common/FooterMobile";
import SuggestedProducts from "../components/product/SuggestedProducts";

function ProductDetailsPage(){
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

            <ProductDetails/>
            <SuggestedProducts/>

            <div className="desktop">
                <FooterDesktop/>

            </div>
            <div className="mobile">
                <FooterMobile/>
            </div>
        </div>
    )
}

export default ProductDetailsPage;
