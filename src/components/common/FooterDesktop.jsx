import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Apple from "../../assets/images/apple.png";
import GooglePlay from "../../assets/images/google.png";
import axios from "axios";
import { useState, useEffect } from "react";

function FooterDesktop(){
    const [ data, setData ] = useState({
        address: "",
        android_app_link: "",
        ios_app_link: "",
        facebook_link: "",
        twitter_link: "",
        instagram_link: "",
        copyright_text: "",
        divLoader: "",
        mainDiv: "d-none",
    });

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/get-site-info').then((response) => {
            if(response.status == 200){
                let jsonData = response.data[0];
                setData(() => ({
                    address: jsonData['address'],
                    android_app_link: jsonData['android_app_link'],
                    ios_app_link: jsonData['ios_app_link'],
                    facebook_link: jsonData['facebook_link'],
                    twitter_link: jsonData['twitter_link'],
                    instagram_link: jsonData['instagram_link'],
                    copyright_text: jsonData['copyright_text'],
                    divLoader: "d-none",
                    mainDiv: "",
                }))
            }
        })
    })

    return (
        <footer className="footerback m-0 mt-5 pt-3 shadow-sm">
            <Container className={ data.mainDiv }>
                <Row className="px-0 my-5">
                    <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="footer-menu-title">Office Address</h5>
                        <p>{ data.address }</p>
                        <p>E-mail: Loremipsum@gmail.com</p>
                        <h5 className="footer-menu-title">Social Link</h5>
                        <a href={ data.facebook_link }><i className="fab h4 m-1 fa-facebook"></i></a>
                        <a href={ data.instagram_link }><i className="fab h4 m-1 fa-instagram"></i></a>
                        <a href={ data.twitter_link }><i className="fab h4 m-1 fa-twitter"></i></a>
                    </Col>
                    <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="footer-menu-title">Company</h5>
                        <Link to="/about" className="footer-link">About Us</Link><br />
                        <Link to="/" className="footer-link">Company Profile</Link><br />
                        <Link to="/contact" className="footer-link">Contact Us</Link><br />
                    </Col>
                    <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="footer-menu-title">More Info</h5>
                        <Link to="/purchase" className="footer-link">How to Purchase</Link><br />
                        <Link to="/privacy" className="footer-link">Privacy Policy</Link><br />
                        <Link to="/refund" className="footer-link">Refund Policy</Link><br />
                    </Col>
                    <Col className="p-2" lg={3} md={3} sm={6} xs={12}>
                        <h5 className="footer-menu-title">Download App</h5>
                        <a href="">
                            <img className="" src={Apple} alt="" />
                        </a><br />
                        <a href="">
                            <img className="mt-2" src={GooglePlay} alt="" />
                        </a><br />
                        Change Your Language <br />
                        <div id="google_translate_element"></div>
                    </Col>
                </Row>
            </Container>
            <div className={ data.mainDiv }>
                <Row className="text-center m-0 pt-3 pb-1 bg-dark">
                    <h6 className="text-white">@Copyright 2023 by Easy Shop. All Rights Reserved.</h6>
                </Row>
            </div>
            <div className={ data.divLoader }>
                <div className="ph-item">
                    <div className="ph-col-12">
                        <div className="ph-row">
                            <div className="ph-col-6 big"></div>
                            <div className="ph-col-4 empty big"></div>
                            <div className="ph-col-2 big"></div>
                            <div className="ph-col-4"></div>
                            <div className="ph-col-8 empty"></div>
                            <div className="ph-col-6"></div>
                            <div className="ph-col-6 empty"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                            <div className="ph-col-12"></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default FooterDesktop;
