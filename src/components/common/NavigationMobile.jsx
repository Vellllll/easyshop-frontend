import { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/easyshop.png"
import MegaMenuMobile from "../home/MegaMenuMobile";

function NavigationMobile(){

    const [ menu, setMenu ] = useState({
        sideNav: 'sideNavClose',
        contentOverlay: 'contentOverlayClose',
    });

    const menuHandler = () => {
        if(menu.sideNav === 'sideNavClose'){
            setMenu(function(){
                return {
                    sideNav: 'sideNavOpen',
                    contentOverlay: 'contentOverlayOpen',
                }
            })
        } else {
            setMenu(function(){
                return {
                    sideNav: 'sideNavClose',
                    contentOverlay: 'contentOverlayClose',
                }
            })
        }
    }

    return (
        <div className="topSectionDown">
            <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                <Row className="w-100">
                    <Col lg={4} md={4} sm={12} xs={12}>
                        <Button onClick={menuHandler} className="btn">
                            <i className="fa fa-bars"></i>
                        </Button>
                        <Link to="/">
                            <img className="nav-logo" src={Logo} alt="" />
                        </Link>
                        <Button className="cart-btn">
                            <i className="fa fa-shopping-cart"></i> 3
                        </Button>
                    </Col>
                </Row>
            </Container>
            <div className={ menu.sideNav }>
                <MegaMenuMobile/>
            </div>
            <div onClick={ menuHandler } className={ menu.contentOverlay }></div>
        </div>
    )
}

export default NavigationMobile;
