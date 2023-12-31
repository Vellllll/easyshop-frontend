import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "../pages/ContactPage";
import HomePage from "../pages/HomePage";
import PurchasePage from "../pages/PurchasePage";
import UserLoginPage from "../pages/UserLoginPage";
import PrivacyPage from "../pages/PrivacyPage";
import RefundPage from "../pages/RefundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";
import AboutPage from "../pages/AboutPage";

function AppRoute(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/login" element={<UserLoginPage />} />
                <Route path="/contact" element={<ContactPage/>} />
                <Route path="/purchase" element={<PurchasePage/>} />
                <Route path="/privacy" element={<PrivacyPage/>} />
                <Route path="/refund" element={<RefundPage/>} />
                <Route path="/productdetails" element={<ProductDetailsPage/>} />
                <Route path="/notification" element={<NotificationPage/>} />
                <Route path="/favourite" element={<FavouritePage/>} />
                <Route path="/cart" element={<CartPage/>} />
                <Route path="/about" element={<AboutPage/>} />
            </Routes>
        </Router>
    )
}

export default AppRoute;
