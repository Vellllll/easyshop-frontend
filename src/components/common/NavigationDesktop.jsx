import React, { useState } from "react";
import { Navbar, Container, Row, Col, Button } from "react-bootstrap";
import Logo from "../../assets/images/easyshop.png"
import { Link } from "react-router-dom";
import MegaMenuAll from "../home/MegaMenuAll";
import Bars from "../../assets/images/menu.png";

function NavigationDesktop(){

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
            <Navbar className="navbar" fixed="top" bg="light">
                <Container fluid={true} className="fixed-top shadow-sm p-2 mb-0 bg-white">
                    <Row className="w-100">
                        <Col lg={4} md={4} sm={12} xs={12}>
                            <img src={Bars} onClick={menuHandler} className="bars-img" />
                            <Link to="/">
                                <img className="nav-logo" src={Logo} alt="" />
                            </Link>
                        </Col>
                        <Col className="mt-0 p-1" lg={4} md={4} sm={12} xs={12}>
                            <div className="input-group w-100">
                                <input type="text" className="form-control" />

                            </div>
                        </Col>
                        <Col className="mt-1 p-1" lg={4} md={4} sm={12} xs={12}>
                            <Link to="/favourite" className="btn">
                                <i className="fa h4 fa-heart"></i>
                                <sup>
                                    <span className="badge text-white bg-danger">3</span>
                                </sup>
                            </Link>
                            <Link to="/notification" className="btn">
                                <i className="fa h4 fa-bell"></i>
                                <sup>
                                    <span className="badge text-white bg-danger">5</span>
                                </sup>
                            </Link>
                            <a href="" className="btn">
                                <i className="fa h4 fa-mobile-alt"></i>
                            </a>
                            <Link to="/login" className="btn">LOGIN</Link>
                            <Link to="/cart" className="cart-btn">
                                <i className="fa fa-shopping-cart"></i> 3
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Navbar>
            <div className={ menu.sideNav }>
                <MegaMenuAll/>
            </div>
            <div onClick={ menuHandler } className={ menu.contentOverlay }></div>
        </div>
    )
}

export default NavigationDesktop;
